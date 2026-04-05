"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

/* ============================================
   TYPES & INTERFACES
   ============================================ */

type ProjectCategory = "Payment" | "Platform" | "Video" | "E-commerce";
type FilterOption = "All" | ProjectCategory;

interface Project {
  id: string;
  name: string;
  slug: string;
  employer: string;
  category: ProjectCategory;
  description: string;
  impact: string;
  date: string;
  stack: string[];
  color: string;
}

/* ============================================
   PROJECTS DATA
   ============================================ */

const projects: Project[] = [
  {
    id: "1",
    name: "PayYourCell",
    slug: "payyourcell",
    employer: "Hegemonic Inc",
    category: "Payment",
    description:
      "Enterprise payment platform with CRM-integrated workflows, encrypted middleware, and performance-tuned APIs serving thousands of active users.",
    impact: "50% faster client onboarding · 25% response time reduction",
    date: "Sep 2023–Present",
    stack: ["Laravel", "GoHighLevel", "MySQL", "AWS", "Redis"],
    color: "#2563EB",
  },
  {
    id: "2",
    name: "Noomerik.com",
    slug: "noomerik",
    employer: "Hegemonic Inc",
    category: "Platform",
    description:
      "Scalable service platform built on a modular REST API ecosystem with CRM-driven automation workflows and high-availability backend.",
    impact: "Automated client workflows · High-availability backend",
    date: "Oct 2023–Present",
    stack: ["Laravel", "PHP", "MySQL", "REST API", "AWS"],
    color: "#7C3AED",
  },
  {
    id: "3",
    name: "loom",
    slug: "loom-dreamhoster",
    employer: "HexaTech Solution",
    category: "Video",
    description:
      "Video recording platform with async background job processing, custom payment gateway, and Redis-powered queue management.",
    impact: "45% transaction success boost · 20% API latency reduction",
    date: "Dec 2023–Apr 2024",
    stack: ["Laravel", "Redis", "AWS", "PHP", "MySQL"],
    color: "#0891B2",
  },
  {
    id: "4",
    name: "Ylaa.com",
    slug: "ylaa",
    employer: "DevZone Solutions",
    category: "E-commerce",
    description:
      "Full-featured e-commerce platform rebuilt from the ground up — achieving 30% faster page loads and doubling user capacity without infra cost.",
    impact: "30% faster page loads · 2× user capacity",
    date: "May 2022–Jan 2023",
    stack: ["Laravel", "PHP", "MySQL", "jQuery", "JavaScript"],
    color: "#059669",
  },
];

/* ============================================
   ANIMATION VARIANTS
   ============================================ */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 80,
    },
  },
};

/* ============================================
   PROJECTS LISTING PAGE
   ============================================ */

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("All");

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") {
      return projects;
    }
    return projects.filter((p) => p.category === selectedFilter);
  }, [selectedFilter]);

  const filters: FilterOption[] = ["All", "Payment", "Platform", "Video", "E-commerce"];

  return (
    <div className="min-h-screen">
      {/* PAGE HEADER */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className="w-full bg-[#F1F5F9] py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]"
            >
              Production Work
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-sora text-5xl lg:text-6xl font-bold text-[#0F172A] max-w-3xl leading-tight"
            >
              Systems Built for the Real World
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-[#475569] max-w-2xl pt-2"
            >
              Each project represents real backend engineering challenges solved — from payment pipelines to CRM automation systems.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* FILTER TABS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                selectedFilter === filter
                  ? "bg-[#2563EB] text-white shadow-md"
                  : "bg-[#FFFFFF] border border-[#E2E8F0] text-[#475569] hover:bg-[#F1F5F9] hover:border-[#DBEAFE]"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Link href={`/projects/${project.slug}`}>
                <motion.div
                  whileHover={{
                    boxShadow:
                      "0 20px 40px rgba(37, 99, 235, 0.1), 0 0 0 1px rgba(37, 99, 235, 0.3)",
                  }}
                  className="h-full bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
                >
                  {/* COLOR BANNER */}
                  <div
                    className="h-2 w-full"
                    style={{ backgroundColor: project.color }}
                  />

                  {/* CARD BODY */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* TOP SECTION: Category & Employer */}
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="accent">{project.category}</Badge>
                      <p className="text-xs text-[#94A3B8]">{project.employer}</p>
                    </div>

                    {/* PROJECT NAME */}
                    <h3 className="font-sora text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors">
                      {project.name}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-[#475569] text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* IMPACT METRIC */}
                    <div className="bg-[#DBEAFE] bg-opacity-50 border border-[#DBEAFE] rounded-lg px-4 py-3 mb-4 flex-grow">
                      <p className="text-xs font-medium text-[#2563EB]">
                        ⚡ {project.impact}
                      </p>
                    </div>

                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 5).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-[#F1F5F9] text-[#475569]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 5 && (
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#F1F5F9] text-[#94A3B8]">
                          +{project.stack.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CARD FOOTER */}
                  <div className="border-t border-[#E2E8F0] px-6 py-4 flex justify-between items-center bg-[#FFFFFF]">
                    <p className="text-xs text-[#94A3B8]">{project.date}</p>
                    <span className="text-sm font-semibold text-[#2563EB] group-hover:underline transition-all flex items-center gap-1">
                      View Case Study
                      <motion.span
                        group-hover={{ x: 4 }}
                        initial={{ x: 0 }}
                        className="inline-block"
                      >
                        →
                      </motion.span>
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM CTA BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 bg-[#DBEAFE] border border-[#BFDBFE] rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-[#0F172A] font-sora text-lg md:text-xl font-semibold max-w-xl">
              Want to see the technical architecture? Read the full case studies.
            </p>
            <Link
              href="/projects/payyourcell"
              className="inline-flex px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 whitespace-nowrap"
            >
              Featured Case Study →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
