"use client";

import React, { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, ChevronRight } from "lucide-react";

const SkillsScene = dynamic(() => import("@/components/three/SkillsScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#F8FAFC]">
      <div className="text-center">
        <div className="w-10 h-10 border-[3px] border-[#E2E8F0] border-t-[#2563EB] rounded-full animate-spin mx-auto mb-3" />
        <p className="text-[#94A3B8] text-xs font-medium">Loading skill map…</p>
      </div>
    </div>
  ),
});

/* ============================================
   TYPES
   ============================================ */
interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
  description: string;
  impactMetric: string;
}

interface SkillCategory {
  id: string;
  name: string;
  headline: string;
  description: string;
  skills: Skill[];
  impact: string;
  accentColor: string;
}

/* ============================================
   DATA
   ============================================ */
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend",
    name: "Backend & API",
    headline: "Scalable Laravel APIs",
    description: "RESTful architecture serving thousands of requests daily with clean middleware layers.",
    accentColor: "#2563EB",
    skills: [
      { name: "Laravel", level: "Expert", description: "Modern PHP framework powering production systems at scale", impactMetric: "Built APIs handling 10K+ daily requests" },
      { name: "PHP (OOP)", level: "Expert", description: "Core backend language with deep architectural knowledge", impactMetric: "Design patterns across all production projects" },
      { name: "REST API Design", level: "Expert", description: "Industry-standard API design and versioned documentation", impactMetric: "200+ endpoints designed & maintained" },
      { name: "Middleware Development", level: "Advanced", description: "Custom request/response handling and security layers", impactMetric: "Secured PCI-compliant payment flows" },
      { name: "JWT Authentication", level: "Advanced", description: "Token-based security and session management", impactMetric: "Zero authentication breaches recorded" },
    ],
    impact: "Built APIs serving thousands of daily requests with sub-200ms response times",
  },
  {
    id: "database",
    name: "Database & Performance",
    headline: "Optimized Data Architecture",
    description: "Strategic indexing and Redis caching for peak database performance.",
    accentColor: "#10B981",
    skills: [
      { name: "MySQL", level: "Expert", description: "Relational database design and advanced query optimization", impactMetric: "60% query time reduction achieved" },
      { name: "Redis", level: "Advanced", description: "In-memory caching, distributed sessions, and pub/sub", impactMetric: "45% database load reduction" },
      { name: "Query Optimization", level: "Expert", description: "EXPLAIN analysis, index tuning, query restructuring", impactMetric: "From 800ms to sub-100ms response times" },
      { name: "Database Indexing", level: "Advanced", description: "Strategic composite and covering index implementation", impactMetric: "Sub-100ms response guarantees" },
      { name: "Caching Strategies", level: "Advanced", description: "Cache-aside, write-through, and stampede prevention", impactMetric: "85%+ cache hit rate maintained" },
    ],
    impact: "60% query performance improvement through strategic indexing and Redis caching",
  },
  {
    id: "payments",
    name: "Payments & CRM",
    headline: "Transaction & Integration Flow",
    description: "Payment processing and CRM automation at enterprise scale.",
    accentColor: "#F59E0B",
    skills: [
      { name: "Payment Gateway Integration", level: "Expert", description: "Custom and standard processor integrations with retry logic", impactMetric: "10K+ monthly transactions processed" },
      { name: "GoHighLevel CRM", level: "Expert", description: "Webhook-driven CRM automations and bidirectional sync", impactMetric: "50% manual workflow reduction" },
      { name: "Webhook Management", level: "Advanced", description: "Real-time event handling and HMAC signature verification", impactMetric: "Zero polling overhead achieved" },
      { name: "PCI DSS Compliance", level: "Advanced", description: "Secure payment data handling and encrypted middleware", impactMetric: "Zero PCI violations recorded" },
      { name: "Transaction Processing", level: "Advanced", description: "Payment handling with error recovery and audit logging", impactMetric: "99.95% success rate maintained" },
    ],
    impact: "45% transaction success rate boost through custom payment middleware",
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    headline: "Infrastructure & Deployment",
    description: "Zero-downtime deployments and cloud infrastructure management on AWS.",
    accentColor: "#A855F7",
    skills: [
      { name: "AWS (EC2, RDS, S3)", level: "Advanced", description: "Full lifecycle cloud infrastructure management", impactMetric: "High-availability multi-service architecture" },
      { name: "CI/CD Pipelines", level: "Advanced", description: "Automated deployment with GitHub Actions and testing", impactMetric: "70% deployment time reduction" },
      { name: "Git & Version Control", level: "Expert", description: "Git flow, branching strategies, and code reviews", impactMetric: "Zero merge conflicts in team projects" },
      { name: "Linux Server Management", level: "Intermediate", description: "Server administration and Nginx configuration", impactMetric: "99.9% uptime maintained" },
      { name: "Docker", level: "Intermediate", description: "Containerization for consistent environments", impactMetric: "Environment parity across stages" },
    ],
    impact: "Zero-downtime deployments with automated CI/CD pipelines on AWS",
  },
  {
    id: "realtime",
    name: "Real-Time & Async",
    headline: "Queue & Event Systems",
    description: "Background job processing and event-driven architecture at scale.",
    accentColor: "#EC4899",
    skills: [
      { name: "Laravel Queues (Redis)", level: "Advanced", description: "Job queueing, prioritization, and retry management", impactMetric: "1000s of daily tasks processed" },
      { name: "Background Jobs", level: "Advanced", description: "Async processing with failure handling and exponential backoff", impactMetric: "40% response time improvement" },
      { name: "Async Processing", level: "Advanced", description: "Non-blocking operations for long-running video/file tasks", impactMetric: "Video processing pipeline built" },
      { name: "Push Notifications", level: "Intermediate", description: "Firebase real-time notifications and user updates", impactMetric: "100K+ daily notifications at 95% rate" },
    ],
    impact: "Async video processing system with Redis-powered job queues",
  },
];

