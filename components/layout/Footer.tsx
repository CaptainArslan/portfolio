import Link from "next/link";
import { Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";

const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Fit Check", href: "/fit-check" },
];

const EXPERTISE = [
  "Laravel & PHP Backend",
  "REST API Architecture",
  "MySQL Optimization",
  "Redis Caching",
  "AWS Infrastructure",
  "Payment Integrations",
  "GoHighLevel CRM",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E2E8F0] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* ─── Column 1: Brand & Identity ─── */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-white font-bold text-sm font-sora">MA</span>
              </div>
              <div>
                <p className="font-bold text-[#0F172A] font-sora leading-tight">
                  Muhammad Arslan
                </p>
                <p className="text-xs text-[#94A3B8]">Backend & Systems Engineer</p>
              </div>
            </div>

            <p className="text-sm text-[#475569] leading-relaxed max-w-sm">
              Building backend systems that scale — specializing in Laravel, PHP,
              MySQL, Redis, and AWS with a focus on payment systems, CRM integrations,
              and high-performance APIs.
            </p>

            {/* Location & status */}
            <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
              <MapPin size={12} />
              <span>Gujranwala, Pakistan · Available Remote Worldwide</span>
            </div>

            {/* Availability indicator */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-xs font-semibold text-[#16A34A]">
                Currently available for new opportunities
              </span>
            </div>

            {/* Social links */}
            <div className="flex gap-2 pt-1">
              <a
                href="https://www.linkedin.com/in/muhammadarslan-390448213"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-[#F1F5F9] border border-[#E2E8F0] hover:bg-[#DBEAFE] hover:border-[#2563EB] hover:text-[#2563EB] text-[#475569] text-xs font-medium rounded-lg transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={13} />
                LinkedIn
              </a>
              <a
                href="mailto:am1667099@gmail.com"
                className="inline-flex items-center gap-2 px-3 py-2 bg-[#F1F5F9] border border-[#E2E8F0] hover:bg-[#DBEAFE] hover:border-[#2563EB] hover:text-[#2563EB] text-[#475569] text-xs font-medium rounded-lg transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={13} />
                Email
              </a>
            </div>
          </div>

          {/* ─── Column 2: Navigation ─── */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-5">
              Navigation
            </h3>
            <nav className="space-y-2.5">
              {footerNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-[#475569] hover:text-[#2563EB] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ─── Column 3: Expertise + Contact ─── */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-5">
              Expertise
            </h3>
            <ul className="space-y-2 mb-8">
              {EXPERTISE.map((item) => (
                <li key={item} className="text-sm text-[#475569] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#2563EB] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-4">
              Get In Touch
            </h3>
            <a
              href="mailto:am1667099@gmail.com"
              className="text-sm text-[#0F172A] hover:text-[#2563EB] transition-colors font-medium block mb-1"
            >
              am1667099@gmail.com
            </a>
            <a
              href="tel:+923177638978"
              className="text-sm text-[#475569] hover:text-[#2563EB] transition-colors block mb-4"
            >
              +92 317 763 8978
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
            >
              Start a Conversation
              <ExternalLink size={13} />
            </Link>
          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#94A3B8]">
            © {currentYear} Muhammad Arslan. All rights reserved.
          </p>
          <p className="text-xs text-[#94A3B8]">
            Built with Next.js · Tailwind CSS · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
