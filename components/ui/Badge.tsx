import React from "react";

interface BadgeProps {
  variant?: "default" | "accent" | "success" | "warning";
  children: React.ReactNode;
  className?: string;
}

const variants = {
  default: "bg-[#F1F5F9] text-[#0F172A]",
  accent: "bg-[#DBEAFE] text-[#2563EB]",
  success: "bg-[#DCFCE7] text-[#16A34A]",
  warning: "bg-[#FEF3C7] text-[#D97706]",
};

export function Badge({
  variant = "default",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
