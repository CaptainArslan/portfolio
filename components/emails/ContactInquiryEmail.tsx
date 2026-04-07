import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export interface ContactInquiryEmailProps {
  name: string;
  email: string;
  subject: string;
  type: string;
  message: string;
}

/** Matches `designs/email_template` palette: light surfaces, primary #1550d3, on-background #191c1e */
const colors = {
  background: "#f8f9fb",
  surface: "#ffffff",
  surfaceLow: "#f2f4f6",
  surfaceContainer: "#edeef0",
  onBackground: "#191c1e",
  onSurface: "#191c1e",
  onSurfaceVariant: "#434654",
  primary: "#1550d3",
  outlineVariant: "#c3c5d7",
};

export function ContactInquiryEmail({
  name,
  email,
  subject,
  type,
  message,
}: ContactInquiryEmailProps) {
  const previewText = `New inquiry from ${name} — ${type}`;

  return (
    <Html lang="en">
      <Head />
      <Preview>{previewText}</Preview>
      <Body
        style={{
          margin: 0,
          padding: "0 24px 48px",
          backgroundColor: colors.background,
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <Container
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            paddingTop: "40px",
          }}
        >
          <Section style={{ marginBottom: "32px", textAlign: "left" as const }}>
            <Text
              style={{
                display: "inline-block",
                margin: "0 0 16px",
                padding: "6px 12px",
                backgroundColor: "#e1e2e4",
                color: colors.onSurfaceVariant,
                borderRadius: "9999px",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
              }}
            >
              Portfolio · Contact form
            </Text>
            <Heading
              as="h1"
              style={{
                margin: 0,
                fontSize: "32px",
                lineHeight: 1.2,
                fontWeight: 700,
                color: colors.onBackground,
                fontFamily:
                  '"Space Grotesk", Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              }}
            >
              New inquiry received
            </Heading>
          </Section>

          <Section
            style={{
              backgroundColor: colors.surface,
              borderRadius: "12px",
              padding: "40px 36px",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)",
              borderTop: `6px solid ${colors.primary}`,
            }}
          >
            <Section>
              <Text
                style={{
                  margin: "0 0 28px",
                  fontSize: "17px",
                  lineHeight: 1.65,
                  color: colors.onSurfaceVariant,
                }}
              >
                Someone submitted the contact form on your portfolio. Reply directly to this email
                to respond — <strong style={{ color: colors.onBackground }}>Reply-To</strong> is set
                to their address.
              </Text>

              <Section style={{ marginBottom: "36px" }}>
                <Row label="Full name" value={name} />
                <Row label="Email" value={email} isLink={`mailto:${email}`} />
                <Row label="Subject" value={subject.trim() || "—"} />
                <Row label="Inquiry type" value={type} />
                <Section style={{ marginTop: "24px" }}>
                  <Text
                    style={{
                      margin: "0 0 8px",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase" as const,
                      color: colors.primary,
                      opacity: 0.85,
                    }}
                  >
                    Message
                  </Text>
                  <Section
                    style={{
                      padding: "22px",
                      backgroundColor: colors.surfaceLow,
                      borderRadius: "12px",
                      borderLeft: `3px solid ${colors.primary}`,
                    }}
                  >
                    <Text
                      style={{
                        margin: 0,
                        fontSize: "15px",
                        lineHeight: 1.65,
                        color: colors.onSurfaceVariant,
                        whiteSpace: "pre-wrap" as const,
                      }}
                    >
                      {message}
                    </Text>
                  </Section>
                </Section>
              </Section>

              <Section
                style={{
                  backgroundColor: colors.surfaceContainer,
                  borderRadius: "12px",
                  padding: "24px",
                  border: `1px solid ${colors.outlineVariant}26`,
                }}
              >
                <Text
                  style={{
                    margin: "0 0 6px",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: colors.onBackground,
                    fontFamily:
                      '"Space Grotesk", Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                  }}
                >
                  What happens next?
                </Text>
                <Text
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: colors.onSurfaceVariant,
                  }}
                >
                  Your site promises a response within <strong style={{ color: colors.onBackground }}>24 hours</strong> on
                  weekdays. Use Reply in Gmail to continue the thread with {name}.
                </Text>
              </Section>
            </Section>
          </Section>

          <Hr
            style={{
              borderColor: `${colors.outlineVariant}40`,
              margin: "36px 0 24px",
            }}
          />
          <Section style={{ textAlign: "center" as const }}>
            <Text
              style={{
                margin: "0 0 4px",
                fontSize: "18px",
                fontWeight: 700,
                color: colors.onBackground,
                fontFamily:
                  '"Space Grotesk", Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              }}
            >
              Muhammad Arslan
            </Text>
            <Text style={{ margin: 0, fontSize: "13px", color: colors.onSurfaceVariant }}>
              Backend &amp; Systems Engineer · Portfolio contact notification
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

function Row({
  label,
  value,
  isLink,
}: {
  label: string;
  value: string;
  isLink?: string;
}) {
  return (
    <Section style={{ marginBottom: "20px" }}>
      <table width="100%" cellPadding={0} cellSpacing={0} role="presentation">
        <tbody>
          <tr>
            <td
              style={{
                width: "140px",
                verticalAlign: "baseline",
                paddingBottom: "8px",
              }}
            >
              <Text
                style={{
                  margin: 0,
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                  color: colors.primary,
                  opacity: 0.85,
                }}
              >
                {label}
              </Text>
            </td>
            <td style={{ verticalAlign: "baseline", paddingBottom: "8px" }}>
              {isLink ? (
                <Link
                  href={isLink}
                  style={{
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: 600,
                    color: colors.onBackground,
                    textDecoration: "none",
                  }}
                >
                  {value}
                </Link>
              ) : (
                <Text
                  style={{
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: 600,
                    color: colors.onBackground,
                    fontFamily:
                      '"Space Grotesk", Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                  }}
                >
                  {value}
                </Text>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}

export default ContactInquiryEmail;
