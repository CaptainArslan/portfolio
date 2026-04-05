"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <DotPattern />

      {/* Gradient Accent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Eyebrow */}
          <motion.p
            className="text-sm font-medium text-white/70 uppercase tracking-widest mb-4"
            variants={itemVariants}
          >
            Ready to Work Together
          </motion.p>

          {/* Headline */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-sora"
            variants={itemVariants}
          >
            Let's Build Something That Scales
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed"
            variants={itemVariants}
          >
            Whether you need a payment system, API architecture, or CRM automation —
            I bring production-proven backend expertise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            variants={itemVariants}
          >
            {/* Primary Button */}
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2563EB] font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Start a Conversation
              </Link>
            </motion.div>

            {/* Secondary Button */}
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 w-full sm:w-auto"
              >
                View My Work
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
