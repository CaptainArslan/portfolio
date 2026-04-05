"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  cardHover,
} from "@/lib/animations";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  caseStudySlug: string;
  accentColor: string;
  category: string;
  index: number;
}

/* ============================================
   PROJECT CARD
   ============================================ */
function ProjectCard({
  title,
  description,
  technologies,
  impact,
  caseStudySlug,
  accentColor,
  category,
  index,
}: ProjectCardProps) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
    >
      <Link href={`/projects/${caseStudySlug}`}>
        <motion.div
          variants={cardHover}
          initial="rest"
          whileHover="hover"
          className="relative h-full bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-card hover:shadow-elevated hover:border-[#2563EB]/30 transition-all duration-300 flex flex-col"
        >
          {/* Color accent top bar */}
          <div
            className="h-[3px] w-full transition-all duration-300 group-hover:h-1"
            style={{ backgroundColor: accentColor }}
          />

          <div className="p-6 sm:p-7 flex flex-col flex-grow">
            {/* Top row: category + label */}
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full border transition-all duration-200"
                style={{
                  backgroundColor: `${accentColor}12`,
                  color: accentColor,
                  borderColor: `${accentColor}30`,
                }}
              >
                {category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors duration-200 font-sora leading-snug">
              {title}
            </h3>

            {/* Description */}
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-5 flex-grow">
              {description}
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ y: -2 }}
                  className="text-xs font-medium px-2.5 py-1 bg-[#F1F5F9] text-[#475569] rounded-lg border border-[#E2E8F0] transition-all duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Impact metric */}
            <motion.div
              className="p-3.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl mb-5 transition-all duration-200"
              whileHover={{ backgroundColor: "rgba(37, 99, 235, 0.03)" }}
            >
              <div className="flex items-start gap-2">
                <Zap
                  size={13}
                  className="text-[#2563EB] flex-shrink-0 mt-0.5"
                />
                <p className="text-xs font-semibold text-[#2563EB] leading-relaxed">
                  {impact}
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] group-hover:gap-2.5 transition-all duration-200"
              whileHover={{ x: 2 }}
            >
              View Case Study
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

/* ============================================
   FEATURED PROJECTS SECTION
   ============================================ */
const PROJECTS: Omit<ProjectCardProps, "index">[] = [
  {
    title: "PayYourCell",
    category: "Payment Platform",
    description:
      "Enterprise payment platform with GoHighLevel CRM automation, encrypted middleware for PCI compliance, and performance-tuned APIs serving thousands of active users.",
    technologies: ["Laravel", "GoHighLevel", "AWS", "Redis", "MySQL"],
    impact: "50% faster client onboarding · 25% API response improvement · 99.9% uptime",
    caseStudySlug: "payyourcell",
    accentColor: "#2563EB",
  },
  {
    title: "Noomerik.com",
    category: "Service Platform",
    description:
      "Scalable service marketplace powered by a modular REST API ecosystem with CRM-driven automation workflows and high-availability backend.",
    technologies: ["Laravel", "PHP", "MySQL", "REST API", "AWS"],
    impact: "50K+ daily active users · 99.9% API availability · Sub-500ms response",
    caseStudySlug: "noomerik",
    accentColor: "#7C3AED",
  },
  {
    title: "loom.dreamhoster.com",
    category: "Video Platform",
    description:
      "Video recording platform with async background job processing, custom payment gateway integration, and Redis-powered queue management.",
    technologies: ["Laravel", "Redis", "AWS S3", "PHP", "MySQL"],
    impact: "45% transaction success boost · 20% API latency reduction · 99.8% uptime",
    caseStudySlug: "loom-dreamhoster",
    accentColor: "#0891B2",
  },
  {
    title: "Ylaa.com",
    category: "E-commerce",
    description:
      "Full-featured e-commerce platform rebuilt for performance — achieving 30% faster page loads and doubling user capacity without any infrastructure cost increase.",
    technologies: ["Laravel", "PHP", "MySQL", "jQuery", "JavaScript"],
    impact: "30% faster page loads · 2× user capacity · 18% lower cart abandonment",
    caseStudySlug: "ylaa",
    accentColor: "#059669",
  },
];

export function FeaturedProjects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="bg-[#F1F5F9] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14"
          >
            <SectionHeader
              eyebrow="Featured Work"
              title="Projects That Ship to Production"
              subtitle="Four real-world systems I've architected and deployed — each with measurable business impact."
              centered
            />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Link href="/projects">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] text-[#475569] font-semibold rounded-xl transition-all duration-200 shadow-sm cursor-pointer"
            >
              View All Projects & Case Studies
              <ArrowRight size={15} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
