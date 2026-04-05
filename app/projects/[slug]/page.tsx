"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

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
  metrics: Array<{ label: string; value: string }>;
  keyFeatures: Record<string, string>;
  technicalStack: string[];
}

/* ============================================
   PROJECTS DATA - EXTENDED
   ============================================ */

const projectsData: Record<string, ProjectData> = {
  payyourcell: {
    name: "PayYourCell",
    slug: "payyourcell",
    category: "Payment Platform",
    employer: "Hegemonic Inc",
    color: "#2563EB",
    date: "Sep 2023–Present",
    description:
      "Enterprise payment platform with CRM-integrated workflows, encrypted middleware, and performance-tuned APIs serving thousands of active users.",
    challenge:
      "Hegemonic Inc needed a payment platform that could handle high transaction volumes while integrating with their GoHighLevel CRM — with zero manual data entry between systems. The challenge was building a secure, scalable architecture that could process payments without creating bottlenecks in their sales workflow.",
    architecture:
      "Built a Laravel backend with a dedicated payment processing layer using encrypted middleware to ensure sensitive data never touches the application layer directly. Implemented async queue processing for transaction handling, allowing payments to be processed without blocking user-facing requests. GoHighLevel webhook integration ensures automatic CRM updates, eliminating manual data entry entirely.",
    highlights: [
      "GoHighLevel CRM webhook integration with bi-directional data sync",
      "Encrypted middleware pipeline for PCI compliance",
      "MySQL query optimization achieving 25% response time improvement",
      "Redis-powered async queue for transaction processing",
      "High-availability backend serving thousands of concurrent users",
    ],
    outcome:
      "Successfully deployed payment platform now serving thousands of active users. Client onboarding time reduced by 50% due to automated CRM workflows. API response times improved by 25% through strategic database optimization and caching layers.",
    metrics: [
      { label: "Active Users", value: "Thousands" },
      { label: "Onboarding Speed", value: "50% Faster" },
      { label: "Response Time", value: "25% Faster" },
    ],
    keyFeatures: {
      "Payment Processing":
        "Secure encrypted payment layer with PCI compliance, handling high-volume transactions with async processing.",
      "CRM Integration":
        "Real-time GoHighLevel integration through webhooks ensuring zero manual data entry and instant CRM updates.",
      "Performance Optimization":
        "MySQL query optimization, Redis caching, and strategic indexing for sub-second response times.",
      "Scalability":
        "High-availability architecture supporting unlimited transaction growth without infrastructure redesign.",
    },
    technicalStack: [
      "Laravel Framework",
      "PHP",
      "MySQL",
      "Redis",
      "AWS EC2/RDS",
      "GoHighLevel API",
      "Encrypted Middleware",
      "REST APIs",
    ],
  },
  noomerik: {
    name: "Noomerik.com",
    slug: "noomerik",
    category: "Service Platform",
    employer: "Hegemonic Inc",
    color: "#7C3AED",
    date: "Oct 2023–Present",
    description:
      "Scalable service platform built on a modular REST API ecosystem with CRM-driven automation workflows and high-availability backend.",
    challenge:
      "Noomerik required a service marketplace platform that could scale across multiple service categories while automating workflow management. The platform needed to handle complex service routing, real-time availability updates, and maintain high uptime during peak demand.",
    architecture:
      "Architected a modular REST API ecosystem with clear versioning strategy to support both web and mobile clients. Implemented CRM-driven automation workflows for service provider management, customer notifications, and transaction processing. Built distributed caching layer using Redis for performance optimization.",
    highlights: [
      "50+ REST API endpoints with versioning strategy for seamless client integration",
      "CRM automation reducing manual operations by automating provider onboarding and customer communication",
      "99.9% uptime through distributed architecture with automatic failover",
      "Real-time availability system using WebSockets for live updates",
      "Comprehensive error handling and centralized logging infrastructure",
    ],
    outcome:
      "Deployed high-availability service marketplace supporting 99.9% uptime. Automated workflows eliminated manual operations, improving service delivery speed. Platform now handles complex service routing and real-time updates across multiple service categories.",
    metrics: [
      { label: "API Endpoints", value: "50+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Response Time", value: "<200ms" },
    ],
    keyFeatures: {
      "API Ecosystem":
        "Comprehensive REST APIs covering service discovery, booking, payment, and provider management with version control.",
      "CRM Integration":
        "Automated workflows for provider onboarding, customer communication, and service fulfillment tracking.",
      "Real-Time Updates":
        "WebSocket and polling mechanisms for live availability, order status, and instant notifications.",
      "Distributed Architecture":
        "Multi-region deployment with database replication and intelligent caching layers.",
    },
    technicalStack: [
      "Laravel Framework",
      "PHP",
      "MySQL",
      "Redis",
      "AWS EC2/RDS",
      "REST APIs",
      "WebSockets",
      "CRM Integration",
    ],
  },
  "loom-dreamhoster": {
    name: "loom",
    slug: "loom-dreamhoster",
    category: "Video Platform",
    employer: "HexaTech Solution",
    color: "#0891B2",
    date: "Dec 2023–Apr 2024",
    description:
      "Video recording platform with async background job processing, custom payment gateway, and Redis-powered queue management.",
    challenge:
      "The platform needed to handle large video uploads and process them asynchronously without blocking user uploads. A custom payment gateway was required for subscription and usage-based billing. API latency needed optimization for fast video metadata retrieval.",
    architecture:
      "Built a video processing pipeline using Laravel with Redis-powered background job queues for async encoding and transcoding. Implemented a custom payment gateway integration handling subscription billing and usage tracking. Optimized database queries through strategic indexing and caching to reduce video metadata retrieval latency.",
    highlights: [
      "Redis queue system managing thousands of concurrent video processing jobs",
      "Custom payment gateway achieving 45% improvement in transaction success rates",
      "20% API latency reduction through query optimization and strategic caching",
      "Async video encoding pipeline supporting multiple output formats",
      "Distributed video storage with CDN integration for global fast access",
    ],
    outcome:
      "Successfully deployed video platform with robust async processing. Transaction success rates improved by 45% through custom payment gateway optimization. API performance improved by 20% enabling faster video metadata retrieval and streaming.",
    metrics: [
      { label: "Transaction Success", value: "+45%" },
      { label: "API Latency", value: "20% Faster" },
      { label: "Queue Throughput", value: "Thousands/hour" },
    ],
    keyFeatures: {
      "Video Encoding":
        "Background job pipeline for transcoding videos into multiple formats and resolutions for adaptive streaming.",
      "Payment Integration":
        "Custom gateway handling subscription billing, usage tracking, and comprehensive revenue reporting.",
      "Async Processing":
        "Redis-powered queue system reliably managing thousands of concurrent video processing jobs.",
      "Storage Optimization":
        "Distributed file storage with compression and CDN delivery enabling fast video access globally.",
    },
    technicalStack: [
      "Laravel Framework",
      "PHP",
      "MySQL",
      "Redis Queues",
      "AWS S3/CloudFront",
      "FFmpeg",
      "Custom Payment API",
      "Background Jobs",
    ],
  },
  ylaa: {
    name: "Ylaa.com",
    slug: "ylaa",
    category: "E-commerce Platform",
    employer: "DevZone Solutions",
    color: "#059669",
    date: "May 2022–Jan 2023",
    description:
      "Full-featured e-commerce platform rebuilt from the ground up — achieving 30% faster page loads and doubling user capacity without infra cost.",
    challenge:
      "The original platform suffered from poor performance and limited scalability. The goal was to reduce page load times significantly while supporting 2x user growth without proportional infrastructure cost increases. Real-time inventory management and responsive mobile experience were critical.",
    architecture:
      "Completely rebuilt the platform using Laravel with optimized database queries, lazy loading, and efficient caching strategies. Implemented real-time inventory management with update notifications. Redesigned responsive UI with jQuery enhancements for seamless desktop and mobile shopping experience.",
    highlights: [
      "30% faster page load times through CSS/JS minification, lazy loading, and query optimization",
      "2x user capacity supported without infrastructure cost increase through efficient caching",
      "Responsive mobile-first UI with jQuery enhancements improving conversion rates by 18%",
      "Real-time inventory management with instant stock level updates",
      "Comprehensive product search and filtering system with faceted navigation",
    ],
    outcome:
      "Successfully delivered rebuilt e-commerce platform achieving 30% faster page loads. Doubled user capacity without increasing server costs through intelligent resource utilization. User conversion rates improved by 18% due to enhanced mobile experience.",
    metrics: [
      { label: "Page Load Speed", value: "30% Faster" },
      { label: "User Capacity", value: "2x Growth" },
      { label: "Conversion Rate", value: "+18%" },
    ],
    keyFeatures: {
      "Product Management":
        "Full-featured catalog with categories, search, filtering, and advanced product attributes.",
      "Shopping Cart":
        "Persistent cart system with real-time pricing, tax calculation, and inventory validation.",
      "Checkout Flow":
        "Multi-step checkout with guest/registered user options and integrated payment processing.",
      "Order Management":
        "Real-time order tracking, invoice generation, and customer communication system.",
    },
    technicalStack: [
      "Laravel Framework",
      "PHP",
      "MySQL",
      "JavaScript/jQuery",
      "Bootstrap CSS",
      "Stripe API",
      "AWS Hosting",
      "Redis Caching",
    ],
  },
};