const LEVEL_CONFIG: Record<string, { bg: string; text: string; border: string }> = {
  Expert:       { bg: "#DCFCE7", text: "#16A34A", border: "#BBF7D0" },
  Advanced:     { bg: "#DBEAFE", text: "#1D4ED8", border: "#BFDBFE" },
  Intermediate: { bg: "#F1F5F9", text: "#64748B", border: "#E2E8F0" },
};

/* ============================================
   ANIMATION VARIANTS
   ============================================ */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

/* ============================================
   PAGE COMPONENT
   ============================================ */
export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("backend");
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const currentCategory = SKILL_CATEGORIES.find((c) => c.id === activeCategory)!;
  const currentSkill = currentCategory.skills.find((s) => s.name === activeSkill);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setActiveSkill(null);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* ─── HEADER ──────────────────────────────── */}
      <section className="bg-[#F1F5F9] border-b border-[#E2E8F0] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-3"
            >
              Technical Arsenal
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#0F172A] mb-4 font-sora leading-tight"
            >
              Skills That Solve Real Problems
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#475569] max-w-2xl"
            >
              Built through 3+ years of production work — not side projects.
              Each skill is backed by a real metric.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── TWO-PANEL LAYOUT ────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* LEFT PANEL: Skills (60%) */}
            <div className="lg:col-span-3 space-y-6">

              {/* Category Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap gap-2"
              >
                {SKILL_CATEGORIES.map((cat) => (
                  <motion.button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeCategory === cat.id
                        ? "text-white shadow-md"
                        : "bg-white text-[#475569] border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB]"
                    }`}
                    style={
                      activeCategory === cat.id
                        ? { backgroundColor: cat.accentColor }
                        : {}
                    }
                  >
                    {cat.name}
                  </motion.button>
                ))}
              </motion.div>

              {/* Category Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  {/* Category headline */}
                  <div>
                    <h2 className="text-2xl font-bold text-[#0F172A] font-sora mb-1">
                      {currentCategory.headline}
                    </h2>
                    <p className="text-[#475569] text-sm">{currentCategory.description}</p>
                  </div>

                  {/* Impact banner */}
                  <div
                    className="p-4 rounded-xl border"
                    style={{
                      backgroundColor: `${currentCategory.accentColor}0d`,
                      borderColor: `${currentCategory.accentColor}25`,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Zap size={14} style={{ color: currentCategory.accentColor }} />
                      <p className="text-sm font-semibold text-[#0F172A]">
                        {currentCategory.impact}
                      </p>
                    </div>
                  </div>

                  {/* Skills grid */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  >
                    {currentCategory.skills.map((skill) => {
                      const isActive = activeSkill === skill.name;
                      const levelCfg = LEVEL_CONFIG[skill.level];

                      return (
                        <motion.button
                          key={skill.name}
                          variants={itemVariants}
                          onClick={() => setActiveSkill(isActive ? null : skill.name)}
                          whileHover={{ y: -2 }}
                          className={`p-4 rounded-xl text-left transition-all duration-200 border group ${
                            isActive
                              ? "border-2 bg-white shadow-md"
                              : "border bg-white border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-sm"
                          }`}
                          style={
                            isActive
                              ? {
                                  borderColor: currentCategory.accentColor,
                                  boxShadow: `0 4px 20px ${currentCategory.accentColor}18`,
                                }
                              : {}
                          }
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <p
                                className="font-semibold text-[#0F172A] text-sm group-hover:text-[#2563EB] transition-colors leading-snug"
                                style={isActive ? { color: currentCategory.accentColor } : {}}
                              >
                                {skill.name}
                              </p>
                              <p className="text-xs text-[#94A3B8] mt-1 line-clamp-2">
                                {skill.description}
                              </p>
                            </div>
                            <span
                              className="flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded border"
                              style={{
                                backgroundColor: levelCfg.bg,
                                color: levelCfg.text,
                                borderColor: levelCfg.border,
                              }}
                            >
                              {skill.level}
                            </span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </motion.div>

                  {/* Skill Detail Panel */}
                  <AnimatePresence>
                    {activeSkill && currentSkill && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="p-6 bg-white border-l-4 rounded-2xl shadow-card"
                        style={{ borderLeftColor: currentCategory.accentColor }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3
                              className="text-xl font-bold font-sora"
                              style={{ color: currentCategory.accentColor }}
                            >
                              {activeSkill}
                            </h3>
                            <span
                              className="inline-block mt-1 px-3 py-0.5 text-xs font-semibold rounded-full border"
                              style={{
                                backgroundColor: LEVEL_CONFIG[currentSkill.level].bg,
                                color: LEVEL_CONFIG[currentSkill.level].text,
                                borderColor: LEVEL_CONFIG[currentSkill.level].border,
                              }}
                            >
                              {currentSkill.level} Level
                            </span>
                          </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-[#E2E8F0]">
                          <div>
                            <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-1">
                              Overview
                            </p>
                            <p className="text-sm text-[#475569] leading-relaxed">
                              {currentSkill.description}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-1">
                              Real Impact
                            </p>
                            <p
                              className="text-sm font-bold"
                              style={{ color: currentCategory.accentColor }}
                            >
                              {currentSkill.impactMetric}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT PANEL: Skill Map (40%) */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="lg:sticky lg:top-24 space-y-4"
              >
                <div>
                  <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-1">
                    Skill Map
                  </p>
                  <h3 className="text-lg font-bold text-[#0F172A] font-sora">
                    Interactive Ecosystem
                  </h3>
                </div>

                {/* 3D Scene */}
                <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-card h-[360px] sm:h-[420px] lg:h-[460px]">
                  <div className="hidden lg:block h-full">
                    <Suspense fallback={null}>
                      <SkillsScene
                        activeSkill={activeSkill}
                        onNodeClick={(skill) => setActiveSkill(skill)}
                      />
                    </Suspense>
                  </div>
                  <div className="lg:hidden h-full flex items-center justify-center px-6 text-center">
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A] mb-2">
                        Interact with the full skill map on larger screens.
                      </p>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        Switch categories and expand skill details above for the same insight on mobile.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Category legend */}
                <div className="p-5 bg-white border border-[#E2E8F0] rounded-2xl">
                  <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-3">
                    Categories
                  </p>
                  <div className="space-y-2">
                    {SKILL_CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors text-left group ${
                          activeCategory === cat.id ? "bg-[#F8FAFC]" : "hover:bg-[#F8FAFC]"
                        }`}
                      >
                        <div
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: cat.accentColor }}
                        />
                        <span className="text-xs text-[#475569] group-hover:text-[#0F172A] font-medium transition-colors">
                          {cat.name}
                        </span>
                        {activeCategory === cat.id && (
                          <ChevronRight size={12} className="ml-auto text-[#94A3B8]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Snapshot stats */}
                <div className="p-5 bg-gradient-to-br from-[#DBEAFE] to-[#EFF6FF] border border-[#BFDBFE] rounded-2xl">
                  <p className="text-xs font-bold text-[#2563EB] uppercase tracking-widest mb-3">
                    Expertise Snapshot
                  </p>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      { val: "25+", label: "Core Skills" },
                      { val: "13", label: "Expert Level" },
                      { val: "3+", label: "Yrs Prod." },
                    ].map((s, i) => (
                      <div key={i}>
                        <div className="text-xl font-bold text-[#2563EB] font-sora">{s.val}</div>
                        <div className="text-xs text-[#475569] mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#DBEAFE] to-[#F0F9FF] border-t border-[#BFDBFE] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3 font-sora"
          >
            Ready to put these skills to work?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-[#475569] mb-7 text-base max-w-xl mx-auto"
          >
            Let&apos;s discuss how my backend expertise can solve your engineering challenges.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-xl transition-all duration-200 shadow-lg cursor-pointer"
              >
                Get in Touch
                <ArrowRight size={15} />
              </motion.div>
            </Link>
            <Link href="/fit-check">
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] text-[#475569] font-semibold rounded-xl transition-all duration-200 cursor-pointer"
              >
                Check Fit for Your Role
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
