import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/muhammadarslan",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/muhammadarslan",
    label: "GitHub",
  },
  { icon: Mail, href: "mailto:am1667099@gmail.com", label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E2E8F0] bg-white">
      <div className="container-max py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm font-sora">
                  MA
                </span>
              </div>
              <span className="font-semibold text-[#0F172A] font-sora">
                Muhammad Arslan
              </span>
            </div>
            <p className="body-text">Building backend systems that scale.</p>
            <p className="text-sm text-[#94A3B8]">
              Based in Gujranwala, Pakistan · Available Remotely
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[#94A3B8] hover:text-[#2563EB] hover:bg-[#F1F5F9] rounded-lg transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="eyebrow-text mb-6">Navigation</h3>
            <nav className="space-y-3">
              {footerNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-[#475569] hover:text-[#2563EB] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Get In Touch */}
          <div>
            <h3 className="eyebrow-text mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-1">
                  Email
                </p>
                <a
                  href="mailto:am1667099@gmail.com"
                  className="text-sm text-[#0F172A] hover:text-[#2563EB] transition-colors duration-300"
                >
                  am1667099@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-1">
                  Phone
                </p>
                <a
                  href="tel:+923177638978"
                  className="text-sm text-[#0F172A] hover:text-[#2563EB] transition-colors duration-300"
                >
                  +92 317 763 8978
                </a>
              </div>
              <div>
                <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-1">
                  Location
                </p>
                <p className="text-sm text-[#0F172A]">
                  Gujranwala, Pakistan
                </p>
              </div>

              {/* Hire Me CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors duration-300 pt-2"
              >
                Hire Me
                <span className="text-base">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E2E8F0]">
          <div className="space-y-2">
            <p className="text-xs text-[#94A3B8]">
              © {currentYear} Muhammad Arslan. All rights reserved.
            </p>
            <p className="text-xs text-[#94A3B8]">
              Built with Next.js · Deployed on Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
