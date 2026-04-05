"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`${centered ? "text-center" : ""} ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {eyebrow && (
        <motion.p
          className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-3"
          variants={fadeInUp}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4 font-sora"
        variants={fadeInUp}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-base sm:text-lg text-[#475569] max-w-2xl"
          variants={fadeInUp}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
