"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  caseStudyLink: string;
  index: number;
}

function ProjectCard({
  icon,
  title,
  description,
  technologies,
  impact,
  caseStudyLink,
  index,
}: ProjectCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
    >
      <motion.div
        className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-6 sm:p-8 h-full flex flex-col hover:border-[#2563EB] transition-colors duration-300"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon */}
        <div className="text-4xl mb-4">{icon}</div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#475569] text-sm sm:text-base mb-6 flex-grow">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, idx) => (
            <Badge key={idx} variant="default" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Impact Metric */}
        <div className="mb-6 p-4 bg-[#F1F5F9] rounded-lg border border-[#E2E8F0]">
          <p className="text-xs text-[#94A3B8] uppercase tracking-wide mb-1 font-semibold">
            Impact
          </p>
          <p className="text-[#2563EB] font-semibold text-sm sm:text-base">
            {impact}
          </p>
        </div>

        {/* CTA Link */}
        <motion.a
          href={caseStudyLink}
          className="inline-flex items-center text-[#2563EB] font-medium text-sm hover:gap-2 transition-all gap-1"
          whileHover={{ x: 4 }}
        >
          View Case Study
          <span>→</span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export function FeaturedProjects() {
  const projects: ProjectCardProps[] = [
    {
      icon: "💳",
      title: "PayYourCell",
      description:
        "Payment platform engineered with deep CRM integration. Streamlined user workflows and reduced transaction friction through custom middleware and webhook optimization.",
      technologies: ["Laravel", "GoHighLevel", "AWS", "Payment APIs"],
      impact: "Serves thousands of active users",
      caseStudyLink: "#",
      index: 0,
    },
    {
      icon: "⚡",
      title: "Noomerik.com",
      description:
        "Scalable service marketplace with sophisticated REST API ecosystem. Built modular backend architecture handling complex business logic and concurrent user operations.",
      technologies: ["Laravel", "PHP", "MySQL", "REST API"],
      impact: "Backend automation at scale",
      caseStudyLink: "#",
      index: 1,
    },
    {
      icon: "🎥",
      title: "loom.dreamhoster.com",
      description:
        "Video recording platform with asynchronous processing pipeline. Engineered async job handling with Redis queues and AWS S3 integration for reliable media processing.",
      technologies: ["Laravel", "Redis", "AWS", "Video Processing"],
      impact: "45% transaction success boost",
      caseStudyLink: "#",
      index: 2,
    },
  ];

  return (
    <section className="bg-[#F1F5F9] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <SectionHeader
            eyebrow="Featured Work"
            title="Projects That Ship to Production"
            centered
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center">
          <Button
            href="#projects"
            variant="secondary"
            size="lg"
            className="font-semibold"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