/* ============================================
   ANIMATION VARIANTS
   ============================================ */

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 20, stiffness: 80 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};

/* ============================================
   PROJECT DETAIL PAGE
   ============================================ */

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  // Find previous and next projects for navigation
  const projectSlugs = Object.keys(projectsData);
  const currentIndex = projectSlugs.indexOf(slug);
  const previousProject =
    currentIndex > 0 ? projectsData[projectSlugs[currentIndex - 1]] : null;
  const nextProject =
    currentIndex < projectSlugs.length - 1
      ? projectsData[projectSlugs[currentIndex + 1]]
      : null;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* PAGE HEADER WITH COLOR STRIP */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className="relative"
      >
        <div
          className="h-1 w-full"
          style={{ backgroundColor: project.color }}
        />
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] bg-[#FFFFFF]">
          <div className="mx-auto max-w-4xl">
            {/* Back Link */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#94A3B8] font-medium mb-8 hover:text-[#2563EB] transition-colors"
            >
              ← All Projects
            </Link>

            {/* Project Name & Description */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h1 className="font-sora text-5xl lg:text-6xl font-bold text-[#0F172A] mb-4 leading-tight">
                  {project.name}
                </h1>
                <p className="text-lg text-[#475569] max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* BADGES & QUICK INFO */}
              <div className="flex flex-wrap gap-3 items-start">
                <Badge variant="accent">{project.category}</Badge>
                <span className="text-xs font-medium text-[#94A3B8] bg-[#F1F5F9] px-3 py-1.5 rounded-full">
                  {project.date}
                </span>
                <span className="text-xs font-medium text-[#94A3B8] bg-[#F1F5F9] px-3 py-1.5 rounded-full">
                  {project.employer}
                </span>
              </div>

              {/* KEY METRICS - 3 BOXES */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E2E8F0]"
              >
                {project.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <p className="text-xs uppercase text-[#94A3B8] font-semibold tracking-wider mb-2">
                      {metric.label}
                    </p>
                    <p className="text-2xl lg:text-3xl font-bold text-[#2563EB]">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>

      {/* MAIN CONTENT - 2 COLUMN LAYOUT */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* MAIN CONTENT - 65% */}
            <motion.div
              className="lg:col-span-2 space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* OVERVIEW */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="font-sora text-3xl font-bold text-[#0F172A]">
                  Overview
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* THE CHALLENGE */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="font-sora text-3xl font-bold text-[#0F172A]">
                  The Challenge
                </h2>
                <blockquote className="border-l-4 border-[#2563EB] pl-6 py-2">
                  <p className="text-[#475569] text-lg italic leading-relaxed">
                    "{project.challenge}"
                  </p>
                </blockquote>
              </motion.div>

              {/* ARCHITECTURE & SOLUTION */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="font-sora text-3xl font-bold text-[#0F172A]">
                  Architecture & Solution
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  {project.architecture}
                </p>
              </motion.div>

              {/* TECHNICAL DEEP DIVE */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="font-sora text-3xl font-bold text-[#0F172A]">
                  Technical Deep Dive
                </h2>
                <div className="bg-[#0F172A] rounded-xl p-6 border border-[#1E293B] overflow-x-auto">
                  <pre className="text-sm text-[#E2E8F0] font-mono">
{`<?php

// Laravel Payment Processor Implementation
namespace App\\Services;

class PaymentProcessor
{
    public function processTransaction($payment)
    {
        // Encrypted middleware layer
        $encrypted = encrypt($payment->data);

        // Queue async processing
        ProcessPaymentJob::dispatch(
            $encrypted,
            $payment->gateway
        );

        return $payment;
    }

    public function integrateWithCRM($result)
    {
        // Webhook integration with CRM
        GoHighLevel::sync($result);
    }
}

// Redis Queue Configuration
Queue::connection('redis')
    ->push(new ProcessPaymentJob($payment));
`}
                  </pre>
                </div>
              </motion.div>

              {/* RESULTS & IMPACT */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="font-sora text-3xl font-bold text-[#0F172A]">
                  Results & Impact
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  {project.outcome}
                </p>
                <div className="bg-gradient-to-br from-[#DBEAFE] to-[#F0F9FF] rounded-xl p-8 border border-[#BFDBFE]">
                  <div className="space-y-4">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#2563EB] flex items-center justify-center mt-0.5">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <p className="text-[#0F172A] font-medium text-sm">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* TECHNOLOGY STACK */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="font-sora text-3xl font-bold text-[#0F172A]">
                  Technology Stack
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.technicalStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#0F172A] font-medium text-sm text-center hover:border-[#2563EB] transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* SIDEBAR - 35% */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {/* QUICK INFO CARD */}
              <div className="sticky top-8 space-y-6">
                <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-6 space-y-4">
                  <h3 className="font-sora font-bold text-[#0F172A]">
                    Project Info
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-xs uppercase text-[#94A3B8] font-semibold tracking-wider mb-1">
                        Employer
                      </p>
                      <p className="text-[#0F172A] font-medium">
                        {project.employer}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase text-[#94A3B8] font-semibold tracking-wider mb-1">
                        Timeline
                      </p>
                      <p className="text-[#0F172A] font-medium">{project.date}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase text-[#94A3B8] font-semibold tracking-wider mb-1">
                        Category
                      </p>
                      <p className="text-[#0F172A] font-medium">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>

                {/* TECH STACK QUICK LIST */}
                <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-6">
                  <h3 className="font-sora font-bold text-[#0F172A] mb-4">
                    Tech Stack
                  </h3>
                  <div className="space-y-2">
                    {project.technicalStack.slice(0, 8).map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block text-xs font-medium text-[#475569] bg-[#F1F5F9] px-2 py-1 rounded mr-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA CARD */}
                <div className="bg-[#2563EB] text-white rounded-xl p-6 space-y-4">
                  <h3 className="font-sora font-bold text-lg">
                    Working on something similar?
                  </h3>
                  <p className="text-sm text-blue-100">
                    Let's talk about your project needs and technical requirements.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-4 py-2 bg-white text-[#2563EB] font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm w-full text-center"
                  >
                    Get In Touch →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BOTTOM NAVIGATION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#E2E8F0] bg-[#FFFFFF]">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-between items-center"
          >
            {previousProject ? (
              <Link
                href={`/projects/${previousProject.slug}`}
                className="flex items-center gap-2 text-[#2563EB] font-semibold hover:gap-3 transition-all"
              >
                <span>←</span> {previousProject.name}
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/projects"
              className="text-[#94A3B8] font-medium hover:text-[#2563EB] transition-colors"
            >
              All Projects
            </Link>

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="flex items-center gap-2 text-[#2563EB] font-semibold hover:gap-3 transition-all"
              >
                {nextProject.name} <span>→</span>
              </Link>
            ) : (
              <div />
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
