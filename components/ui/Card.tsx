"use client";

import React from "react";
import { motion } from "framer-motion";

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
  const baseClasses = `rounded-xl border border-[#E2E8F0] ${
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
      whileHover={{ y: -4 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
