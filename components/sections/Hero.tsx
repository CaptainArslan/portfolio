"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Zap, Shield, Database } from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInRight,
  floatAnimation,
} from "@/lib/animations";
import heroData from "@/data/hero.json";

// Dynamic import of BackgroundScene without SSR
const BackgroundScene = dynamic(
  () => import("@/components/three/BackgroundScene"),
  { ssr: false }
);

/* ============================================
   CODE WINDOW COMPONENT
   ============================================ */
const CodeWindow = () => (
  <div className="code-terminal shadow-2xl">
    {/* Terminal header */}
    <div className="code-terminal-header">
      <span className="code-dot bg-[#FF5F57]" />
      <span className="code-dot bg-[#FEBC2E]" />
      <span className="code-dot bg-[#28C840]" />
      <span className="ml-3 text-xs text-white/40 font-mono">
        PaymentProcessor.php
      </span>
    </div>

    {/* Code content */}
    <div className="p-5 overflow-x-auto">
      <pre className="text-xs sm:text-sm leading-relaxed font-mono text-[#CBD5E1]">{heroData.codeSnippet}</pre>
    </div>

    {/* Status bar */}
    <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#28C840]" />
        <span className="text-xs text-white/30 font-mono">{heroData.statusBar.uptime}</span>
      </div>
      <span className="text-xs text-white/20 font-mono">{heroData.statusBar.tech}</span>
    </div>
  </div>
);

/* ============================================
   METRIC PILL COMPONENT
   ============================================ */
const MetricPill = ({
  icon: iconName,
  label,
  delay,
}: {
  icon: string;
  label: string;
  delay: number;
}) => {
  const icons = { Zap, Database, Shield };
  const Icon = icons[iconName as keyof typeof icons];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 border border-[#E2E8F0] rounded-full text-xs font-semibold text-[#475569] shadow-sm backdrop-blur-sm"
    >
      <Icon size={12} className="text-[#2563EB]" />
      {label}
    </motion.div>
  );
};

/* ============================================
   HERO COMPONENT
   ============================================ */
export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#F8FAFC]" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft accent glow — top right */}
      <div
        className="absolute top-1/4 right-1/3 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Soft accent glow — bottom left */}
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.05) 0%, transparent 70%)",
        }}
      />

      {/* 3D Background Scene */}
      {mounted && (
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <BackgroundScene />
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] gap-14 items-center">

            {/* ─── LEFT COLUMN ───────────────────── */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
            >
              {/* Eyebrow */}
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#DBEAFE] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold rounded-full uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                  {heroData.eyebrow}
                </span>
              </motion.div>

              {/* Name + role */}
              <motion.p
                variants={fadeInUp}
                className="text-sm font-semibold text-[#94A3B8] mb-2 tracking-wide uppercase"
              >
                {heroData.name}
              </motion.p>

              {/* Headline */}
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-[#0F172A] mb-6 font-sora"
              >
                I Build Backend Systems That{" "}
                <span className="gradient-text">Scale Under Pressure</span>
              </motion.h1>

              {/* Supporting copy */}
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-lg mb-8"
              >
                {heroData.description}
              </motion.p>

              {/* Metric pills */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-8">
                {heroData.metrics.map((metric, index) => (
                  <MetricPill key={index} icon={metric.icon} label={metric.label} delay={0.6 + index * 0.1} />
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3"
              >
                {/* Primary CTA */}
                <Link href={heroData.primaryButton.link}>
                  <motion.div
                    whileHover={{ y: -2, boxShadow: "0 12px 28px rgba(37,99,235,0.25)" }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-xl transition-all duration-200 shadow-lg cursor-pointer"
                  >
                    {heroData.primaryButton.text}
                    <ArrowRight size={16} />
                  </motion.div>
                </Link>

                {/* Secondary CTA */}
                <a
                  href={heroData.secondaryButton.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] text-[#0F172A] font-semibold rounded-xl transition-all duration-200 shadow-sm cursor-pointer"
                  >
                    <Download size={15} />
                    {heroData.secondaryButton.text}
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>

            {/* ─── RIGHT COLUMN ──────────────────── */}
            <motion.div
              className="hidden lg:block"
              variants={fadeInRight}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
            >
              {/* Floating code window */}
              <motion.div
                variants={floatAnimation}
                animate="animate"
                initial="rest"
              >
                <CodeWindow />
              </motion.div>

              {/* Floating stat badges */}
              <motion.div
                className="flex items-center justify-end gap-3 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className="px-3 py-2 bg-white border border-[#E2E8F0] rounded-lg shadow-sm transition-all duration-300"
                >
                  <p className="text-xs text-[#94A3B8]">Current Role</p>
                  <p className="text-sm font-bold text-[#0F172A]">Hegemonic Inc</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="px-3 py-2 bg-white border border-[#E2E8F0] rounded-lg shadow-sm transition-all duration-300"
                >
                  <p className="text-xs text-[#94A3B8]">Stack</p>
                  <p className="text-sm font-bold text-[#0F172A]">Laravel · AWS</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-[#94A3B8] uppercase tracking-widest font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-[#CBD5E1] rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-[#94A3B8] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
