"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  isExternal?: boolean;
}

const variants = {
  primary: "bg-[#2563EB] text-white hover:bg-[#1D4ED8]",
  secondary:
    "border border-[#E2E8F0] text-[#0F172A] hover:border-[#2563EB] hover:text-[#2563EB]",
  ghost: "text-[#2563EB] hover:bg-[#DBEAFE]",
};

const sizes = {
  sm: "px-4 py-2 text-sm font-medium rounded-lg",
  md: "px-6 py-3 text-base font-medium rounded-lg",
  lg: "px-8 py-4 text-lg font-semibold rounded-lg",
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      isExternal = false,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses = `inline-flex items-center justify-center font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

    const content = (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        {children}
      </motion.div>
    );

    if (href) {
      if (isExternal) {
        return (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClasses}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.a>
        );
      }

      return (
        <Link href={href} className={baseClasses} ref={ref as React.Ref<HTMLAnchorElement>}>
          {children}
        </Link>
      );
    }

    return (
      <motion.button
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        className={baseClasses}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
