"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { staggerContainer, fadeInUp, buttonPrimary } from "@/lib/animations";
import ctaSectionData from "@/data/cta-section.json";

function DotPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.06]"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <defs>
        <pattern
          id="dots"
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="5" cy="5" r="1" fill="white" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#dots)" />
    </svg>
  );
}

export function CTASection() {
  return (
    <section className="relative bg-gradient-to-r from-[#2563EB] via-[#1E40AF] to-[#1D4ED8] py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <DotPattern />

      {/* Gradient Accent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Eyebrow */}
          <motion.p
            className="text-sm font-medium text-white/70 uppercase tracking-widest mb-4"
            variants={fadeInUp}
          >
            {ctaSectionData.eyebrow}
          </motion.p>

          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 font-sora leading-tight"
            variants={fadeInUp}
          >
            {ctaSectionData.headline}
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-white/80 mb-10 leading-relaxed"
            variants={fadeInUp}
          >
            {ctaSectionData.subtext}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            variants={fadeInUp}
          >
            {/* Primary Button — external (e.g. WhatsApp) links open in a new tab */}
            {ctaSectionData.primaryButton.link.startsWith("http") ? (
              <a
                href={ctaSectionData.primaryButton.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <motion.div
                  variants={buttonPrimary}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2563EB] font-semibold rounded-lg transition-all duration-200 shadow-lg w-full sm:w-auto"
                >
                  {ctaSectionData.primaryButton.text}
                </motion.div>
              </a>
            ) : (
              <Link href={ctaSectionData.primaryButton.link} className="w-full sm:w-auto">
                <motion.div
                  variants={buttonPrimary}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2563EB] font-semibold rounded-lg transition-all duration-200 shadow-lg w-full sm:w-auto"
                >
                  {ctaSectionData.primaryButton.text}
                </motion.div>
              </Link>
            )}

            {/* Secondary Button */}
            <Link href={ctaSectionData.secondaryButton.link} className="w-full sm:w-auto">
              <motion.div
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 8px 24px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 w-full sm:w-auto"
              >
                {ctaSectionData.secondaryButton.text}
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
