"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Zap, CheckCircle2, ExternalLink, Calendar, Building2, Tag, ChevronRight } from "lucide-react";
import projectsJson from "@/data/projects.json";

/* ============================================
   TYPES & INTERFACES
   ============================================ */

interface ProjectData {
  name: string;
  slug: string;
  category: string;
  employer: string;
  color: string;
  date: string;
  description: string;
  challenge: string;
  architecture: string;
  highlights: string[];
  outcome: string;
  metrics: Array<{ label: string; value: string; sub?: string }>;
  keyFeatures: Record<string, string>;
  technicalStack: string[];
  liveUrl?: string;
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
  };
}

/* ============================================
   DATA — edit /data/projects.json
   ============================================ */

const caseStudies = projectsJson.caseStudies as Record<string, ProjectData>;
const projectSlugsOrdered = projectsJson.projects.map((p) => p.slug);

/* ============================================
   ANIMATION VARIANTS
   ============================================ */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 22, stiffness: 100 },
  },
};

/* ============================================
   PROJECT DETAIL PAGE
   ============================================ */

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = caseStudies[slug];

  if (!project) {
    notFound();
  }

  const currentIndex = projectSlugsOrdered.indexOf(slug);
  const previousProject =
    currentIndex > 0 ? caseStudies[projectSlugsOrdered[currentIndex - 1]] : null;
  const nextProject =
    currentIndex < projectSlugsOrdered.length - 1
      ? caseStudies[projectSlugsOrdered[currentIndex + 1]]
      : null;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* ─── COLOR ACCENT BAR ─────────────────────── */}
      <div className="h-1 w-full" style={{ backgroundColor: project.color }} />

      {/* ─── PAGE HEADER ──────────────────────────── */}
      <section className="bg-white border-b border-[#E2E8F0] py-14 lg:py-18 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 text-sm text-[#94A3B8] mb-8"
          >
            <Link href="/projects" className="hover:text-[#2563EB] transition-colors font-medium flex items-center gap-1">
              <ArrowLeft size={13} />
              All Projects
            </Link>
            <ChevronRight size={13} />
            <span className="text-[#475569] font-medium">{project.name}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
            {/* Left — title + description */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Category badge */}
              <span
                className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border mb-5"
                style={{
                  backgroundColor: `${project.color}12`,
                  color: project.color,
                  borderColor: `${project.color}30`,
                }}
              >
                {project.category}
              </span>

              <h1 className="font-sora text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F172A] mb-5 leading-tight">
                {project.name}
              </h1>
              <p className="text-lg text-[#475569] leading-relaxed max-w-2xl">
                {project.description}
              </p>

              {/* Meta pills */}
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#475569] bg-[#F1F5F9] px-3 py-1.5 rounded-full border border-[#E2E8F0]">
                  <Building2 size={11} />
                  {project.employer}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#475569] bg-[#F1F5F9] px-3 py-1.5 rounded-full border border-[#E2E8F0]">
                  <Calendar size={11} />
                  {project.date}
                </span>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all"
                    style={{
                      color: project.color,
                      borderColor: `${project.color}30`,
                      backgroundColor: `${project.color}08`,
                    }}
                  >
                    <ExternalLink size={11} />
                    Live Site
                  </a>
                )}
              </div>
            </motion.div>

            {/* Right — key metrics */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-3 lg:grid-cols-1 gap-4"
            >
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 lg:p-5"
                >
                  <p
                    className="text-2xl lg:text-3xl font-bold font-sora leading-none mb-1"
                    style={{ color: project.color }}
                  >
                    {metric.value}
                  </p>
                  {metric.sub && (
                    <p className="text-xs font-semibold text-[#0F172A] mb-0.5">{metric.sub}</p>
                  )}
                  <p className="text-xs text-[#94A3B8] font-medium">{metric.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ── MAIN COLUMN ─────────────────────── */}
          <motion.div
            className="lg:col-span-2 space-y-14"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            {/* THE CHALLENGE */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <h2 className="font-sora text-2xl font-bold text-[#0F172A]">
                  The Challenge
                </h2>
              </div>
              <blockquote
                className="border-l-[3px] pl-6 py-1"
                style={{ borderColor: project.color }}
              >
                <p className="text-[#475569] text-base lg:text-lg leading-relaxed">
                  {project.challenge}
                </p>
              </blockquote>
            </motion.section>

            {/* ARCHITECTURE & SOLUTION */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <h2 className="font-sora text-2xl font-bold text-[#0F172A]">
                  Architecture & Solution
                </h2>
              </div>
              <p className="text-[#475569] leading-relaxed">
                {project.architecture}
              </p>
            </motion.section>

            {/* KEY FEATURES */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <h2 className="font-sora text-2xl font-bold text-[#0F172A]">
                  Key Features
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(project.keyFeatures).map(([title, desc], idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white border border-[#E2E8F0] rounded-xl p-5 hover:border-opacity-60 hover:shadow-sm transition-all"
                    style={{
                      borderLeftWidth: "3px",
                      borderLeftColor: `${project.color}50`,
                    }}
                  >
                    <h3 className="font-semibold text-[#0F172A] text-sm mb-2">{title}</h3>
                    <p className="text-[#475569] text-sm leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* TECHNICAL DEEP DIVE — CODE BLOCK */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <h2 className="font-sora text-2xl font-bold text-[#0F172A]">
                  Technical Deep Dive
                </h2>
              </div>
              <div className="code-terminal border border-[#1E293B]">
                {/* Terminal header */}
                <div className="code-terminal-header">
                  <span className="code-dot" style={{ background: "#FF5F57" }} />
                  <span className="code-dot" style={{ background: "#FEBC2E" }} />
                  <span className="code-dot" style={{ background: "#28C840" }} />
                  <span className="text-[#64748B] text-xs font-mono ml-3 flex-1">
                    {project.codeSnippet.filename}
                  </span>
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded text-[#64748B]"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    {project.codeSnippet.language}
                  </span>
                </div>
                {/* Code body */}
                <div className="p-5 overflow-x-auto">
                  <pre className="text-sm text-[#CBD5E1] font-mono leading-relaxed">
                    <code>{project.codeSnippet.code}</code>
                  </pre>
                </div>
              </div>
            </motion.section>

            {/* RESULTS & IMPACT */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <h2 className="font-sora text-2xl font-bold text-[#0F172A]">
                  Results & Impact
                </h2>
              </div>
              <p className="text-[#475569] leading-relaxed mb-6">
                {project.outcome}
              </p>
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: `${project.color}08`,
                  borderColor: `${project.color}20`,
                }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <Zap size={14} style={{ color: project.color }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: project.color }}>
                    Measurable Outcomes
                  </span>
                </div>
                <div className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle2
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: project.color }}
                      />
                      <p className="text-[#0F172A] font-medium text-sm leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* TECHNOLOGY STACK */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <h2 className="font-sora text-2xl font-bold text-[#0F172A]">
                  Technology Stack
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {project.technicalStack.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ duration: 0.15 }}
                    className="bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#0F172A] font-semibold text-sm text-center hover:shadow-sm transition-all cursor-default"
                    style={{
                      borderTopWidth: "2px",
                      borderTopColor: `${project.color}40`,
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </motion.div>

          {/* ── SIDEBAR ──────────────────────────── */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="lg:sticky lg:top-8 space-y-5">

              {/* Project Info */}
              <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden">
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: project.color }}
                />
                <div className="p-6 space-y-4">
                  <h3 className="font-sora font-bold text-[#0F172A] text-sm uppercase tracking-wider">
                    Project Info
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <Building2 size={14} className="text-[#94A3B8] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-[#94A3B8] font-medium mb-0.5">Employer</p>
                        <p className="text-[#0F172A] font-semibold">{project.employer}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar size={14} className="text-[#94A3B8] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-[#94A3B8] font-medium mb-0.5">Timeline</p>
                        <p className="text-[#0F172A] font-semibold">{project.date}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Tag size={14} className="text-[#94A3B8] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-[#94A3B8] font-medium mb-0.5">Category</p>
                        <p className="text-[#0F172A] font-semibold">{project.category}</p>
                      </div>
                    </div>
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border font-semibold text-sm transition-all hover:shadow-sm"
                      style={{
                        color: project.color,
                        borderColor: `${project.color}40`,
                        backgroundColor: `${project.color}08`,
                      }}
                    >
                      <ExternalLink size={13} />
                      View Live Site
                    </a>
                  )}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
                <h3 className="font-sora font-bold text-[#0F172A] text-sm uppercase tracking-wider mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technicalStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-[#475569] bg-[#F1F5F9] px-2.5 py-1 rounded-lg border border-[#E2E8F0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div
                className="rounded-2xl p-6 space-y-4 text-white"
                style={{ backgroundColor: project.color }}
              >
                <h3 className="font-sora font-bold text-base leading-snug">
                  Working on something similar?
                </h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  Let&apos;s discuss your project requirements and how I can help architect a solution.
                </p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-white font-semibold text-sm rounded-lg hover:bg-opacity-90 transition-all"
                  style={{ color: project.color }}
                >
                  Get In Touch
                  <ArrowRight size={13} />
                </Link>
                <Link
                  href="/projects"
                  className="flex items-center justify-center gap-2 w-full py-2 font-medium text-sm rounded-lg border border-white/30 hover:bg-white/10 transition-all text-white/90"
                >
                  All Projects
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── BOTTOM NAVIGATION ────────────────────── */}
      <section className="border-t border-[#E2E8F0] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
          >
            {/* Previous */}
            <div>
              {previousProject ? (
                <Link
                  href={`/projects/${previousProject.slug}`}
                  className="group flex items-center gap-2 text-[#475569] hover:text-[#2563EB] transition-colors"
                >
                  <ArrowLeft
                    size={15}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                  <div>
                    <p className="text-xs text-[#94A3B8] font-medium mb-0.5">Previous</p>
                    <p className="font-semibold text-sm leading-none">{previousProject.name}</p>
                  </div>
                </Link>
              ) : <div />}
            </div>

            {/* Center */}
            <div className="flex justify-center">
              <Link
                href="/projects"
                className="text-sm font-medium text-[#94A3B8] hover:text-[#2563EB] transition-colors"
              >
                All Projects
              </Link>
            </div>

            {/* Next */}
            <div className="flex justify-end">
              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group flex items-center gap-2 text-[#475569] hover:text-[#2563EB] transition-colors text-right"
                >
                  <div>
                    <p className="text-xs text-[#94A3B8] font-medium mb-0.5">Next</p>
                    <p className="font-semibold text-sm leading-none">{nextProject.name}</p>
                  </div>
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              ) : <div />}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
