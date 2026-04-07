import { NextRequest, NextResponse } from "next/server";
import * as React from "react";
import { render } from "@react-email/render";
import { Resend } from "resend";
import { z } from "zod";
import { ContactInquiryEmail } from "@/components/emails/ContactInquiryEmail";
import { getResendFromConfigError } from "@/lib/resend-from";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Invalid email address"),
  subject: z.string().trim().max(300).optional(),
  type: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1, "Message is required").max(10000),
});

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM?.trim();
  const to = process.env.CONTACT_NOTIFICATION_EMAIL?.trim();

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      {
        error:
          "Email is not configured. Set RESEND_API_KEY, RESEND_FROM, and CONTACT_NOTIFICATION_EMAIL in .env.local.",
      },
      { status: 500 }
    );
  }

  const fromConfigError = getResendFromConfigError(from);
  if (fromConfigError) {
    return NextResponse.json({ error: fromConfigError }, { status: 500 });
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
