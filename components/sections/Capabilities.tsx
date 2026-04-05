"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CapabilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

// SVG Icons
function ServerIcon() {
  return (
    <svg
      className="w-8 h-8 text-[#2563EB]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2m0 0a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2m0 0h14"
      />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg
      className="w-8 h-8 text-[#2563EB]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7m0 0c0 2.21-3.582 4-8 4s-8-1.79-8-4m0 0C4 4.79 7.582 3 12 3s8 1.79 8 4M4 7c0 .99.904 1.93 2.5 2.66M19 7c1.596-.73 2.5-1.67 2.5-2.66"
      />
    </svg>
  );
}

function CreditCardIcon() {
  return (
    <svg
      className="w-8 h-8 text-[#2563EB]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 10h18M7 15h.01M11 15h.01M15 15h.01M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"
      />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg
      className="w-8 h-8 text-[#2563EB]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg
      className="w-8 h-8 text-[#2563EB]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18c3.314 0 6-1.343 6-3s-2.686-3-6-3c-.088-1.315-.87-2.5-2-2.5-.196-1.319-1.2-2.5-2.5-2.5C6.5 6.5 5 7.837 5 9.5 2.343 11 0 12.657 0 14.5 0 16.343 2.343 18 5 18h7z"
      />
    </svg>
  );
}

function CapabilityCard({
  icon,
  title,
  description,
  index,
}: CapabilityCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
    >
      <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-6 sm:p-8 h-full hover:border-[#2563EB] hover:shadow-lg transition-all duration-300 group">
        {/* Icon */}
        <motion.div
          className="mb-6 inline-block p-3 bg-[#DBEAFE] rounded-lg group-hover:bg-[#2563EB] transition-colors duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function Capabilities() {
  const capabilities: Omit<CapabilityCardProps, "index">[] = [
    {
      icon: <ServerIcon />,
      title: "Backend Systems & API Design",
      description:
        "Architecting modular Laravel backends and REST APIs that scale to thousands of concurrent users with clean middleware layers.",
    },
    {
      icon: <DatabaseIcon />,
      title: "Database & Performance Engineering",
      description:
        "MySQL query optimization, Redis caching strategies, and database indexing that reduced response times by up to 60%.",
    },
    {
      icon: <CreditCardIcon />,
      title: "Payment Gateway Integration",
      description:
        "Secure payment pipelines with custom middleware, webhook handling, and transaction optimization boosting success rates by 45%.",
    },
    {
      icon: <WorkflowIcon />,
      title: "CRM Automation (GoHighLevel)",
      description:
        "End-to-end GoHighLevel CRM integrations that automated client onboarding workflows and cut manual overhead by 50%.",
    },
    {
      icon: <CloudIcon />,
      title: "Cloud & DevOps Workflows",
      description:
        "AWS-deployed systems with CI/CD pipelines, Redis caching layers, and zero-downtime deployments.",
    },
  ];

  return (
    <section className="bg-[#FFFFFF] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid: Mobile 1 col, Tablet 2 cols, Desktop 3 cols, Last row 2 centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((capability, index) => (
            <CapabilityCard key={index} {...capability} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
