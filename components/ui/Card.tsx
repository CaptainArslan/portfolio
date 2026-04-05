"use client";

import React from "react";
import { motion } from "framer-motion";
import { cardHover } from "@/lib/animations";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
}

export function Card({
  children,
  className = "",
  glass = false,
  hover = true,
}: CardProps) {
  const baseClasses = `rounded-2xl border border-[#E2E8F0] transition-all duration-400 ${
    glass
      ? "bg-white/40 backdrop-blur-md"
      : "bg-[#FFFFFF]"
  } ${className}`;

  if (!hover) {
    return <div className={baseClasses}>{children}</div>;
  }

  return (
    <motion.div
      className={baseClasses}
      variants={cardHover}
      initial="rest"
      whileHover="hover"
    >
      {children}
    </motion.div>
  );
}
