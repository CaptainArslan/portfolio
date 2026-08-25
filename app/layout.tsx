import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SiteShell } from "@/components/layout/SiteShell";

/* ============================================
   FONT CONFIGURATION
   ============================================ */
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

/* ============================================
   METADATA CONFIGURATION
   ============================================ */
export const metadata: Metadata = {
  title: "Muhammad Arslan — Back-End Engineer | Laravel & PHP",
  description:
    "Results-driven Back-End Engineer with 5+ years building scalable Laravel systems, REST APIs, payment integrations, and CRM automations.",
  keywords: [
    "Laravel",
    "PHP",
    "Back-End Engineer",
    "Full-Stack Developer",
    "REST API",
    "MySQL",
    "Backend Development",
    "Web Development",
  ],
  authors: [
    {
      name: "Muhammad Arslan",
      url: "https://muhammadarslan.com",
    },
  ],
  creator: "Muhammad Arslan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadarslan.com",
    siteName: "Muhammad Arslan Portfolio",
    title: "Muhammad Arslan — Back-End Engineer | Laravel & PHP",
    description:
      "Results-driven Back-End Engineer with 5+ years building scalable Laravel systems, REST APIs, payment integrations, and CRM automations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Arslan - Back-End Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Arslan — Back-End Engineer | Laravel & PHP",
    description:
      "Results-driven Back-End Engineer with 5+ years building scalable Laravel systems, REST APIs, payment integrations, and CRM automations.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://muhammadarslan.com",
  },
};

/* ============================================
   LAYOUT COMPONENT
   ============================================ */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563EB" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`font-inter min-w-0 text-[#0F172A] bg-[#F8FAFC] antialiased ${inter.variable}`}
      >
        {/* Background Grid Pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-40">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
          >
            <defs>
              <pattern
                id="grid"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 100 0 L 0 0 0 100"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="0.5"
                />
                <circle
                  cx="0"
                  cy="0"
                  r="1"
                  fill="#E2E8F0"
                  opacity="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <ScrollProgress />

        {/* Main Content — nav outside overflow-x clip; mobile nav is fixed + spacer below */}
        <SiteShell>
          <div className="relative z-10 flex min-h-screen min-w-0 flex-col">
            <Navigation />
            {/* Reserves space for fixed mobile header (toolbar + safe area) */}
            <div
              className="shrink-0 md:hidden"
              style={{
                height: "calc(4.25rem + env(safe-area-inset-top, 0px))",
              }}
              aria-hidden
            />
            <div className="flex min-w-0 flex-1 flex-col overflow-x-clip">
              <main className="min-w-0 flex-grow">{children}</main>
              <Footer />
            </div>
            <ScrollToTop />
          </div>
        </SiteShell>
      </body>
    </html>
  );
}
