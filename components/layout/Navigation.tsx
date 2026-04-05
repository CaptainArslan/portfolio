"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Fit Check", href: "/fit-check" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl border-b border-[#E2E8F0] bg-white/90 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <motion.div
              className="w-10 h-10 lg:w-12 lg:h-12 bg-[#2563EB] rounded-lg flex items-center justify-center transition-all group-hover:shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-sm lg:text-base font-sora">
                MA
              </span>
            </motion.div>
            <span className="hidden sm:block font-semibold text-[#0F172A] text-sm lg:text-base font-sora">
              Muhammad Arslan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-2 ${
                  isActive(link.href)
                    ? "text-[#2563EB]"
                    : "text-[#475569] hover:text-[#0F172A]"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block flex-shrink-0">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#475569] hover:text-[#0F172A] transition-colors flex-shrink-0"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-[#E2E8F0] bg-white/95 backdrop-blur-md"
          >
            <div className="container-max px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 px-4 text-sm font-medium rounded-lg transition-all ${
                      isActive(link.href)
                        ? "bg-[#DBEAFE] text-[#2563EB]"
                        : "text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: navLinks.length * 0.05,
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="pt-2 border-t border-[#E2E8F0]"
              >
                <Link
                  href="/contact"
                  className="btn-primary w-full inline-flex items-center justify-center text-center mt-2"
                >
                  Hire Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
