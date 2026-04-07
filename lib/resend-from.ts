/**
 * Resend only allows sending from addresses on domains you verify at https://resend.com/domains
 * (or their test sender). Public inboxes like @gmail.com cannot be used as From.
 */

const BLOCKED_FROM_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "aol.com",
  "protonmail.com",
  "pm.me",
]);

function domainFromResendFrom(from: string): string | null {
  const bracket = from.match(/<([^>]+)>/);
  const addr = (bracket ? bracket[1] : from).trim();
  const at = addr.lastIndexOf("@");
  if (at === -1) return null;
  return addr.slice(at + 1).toLowerCase();
}

/** Returns a user-facing error message, or null if the From line is OK to try. */
export function getResendFromConfigError(from: string): string | null {
  const domain = domainFromResendFrom(from);
  if (!domain) {
    return "RESEND_FROM must be a valid address, e.g. Portfolio <hello@yourdomain.com> or onboarding@resend.dev.";
  }
  if (BLOCKED_FROM_DOMAINS.has(domain)) {
    return (
      "Resend cannot send email From addresses at @" +
      domain +
      " — that domain is not yours to verify. " +
      "Use RESEND_FROM with a domain you add at https://resend.com/domains (e.g. noreply@yourdomain.com), " +
      "or for quick tests use: Portfolio <onboarding@resend.dev>. " +
      "Keep your personal Gmail in CONTACT_NOTIFICATION_EMAIL only (that is the recipient)."
    );
  }
  return null;
}
