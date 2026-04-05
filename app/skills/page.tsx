"use client";

import React, { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const SkillsScene = dynamic(
  () => import("@/components/three/SkillsScene"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F0F9FF] to-[#F8FAFC]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#E2E8F0] border-t-[#2563EB] rounded-full animate-spin mx-auto mb-3"></div>
          <p className="text-[#64748B] text-sm">Loading skill map...</p>
        </div>
      </div>
    ),
  }
);

interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
  description: string;
  usedInProjects?: string[];
  impactMetric: string;
}

interface SkillCategory {
  id: string;
  name: string;
  headline: string;
  description: string;
  skills: Skill[];
  impact: string;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend",
    name: "Backend & API",
    headline: "Building Scalable APIs",
    description: "RESTful architecture serving thousands of requests daily",
    skills: [
      {
        name: "Laravel",
        level: "Expert",
        description: "Modern PHP framework powering production systems",
        impactMetric: "Built APIs handling 10k+ daily requests",
      },
      {
        name: "PHP",
        level: "Expert",
        description: "Core backend language with deep architectural knowledge",
        impactMetric: "Optimized OOP patterns across all projects",
      },
      {
        name: "REST API Design",
        level: "Expert",
        description: "Industry-standard API design and documentation",
        impactMetric: "Sub-200ms response times maintained",
      },
      {
        name: "Middleware Development",
        level: "Advanced",
        description: "Custom request/response handling layers",
        impactMetric: "Secured sensitive data flows",
      },
      {
        name: "JWT Authentication",
        level: "Advanced",
        description: "Token-based security and session management",
        impactMetric: "Zero authentication breaches",
      },
    ],
    impact: "Built APIs serving thousands of daily requests with sub-200ms response times",
  },
  {
    id: "database",
    name: "Database & Performance",
    headline: "Optimized Data Architecture",
    description: "Strategic indexing and caching for peak performance",
    skills: [
      {
        name: "MySQL",
        level: "Expert",
        description: "Relational database design and query optimization",
        impactMetric: "60% query time reduction achieved",
      },
      {
        name: "Redis",
        level: "Advanced",
        description: "In-memory caching and distributed session management",
        impactMetric: "45% database load reduction",
      },
      {
        name: "Query Optimization",
        level: "Expert",
        description: "Advanced query analysis and performance tuning",
        impactMetric: "From 5s to 50ms execution times",
      },
      {
        name: "Database Indexing",
        level: "Advanced",
        description: "Strategic index implementation for query speed",
        impactMetric: "Sub-100ms response guarantees",
      },
      {
        name: "Caching Strategies",
        level: "Advanced",
        description: "Multi-layer caching with cache-aside and write-through patterns",
        impactMetric: "Eliminated database bottlenecks",
      },
    ],
    impact: "60% query performance improvement through strategic indexing and Redis caching",
  },
  {
    id: "payments",
    name: "Payments & CRM",
    headline: "Transaction & Integration Flow",
    description: "Payment processing and CRM automation at scale",
    skills: [
      {
        name: "Payment Gateway Integration",
        level: "Expert",
        description: "Stripe, PayPal, and custom processor integrations",
        impactMetric: "Processed 10k+ monthly transactions",
      },
      {
        name: "GoHighLevel CRM",
        level: "Expert",
        description: "Webhook-driven CRM automations and workflows",
        impactMetric: "50% manual workflow reduction",
      },
      {
        name: "Webhook Management",
        level: "Advanced",
        description: "Real-time event handling and data synchronization",
        impactMetric: "Zero polling overhead achieved",
      },
      {
        name: "Transaction Processing",
        level: "Advanced",
        description: "Payment handling with error recovery and auditing",
        impactMetric: "99.95% success rate maintained",
      },
    ],
    impact: "45% transaction success rate boost through custom payment middleware",
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    headline: "Infrastructure & Deployment",
    description: "Zero-downtime deployments and cloud infrastructure management",
    skills: [
      {
        name: "AWS",
        level: "Advanced",
        description: "EC2, RDS, S3, CloudFront service architecture",
        impactMetric: "Managed high-availability infrastructure",
      },
      {
        name: "CI/CD Pipelines",
        level: "Advanced",
        description: "Automated deployment with GitHub Actions and testing",
        impactMetric: "70% deployment time reduction",
      },
      {
        name: "Git/Version Control",
        level: "Expert",
        description: "Git flow, branching strategies, and team collaboration",
        impactMetric: "Zero merge conflicts in team projects",
      },
      {
        name: "Linux Server Management",
        level: "Intermediate",
        description: "Server administration and performance optimization",
        impactMetric: "99.9% uptime maintained",
      },
    ],
    impact: "Zero-downtime deployments with automated CI/CD pipelines",
  },
  {
    id: "realtime",
    name: "Real-Time Processing",
    headline: "Async & Queue Systems",
    description: "Background job processing and event-driven architecture",
    skills: [
      {
        name: "Redis Queues",
        level: "Advanced",
        description: "Job queueing and task management at scale",
        impactMetric: "Processed 1000s daily tasks",
      },
      {
        name: "Background Jobs",
        level: "Advanced",
        description: "Async processing with failure handling and retries",
        impactMetric: "Reduced response times by 40%",
      },
      {
        name: "Async Processing",
        level: "Advanced",
        description: "Non-blocking operations for long-running tasks",
        impactMetric: "Video processing system built",
      },
      {
        name: "Push Notifications",
        level: "Intermediate",
        description: "Real-time user notifications and updates",
        impactMetric: "30% engagement boost",
      },
    ],
    impact: "Async video processing system with Redis-powered job queues",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  backend: "#3B82F6",
  database: "#10B981",
  payments: "#F59E0B",
  cloud: "#A855F7",
  realtime: "#EC4899",
};

