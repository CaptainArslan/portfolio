export type ContactEmailEnvVar =
  | "RESEND_API_KEY"
  | "RESEND_FROM"
  | "CONTACT_NOTIFICATION_EMAIL";

export type ResolvedContactEmailEnv =
  | { ok: true; apiKey: string; from: string; to: string }
  | { ok: false; missing: ContactEmailEnvVar[] };

/**
 * Reads Resend + inbox env with trimming. Empty strings after trim count as missing
 * (common when a var exists in the dashboard but has no value).
 */
export function resolveContactEmailEnv(): ResolvedContactEmailEnv {
  const apiKey = process.env.RESEND_API_KEY?.trim() ?? "";
  const from = process.env.RESEND_FROM?.trim() ?? "";
  const to = process.env.CONTACT_NOTIFICATION_EMAIL?.trim() ?? "";

  const missing: ContactEmailEnvVar[] = [];
  if (!apiKey) missing.push("RESEND_API_KEY");
  if (!from) missing.push("RESEND_FROM");
  if (!to) missing.push("CONTACT_NOTIFICATION_EMAIL");

  if (missing.length > 0) {
    return { ok: false, missing };
  }
  return { ok: true, apiKey, from, to };
}

export function contactEmailConfigErrorMessage(missing: ContactEmailEnvVar[]): string {
  const list = missing.join(", ");
  const onVercel = process.env.VERCEL === "1";

  if (onVercel) {
    return [
      `Email is not configured. The server did not receive a value for: ${list}.`,
      "On Vercel: Project → Settings → Environment Variables — add those exact keys (case-sensitive, no spaces in the name).",
      "Enable them for the environment you use: Production for your main domain, and Preview if you test preview URLs.",
      "Save, then redeploy (Deployments → … → Redeploy). New variables are not applied to old deployments until you redeploy.",
    ].join(" ");
  }

  return [
    `Email is not configured. Missing or empty: ${list}.`,
    "Add them to .env.local (or your host’s environment), restart the dev server, and try again.",
  ].join(" ");
}
