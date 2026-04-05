"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonPrimary } from "@/lib/animations";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  isExternal?: boolean;
  useAnimations?: boolean;
}

const variants = {
  primary: "bg-[#2563EB] text-white hover:bg-[#1D4ED8]",
  secondary:
    "border border-[#E2E8F0] text-[#0F172A] hover:border-[#2563EB] hover:text-[#2563EB]",
  ghost: "text-[#2563EB] hover:bg-[#DBEAFE]",
};

const sizes = {
  sm: "px-4 py-2 text-xs sm:text-sm font-medium rounded-lg min-h-[36px] sm:min-h-[40px]",
  md: "px-6 py-3 text-sm sm:text-base font-medium rounded-lg min-h-[44px]",
  lg: "px-8 py-4 text-base sm:text-lg font-semibold rounded-lg min-h-[48px]",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  children,
  className = "",
  useAnimations = true,
  ...props
}) => {
  const baseClasses = `${variants[variant]} ${sizes[size]} ${className} transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`;

  // External link
  if (href && isExternal) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        variants={useAnimations ? buttonPrimary : undefined}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      >
        {children}
      </motion.a>
    );
  }

  // Internal link
  if (href) {
    return (
      <motion.div
        variants={useAnimations ? buttonPrimary : undefined}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className="inline-block"
      >
        <Link href={href} className={baseClasses}>
          {children}
        </Link>
      </motion.div>
    );
  }

  // Button
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Framer Motion type conflicts with React button props
    <motion.button
      className={baseClasses}
      variants={useAnimations ? buttonPrimary : undefined}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {children}
    </motion.button>
  );
};

export { Button };
