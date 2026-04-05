"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cardHover } from "@/lib/animations";

/* ============================================
   SVG ICON COMPONENTS
   ============================================ */
function ServerIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2m0 0a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2m0 0h14" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7m0 0c0 2.21-3.582 4-8 4S4 9.21 4 7m16 0C20 4.79 16.418 3 12 3S4 4.79 4 7" />
    </svg>
  );
}

function CreditCardIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M3 10h18M7 15h.01M11 15h.01M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  );
}

/* ============================================
   CAPABILITY CARD
   ============================================ */
interface CapabilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
  index: number;
}

function CapabilityCard({ icon, title, description, metric, index }: CapabilityCardProps) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
    >
      <motion.div
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        className="h-full bg-white border border-[#E2E8F0] rounded-2xl p-7 hover:border-[#2563EB]/40 hover:shadow-elevated transition-all duration-300"
      >
        {/* Icon container */}
        <motion.div
          className="w-12 h-12 bg-[#DBEAFE] rounded-xl flex items-center justify-center text-[#2563EB] mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300"
          whileHover={{ rotate: 8, scale: 1.07 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-3 font-sora leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-5">
          {description}
        </p>

        {/* Metric pill */}
        <motion.div
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F1F5F9] border border-[#E2E8F0] rounded-full text-xs font-semibold text-[#2563EB] transition-all duration-200"
          whileHover={{ backgroundColor: "rgba(37, 99, 235, 0.05)", scale: 1.03 }}
        >
          <motion.span
            className="w-1 h-1 rounded-full bg-[#2563EB]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {metric}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ============================================
   CAPABILITIES SECTION
   ============================================ */
const CAPABILITIES: Omit<CapabilityCardProps, "index">[] = [
  {
    icon: <ServerIcon />,
    title: "Backend Systems & API Design",
    description:
      "Modular Laravel backends and REST API ecosystems that scale to thousands of concurrent users with clean middleware separation and proper error handling.",
    metric: "200+ API endpoints built",
  },
  {
    icon: <DatabaseIcon />,
    title: "Database & Performance Engineering",
    description:
      "MySQL query optimization, Redis caching strategies, and strategic indexing that turned 800ms responses into sub-100ms consistently.",
    metric: "60% query time reduction",
  },
  {
    icon: <CreditCardIcon />,
    title: "Payment Gateway Integration",
    description:
      "Secure payment pipelines with custom middleware, webhook handling, transaction auditing, and retry logic — PCI DSS aligned throughout.",
    metric: "45% success rate boost",
  },
  {
    icon: <WorkflowIcon />,
    title: "CRM Automation (GoHighLevel)",
    description:
      "End-to-end GoHighLevel CRM integrations with webhook-driven automations that eliminated manual onboarding workflows and cut turnaround by 50%.",
    metric: "50% faster onboarding",
  },
  {
    icon: <CloudIcon />,
    title: "Cloud & DevOps Workflows",
    description:
      "AWS-deployed systems with CI/CD pipelines, Redis caching layers, Nginx configuration, and zero-downtime deployment strategies.",
    metric: "99.9% uptime maintained",
  },
];

export function Capabilities() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <SectionHeader
            eyebrow="Core Capabilities"
            title="How I Solve Hard Engineering Problems"
            subtitle="Real expertise built through production systems — not tutorials or side projects."
            centered
          />
        </div>

        {/* Grid: 1 col → 2 col → 3 col, last row centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, index) => (
            <CapabilityCard key={index} {...cap} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
