"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, ExternalLink } from "lucide-react";
import projectsData from "@/data/projects.json";

/* ============================================
   TYPES
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
  accentColor: string;
  liveUrl?: string;
}

/* ============================================
   DATA — edit /data/projects.json
   ============================================ */
const PROJECTS: Project[] = projectsData.projects as Project[];

const FILTERS: FilterOption[] = ["All", "Payment", "Platform", "Video", "E-commerce"];

/* ============================================
   ANIMATION VARIANTS
   ============================================ */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 22, stiffness: 100 } },
};

/* ============================================
   PAGE COMPONENT
   ============================================ */
export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterOption>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* ─── PAGE HEADER ─────────────────────────── */}
      <section className="bg-[#F1F5F9] border-b border-[#E2E8F0] py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">
              Production Work
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#0F172A] leading-tight font-sora mb-5">
              Systems Built for the Real World
            </h1>
            <p className="text-base sm:text-lg text-[#475569] max-w-2xl">
              Four real-world backend systems I&apos;ve architected and deployed — each with
              measurable performance improvements and business impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {FILTERS.map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                filter === f
                  ? "bg-[#2563EB] text-white shadow-md"
                  : "bg-white border border-[#E2E8F0] text-[#475569] hover:border-[#2563EB] hover:text-[#2563EB]"
              }`}
            >
              {f}
              {f !== "All" && (
                <span className="ml-1.5 text-xs opacity-60">
                  ({PROJECTS.filter((p) => p.category === f).length})
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-7"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group"
              >
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <div
                    className="h-full bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
                    style={{
                      // Dynamically add subtle accent on hover via group
                    }}
                  >
                    {/* Color accent bar */}
                    <div
                      className="h-[3px] w-full group-hover:h-1 transition-all duration-300"
                      style={{ backgroundColor: project.accentColor }}
                    />

                    {/* Card body */}
                    <div className="p-7 flex flex-col flex-grow">
                      {/* Top meta */}
                      <div className="flex items-start justify-between mb-5">
                        <span
                          className="text-xs font-bold px-2.5 py-1 rounded-full border"
                          style={{
                            backgroundColor: `${project.accentColor}12`,
                            color: project.accentColor,
                            borderColor: `${project.accentColor}25`,
                          }}
                        >
                          {project.category}
                        </span>
                        <div className="flex items-center gap-2">
                          {project.liveUrl && (
                            <span
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(project.liveUrl, "_blank");
                              }}
                              className="p-1.5 rounded-lg border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] text-[#94A3B8] transition-all cursor-pointer"
                              title="View live"
                            >
                              <ExternalLink size={13} />
                            </span>
                          )}
                          <span className="text-xs text-[#94A3B8] font-medium">
                            {project.employer}
                          </span>
                        </div>
                      </div>

                      {/* Project name */}
                      <h3 className="text-2xl font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-200 font-sora mb-3 leading-snug">
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p className="text-[#475569] text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
                        {project.description}
                      </p>

                      {/* Impact metric */}
                      <div className="flex items-start gap-2 p-3.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl mb-5">
                        <Zap
                          size={13}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: project.accentColor }}
                        />
                        <p
                          className="text-xs font-semibold leading-relaxed"
                          style={{ color: project.accentColor }}
                        >
                          {project.impact}
                        </p>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-medium px-2.5 py-1 bg-[#F1F5F9] text-[#475569] rounded-lg border border-[#E2E8F0]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card footer */}
                    <div className="border-t border-[#E2E8F0] px-7 py-4 flex items-center justify-between bg-[#FAFAFA]">
                      <span className="text-xs text-[#94A3B8] font-medium">{project.date}</span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2563EB] group-hover:gap-2.5 transition-all duration-200">
                        View Case Study
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform duration-200"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-[#DBEAFE] border border-[#BFDBFE] rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="font-sora text-lg md:text-xl font-bold text-[#0F172A] mb-1">
                Want to see the full technical architecture?
              </p>
              <p className="text-[#475569] text-sm">
                Read the detailed case studies with architecture decisions, challenges, and outcomes.
              </p>
            </div>
            <Link
              href="/projects/payyourcell"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-xl transition-all duration-200 shadow-sm whitespace-nowrap"
            >
              Featured Case Study
              <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
