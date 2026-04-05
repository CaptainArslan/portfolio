import React from "react";

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
    <div
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4 font-sora">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#475569] max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