const LEVEL_COLORS: Record<string, { bg: string; text: string }> = {
  Expert: { bg: "#DCFCE7", text: "#16A34A" },
  Advanced: { bg: "#DBEAFE", text: "#0369A1" },
  Intermediate: { bg: "#F3F4F6", text: "#6B7280" },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("backend");
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const currentCategory = SKILL_CATEGORIES.find((cat) => cat.id === activeCategory);
  const currentSkill = currentCategory?.skills.find((s) => s.name === activeSkill);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setActiveSkill(null);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header Section */}
      <motion.section
        className="bg-[#F1F5F9] py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-4 font-sora leading-tight"
            >
              Skills That Solve Real Problems
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-[#475569] max-w-3xl"
            >
              Built through 3+ years of production work — not side projects.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Two-Panel Layout */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* LEFT PANEL: Skills (60%) */}
            <div className="lg:col-span-3 space-y-6">
              {/* Category Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-wrap gap-2"
              >
                {SKILL_CATEGORIES.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                      activeCategory === category.id
                        ? "bg-[#2563EB] text-white shadow-lg"
                        : "bg-[#FFFFFF] text-[#475569] border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-sm"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </motion.div>

              {/* Category Content */}
              <AnimatePresence mode="wait">
                {currentCategory && (
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Category Headline */}
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-[#0F172A] font-sora">
                        {currentCategory.headline}
                      </h2>
                      <p className="text-[#475569] text-sm">
                        {currentCategory.description}
                      </p>
                    </div>

                    {/* Impact Banner */}
                    <motion.div
                      variants={itemVariants}
                      className="p-4 bg-gradient-to-r rounded-xl border"
                      style={{
                        backgroundColor: `${CATEGORY_COLORS[activeCategory]}15`,
                        borderColor: `${CATEGORY_COLORS[activeCategory]}30`,
                      }}
                    >
                      <p className="text-sm font-semibold text-[#0F172A]">
                        {currentCategory.impact}
                      </p>
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                    >
                      {currentCategory.skills.map((skill) => (
                        <motion.button
                          key={skill.name}
                          variants={itemVariants}
                          onClick={() => setActiveSkill(skill.name)}
                          className={`p-4 rounded-lg text-left transition-all group ${
                            activeSkill === skill.name
                              ? "border-2 shadow-md"
                              : "border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-sm"
                          }`}
                          style={{
                            backgroundColor:
                              activeSkill === skill.name ? "#FFFFFF" : "#FFFFFF",
                            borderColor:
                              activeSkill === skill.name
                                ? CATEGORY_COLORS[activeCategory]
                                : undefined,
                            boxShadow:
                              activeSkill === skill.name
                                ? `0 0 0 3px ${CATEGORY_COLORS[activeCategory]}20`
                                : undefined,
                          }}
                          whileHover={{ y: -2 }}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                                {skill.name}
                              </p>
                              <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                                {skill.description}
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <span
                                className="inline-block px-2 py-1 rounded text-xs font-medium whitespace-nowrap"
                                style={{
                                  backgroundColor: LEVEL_COLORS[skill.level].bg,
                                  color: LEVEL_COLORS[skill.level].text,
                                }}
                              >
                                {skill.level}
                              </span>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>

                    {/* Skill Detail Panel */}
                    <AnimatePresence>
                      {activeSkill && currentSkill && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="p-6 bg-[#FFFFFF] border-l-4 rounded-xl shadow-sm space-y-4"
                          style={{
                            borderLeftColor: CATEGORY_COLORS[activeCategory],
                          }}
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div
                                className="w-3 h-3 rounded-full"
                                style={{
                                  backgroundColor: CATEGORY_COLORS[activeCategory],
                                }}
                              />
                              <h3 className="text-2xl font-bold text-[#0F172A] font-sora">
                                {activeSkill}
                              </h3>
                            </div>
                            <span
                              className="inline-block px-3 py-1 rounded text-xs font-semibold mt-2"
                              style={{
                                backgroundColor: LEVEL_COLORS[currentSkill.level].bg,
                                color: LEVEL_COLORS[currentSkill.level].text,
                              }}
                            >
                              {currentSkill.level} Level
                            </span>
                          </div>

                          <div className="space-y-3 pt-2 border-t border-[#E2E8F0]">
                            <div>
                              <p className="text-sm font-semibold text-[#64748B] uppercase tracking-wide mb-2">
                                Overview
                              </p>
                              <p className="text-[#0F172A] text-sm leading-relaxed">
                                {currentSkill.description}
                              </p>
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-[#64748B] uppercase tracking-wide mb-2">
                                Impact Metric
                              </p>
                              <p className="text-[#0F172A] font-medium">
                                {currentSkill.impactMetric}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* RIGHT PANEL: Skill Map (40%) - Sticky */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="sticky top-24 space-y-4"
              >
                {/* Header */}
                <div>
                  <p className="text-xs font-semibold text-[#64748B] uppercase tracking-widest mb-1">
                    Skill Map
                  </p>
                  <h3 className="text-lg font-semibold text-[#0F172A]">
                    Interactive Ecosystem
                  </h3>
                </div>

                {/* 3D Scene Container */}
                <div
                  className="bg-[#FFFFFF] rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm"
                  style={{ height: "480px" }}
                >
                  <Suspense fallback={null}>
                    <SkillsScene
                      activeSkill={activeSkill}
                      onNodeClick={(skill) => setActiveSkill(skill)}
                    />
                  </Suspense>
                </div>

                {/* Legend */}
                <motion.div
                  variants={itemVariants}
                  className="p-4 bg-[#FFFFFF] border border-[#E2E8F0] rounded-lg space-y-3"
                >
                  <p className="text-xs font-semibold text-[#64748B] uppercase tracking-widest">
                    Categories
                  </p>
                  <div className="space-y-2">
                    {SKILL_CATEGORIES.map((cat) => (
                      <motion.button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.id)}
                        className="w-full flex items-center gap-2 p-2 rounded hover:bg-[#F1F5F9] transition-colors text-left group"
                      >
                        <div
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: CATEGORY_COLORS[cat.id] }}
                        />
                        <span className="text-xs text-[#475569] group-hover:text-[#0F172A] transition-colors">
                          {cat.name}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  variants={itemVariants}
                  className="p-4 bg-gradient-to-br from-[#F0F9FF] to-[#F8FAFC] border border-[#DBEAFE] rounded-lg"
                >
                  <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-2">
                    Expertise Snapshot
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="text-[#0F172A] font-medium">
                      <span className="text-[#2563EB] font-bold">25+</span> Core Skills
                    </p>
                    <p className="text-[#0F172A] font-medium">
                      <span className="text-[#2563EB] font-bold">13</span> Expert Level
                    </p>
                    <p className="text-[#0F172A] font-medium">
                      <span className="text-[#2563EB] font-bold">3+</span> Years Production
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[#DBEAFE] to-[#F0F9FF] py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3 font-sora">
            Ready to solve complex problems?
          </h3>
          <p className="text-[#475569] mb-6 text-sm sm:text-base">
            Let's discuss how these skills can drive your project forward.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-[#1D4ED8] transition-all hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
