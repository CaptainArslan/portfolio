import { NextRequest, NextResponse } from "next/server";
import * as React from "react";
import { render } from "@react-email/render";
import { Resend } from "resend";
import { z } from "zod";
import { ContactInquiryEmail } from "@/components/emails/ContactInquiryEmail";
import {
  contactEmailConfigErrorMessage,
  resolveContactEmailEnv,
} from "@/lib/contact-email-env";
import { getResendFromConfigError } from "@/lib/resend-from";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Invalid email address"),
  subject: z.string().trim().max(300).optional(),
  type: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1, "Message is required").max(10000),
  // Honeypot: real visitors never see or fill this field (see app/contact/page.tsx).
  // Bots that autofill every input populate it, which we treat as spam below.
  company: z.string().trim().max(200).optional(),
});

// Lightweight in-memory rate limit: 5 submissions per IP per 10 minutes.
// This resets whenever the serverless instance recycles, so it's a mitigation
// layer against casual/scripted abuse, not a hard guarantee — add a durable
// store (Upstash Redis, etc.) if stronger protection is ever needed.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  recent.push(now);
  submissionsByIp.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages sent. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors;
    const msg =
      Object.values(first).flat()[0] ?? "Please check your form and try again.";
    return NextResponse.json({ error: msg, details: parsed.error.flatten() }, { status: 400 });
  }

  // Honeypot tripped — pretend success so bots don't learn to avoid the field,
  // but never actually send the email.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const env = resolveContactEmailEnv();
  if (!env.ok) {
    return NextResponse.json(
      { error: contactEmailConfigErrorMessage(env.missing) },
      { status: 500 }
    );
  }
  const { apiKey, from, to } = env;

  const fromConfigError = getResendFromConfigError(from);
  if (fromConfigError) {
    return NextResponse.json({ error: fromConfigError }, { status: 500 });
  }

  const { name, email, subject, type, message } = parsed.data;
  const subjectLine = subject?.length
    ? `[Portfolio] ${subject}`
    : `[Portfolio] ${type} — ${name}`;

  const resend = new Resend(apiKey);

  try {
    const html = await render(
      <ContactInquiryEmail
        name={name}
        email={email}
        subject={subject ?? ""}
        type={type}
        message={message}
      />
    );

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: subjectLine,
      html,
    });

    if (error) {
      let msg = error.message ?? "Failed to send email";
      if (/not verified|verify your domain/i.test(msg)) {
        msg +=
          " Add and verify your domain at https://resend.com/domains, then set RESEND_FROM to an address on that domain.";
      }
      return NextResponse.json({ error: msg }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    const messageText = err instanceof Error ? err.message : "Unexpected error";
    return NextResponse.json({ error: messageText }, { status: 500 });
  }
}
