"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Zap, CheckCircle2, ExternalLink, Calendar, Building2, Tag, ChevronRight } from "lucide-react";

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
   PROJECTS DATA - EXTENDED
   ============================================ */

const projectsData: Record<string, ProjectData> = {
  payyourcell: {
    name: "PayYourCell",
    slug: "payyourcell",
    category: "Payment Platform",
    employer: "Hegemonic Inc",
    color: "#2563EB",
    date: "Sep 2023 – Present",
    description:
      "Enterprise payment platform with CRM-integrated workflows, encrypted middleware architecture, and performance-tuned APIs serving thousands of active users daily.",
    challenge:
      "Hegemonic Inc needed a payment platform that could handle high transaction volumes while integrating seamlessly with their GoHighLevel CRM — with zero manual data entry between systems. The challenge was building a secure, scalable architecture that could process payments without creating bottlenecks in their sales workflow, while maintaining strict PCI compliance.",
    architecture:
      "Built a Laravel backend with a dedicated payment processing layer using encrypted middleware to ensure sensitive data never touches the application layer directly. Implemented async queue processing for transaction handling, allowing payments to be processed without blocking user-facing requests. GoHighLevel webhook integration ensures automatic CRM updates, eliminating manual data entry entirely.",
    highlights: [
      "GoHighLevel CRM webhook integration with bi-directional data sync",
      "Encrypted middleware pipeline achieving full PCI compliance",
      "MySQL query optimization delivering 25% API response time improvement",
      "Redis-powered async queue for non-blocking transaction processing",
      "High-availability backend serving thousands of concurrent users daily",
    ],
    outcome:
      "Successfully deployed payment platform now serving thousands of active users. Client onboarding time reduced by 50% through automated CRM workflows. API response times improved by 25% through strategic database optimization and caching layers. System maintains 99.9% uptime across all production environments.",
    metrics: [
      { label: "Onboarding Speed", value: "50%", sub: "Faster" },
      { label: "API Response", value: "25%", sub: "Improvement" },
      { label: "Uptime", value: "99.9%", sub: "Production" },
    ],
    keyFeatures: {
      "Payment Processing":
        "Secure encrypted payment layer with PCI compliance, handling high-volume transactions with async processing and automatic retry logic.",
      "CRM Integration":
        "Real-time GoHighLevel integration through webhooks ensuring zero manual data entry and instant CRM record updates on every transaction.",
      "Performance Optimization":
        "MySQL query optimization, Redis caching, and strategic indexing for sub-second response times under peak load.",
      "Scalability":
        "High-availability architecture supporting unlimited transaction growth without infrastructure redesign or service interruption.",
    },
    technicalStack: [
      "Laravel Framework",
      "PHP 8.x",
      "MySQL",
      "Redis",
      "AWS EC2/RDS",
      "GoHighLevel API",
      "Encrypted Middleware",
      "REST APIs",
    ],
    codeSnippet: {
      filename: "PaymentProcessor.php",
      language: "php",
      code: `<?php

namespace App\\Services;

use App\\Jobs\\ProcessPaymentJob;
use App\\Integrations\\GoHighLevel;

class PaymentProcessor
{
    public function processTransaction(Payment $payment): Payment
    {
        // Encrypted middleware layer — sensitive data
        // never touches the application layer directly
        $encrypted = $this->encryptPayload($payment->data);

        // Dispatch to Redis queue — non-blocking
        ProcessPaymentJob::dispatch(
            $encrypted,
            $payment->gateway_id
        )->onQueue('payments');

        return $payment->markAsPending();
    }

    public function syncWithCRM(PaymentResult $result): void
    {
        // Bi-directional GoHighLevel webhook sync
        GoHighLevel::contact($result->customer_id)
            ->updateOpportunity([
                'stage'  => 'Won',
                'amount' => $result->amount,
            ]);
    }
}`,
    },
  },
  noomerik: {
    name: "Noomerik.com",
    slug: "noomerik",
    category: "Service Platform",
    employer: "Hegemonic Inc",
    color: "#7C3AED",
    date: "Oct 2023 – Present",
    description:
      "Scalable service marketplace built on a modular REST API ecosystem with CRM-driven automation workflows, high-availability backend, and real-time availability updates.",
    challenge:
      "Noomerik required a service marketplace platform that could scale across multiple service categories while automating complex workflow management. The platform needed to handle intricate service routing, real-time availability updates, and maintain 99.9% uptime during peak demand periods — all while supporting both web and mobile clients through a single unified API.",
    architecture:
      "Architected a modular REST API ecosystem with clear versioning strategy to support both web and mobile clients from one codebase. Implemented CRM-driven automation workflows for service provider management, customer notifications, and transaction processing. Built a distributed caching layer using Redis for performance optimization and a WebSocket layer for real-time updates.",
    highlights: [
      "50+ REST API endpoints with full versioning strategy for seamless client evolution",
      "CRM automation reducing manual operations — provider onboarding and notifications fully automated",
      "99.9% uptime through distributed architecture with automatic failover",
      "Real-time availability system using WebSockets for live service status updates",
      "Comprehensive centralized logging infrastructure and error handling pipeline",
    ],
    outcome:
      "Deployed high-availability service marketplace supporting 50K+ daily active users with 99.9% uptime. Automated workflows eliminated manual operations, improving service delivery speed significantly. Platform handles complex service routing and real-time availability updates across all service categories with sub-500ms API responses.",
    metrics: [
      { label: "Daily Active Users", value: "50K+", sub: "Concurrent" },
      { label: "API Uptime", value: "99.9%", sub: "Availability" },
      { label: "Response Time", value: "<500ms", sub: "Average" },
    ],
    keyFeatures: {
      "API Ecosystem":
        "Comprehensive REST APIs covering service discovery, booking, payment, and provider management with full version control strategy.",
      "CRM Integration":
        "Automated workflows for provider onboarding, customer communication, and service fulfillment tracking with zero manual intervention.",
      "Real-Time Updates":
        "WebSocket and polling mechanisms for live service availability, order status, and instant push notifications.",
      "Distributed Architecture":
        "Multi-region-ready deployment with database replication strategy and intelligent multi-layer caching.",
    },
    technicalStack: [
      "Laravel Framework",
      "PHP 8.x",
      "MySQL",
      "Redis",
      "AWS EC2/RDS",
      "REST APIs",
      "WebSockets",
      "CRM Integration",
    ],
    liveUrl: "https://noomerik.com",
    codeSnippet: {
      filename: "ServiceAvailabilityController.php",
      language: "php",
      code: `<?php

namespace App\\Http\\Controllers\\Api\\V1;

use App\\Services\\AvailabilityService;
use Illuminate\\Http\\JsonResponse;

class ServiceAvailabilityController extends Controller
{
    public function __construct(
        private AvailabilityService $availability
    ) {}

    /**
     * Real-time availability — cached with Redis TTL
     * Handles 50K+ daily requests at <500ms P95
     */
    public function index(ServiceRequest $request): JsonResponse
    {
        $slots = $this->availability
            ->forCategory($request->category_id)
            ->withinRadius($request->lat, $request->lng, 25)
            ->cache(ttl: 30) // 30-second Redis cache
            ->paginate(20);

        return ServiceResource::collection($slots)
            ->response()
            ->setStatusCode(200);
    }
}`,
    },
  },
  "loom-dreamhoster": {
    name: "loom.dreamhoster.com",
    slug: "loom-dreamhoster",
    category: "Video Platform",
    employer: "HexaTech Solution",
    color: "#0891B2",
    date: "Dec 2023 – Apr 2024",
    description:
      "Video recording and sharing platform with async background job processing, custom payment gateway integration, and Redis-powered queue management for reliable media processing.",
    challenge:
      "The platform needed to handle large video uploads and process them asynchronously without blocking user-facing operations. A custom payment gateway was required for subscription and usage-based billing with significantly improved transaction success rates. API latency needed optimization for fast video metadata retrieval and smooth playback initiation.",
    architecture:
      "Built a video processing pipeline using Laravel with Redis-powered background job queues for async encoding and transcoding. Implemented a custom payment gateway integration handling subscription billing, usage tracking, and automatic retry logic. Optimized database queries through strategic indexing and query caching to reduce video metadata retrieval latency by 20%.",
    highlights: [
      "Redis queue system managing thousands of concurrent video processing jobs per hour",
      "Custom payment gateway achieving 45% improvement in transaction success rates",
      "20% API latency reduction through query optimization and strategic caching layers",
      "Async video encoding pipeline supporting multiple output formats and resolutions",
      "Distributed video storage with AWS S3 and CDN integration for global fast access",
    ],
    outcome:
      "Successfully deployed video platform with robust async processing infrastructure. Transaction success rates improved by 45% through custom payment gateway optimization and retry logic. API performance improved by 20%, enabling faster video metadata retrieval and seamless streaming initiation. Platform maintains 99.8% uptime across all services.",
    metrics: [
      { label: "Transaction Success", value: "+45%", sub: "Improvement" },
      { label: "API Latency", value: "20%", sub: "Reduction" },
      { label: "Uptime", value: "99.8%", sub: "Production" },
    ],
    keyFeatures: {
      "Video Encoding Pipeline":
        "Background job queue for transcoding videos into multiple formats and resolutions for adaptive streaming across devices.",
      "Payment Gateway":
        "Custom gateway handling subscription billing, per-usage tracking, automatic retries, and comprehensive revenue reporting.",
      "Async Processing":
        "Redis-powered queue system reliably processing thousands of concurrent video jobs without blocking user operations.",
      "CDN Delivery":
        "Distributed file storage with AWS S3, compression, and CloudFront CDN enabling fast global video access.",
    },
    technicalStack: [
      "Laravel Framework",
      "PHP 8.x",
      "MySQL",
      "Redis Queues",
      "AWS S3/CloudFront",
      "FFmpeg",
      "Custom Payment API",
      "Background Jobs",
    ],
    codeSnippet: {
      filename: "VideoProcessingJob.php",
      language: "php",
      code: `<?php

namespace App\\Jobs;

use App\\Models\\Video;
use App\\Services\\FFmpegService;
use App\\Services\\CDNService;
use Illuminate\\Bus\\Queueable;
use Illuminate\\Queue\\SerializesModels;

class ProcessVideoJob implements ShouldQueue
{
    use Queueable, SerializesModels;

    public int $tries = 3;
    public int $timeout = 600; // 10 min max

    public function handle(
        FFmpegService $ffmpeg,
        CDNService $cdn
    ): void {
        // Transcode to multiple resolutions
        $outputs = $ffmpeg->transcode($this->video->raw_path, [
            '1080p' => ['bitrate' => '5000k'],
            '720p'  => ['bitrate' => '2500k'],
            '480p'  => ['bitrate' => '1000k'],
        ]);

        // Push to CDN — update manifest
        $cdn->upload($outputs)
            ->invalidateCache($this->video->cdn_key);

        $this->video->markAsReady();
    }
}`,
    },
  },
  ylaa: {
    name: "Ylaa.com",
    slug: "ylaa",
    category: "E-commerce Platform",
    employer: "DevZone Solutions",
    color: "#059669",
    date: "May 2022 – Jan 2023",
    description:
      "Full-featured e-commerce platform rebuilt from the ground up — achieving 30% faster page loads and doubling user capacity without infrastructure cost increase.",
    challenge:
      "The original platform suffered from severe performance degradation and limited scalability as the user base grew. Page load times were unacceptably slow, leading to high cart abandonment rates. The goal was to rebuild the platform to support 2x user growth without proportional infrastructure cost increases, while delivering a modern mobile-first shopping experience.",
    architecture:
      "Completely rebuilt the platform using Laravel with optimized database query patterns, strategic lazy loading, and multi-layer caching using Redis. Implemented real-time inventory management with instant stock level update notifications. Redesigned the frontend with jQuery-enhanced UX improvements for a seamless mobile shopping experience, reducing cart abandonment by 18%.",
    highlights: [
      "30% faster page load times via CSS/JS minification, lazy loading, and N+1 query elimination",
      "2x user capacity achieved without infrastructure cost increase through intelligent caching",
      "18% reduction in cart abandonment through improved mobile-first responsive UI",
      "Real-time inventory management with instant stock level updates across all sessions",
      "Faceted product search and filtering system with category-level caching",
    ],
    outcome:
      "Successfully delivered a rebuilt e-commerce platform achieving 30% faster page loads across all devices. Doubled user capacity without increasing server costs through intelligent resource utilization and query optimization. Cart abandonment dropped by 18% due to the enhanced mobile checkout experience. Platform now handles peak traffic with predictable, stable performance.",
    metrics: [
      { label: "Page Load Speed", value: "30%", sub: "Faster" },
      { label: "User Capacity", value: "2×", sub: "Growth" },
      { label: "Cart Abandonment", value: "−18%", sub: "Reduction" },
    ],
    keyFeatures: {
      "Performance Overhaul":
        "Eliminated N+1 queries, implemented strategic Redis caching, and added CDN for static assets — 30% faster page loads.",
      "Shopping Cart":
        "Persistent cart system with real-time pricing, tax calculation, inventory validation, and seamless session management.",
      "Mobile-First Checkout":
        "Redesigned responsive checkout flow with guest/registered user options, reducing cart abandonment by 18%.",
      "Inventory Management":
        "Real-time stock level updates with low-stock notifications, preventing overselling and improving fulfillment accuracy.",
    },
    technicalStack: [
      "Laravel Framework",
      "PHP 8.x",
      "MySQL",
      "JavaScript/jQuery",
      "Bootstrap CSS",
      "Stripe API",
      "AWS Hosting",
      "Redis Caching",
    ],
    liveUrl: "https://ylaa.com",
    codeSnippet: {
      filename: "ProductCatalogService.php",
      language: "php",
      code: `<?php

namespace App\\Services;

use App\\Models\\Product;
use Illuminate\\Support\\Facades\\Cache;

class ProductCatalogService
{
    /**
     * Faceted product search with category-level caching
     * Eliminated N+1 queries — 30% faster page loads
     */
    public function search(SearchFilters $filters): LengthAwarePaginator
    {
        $cacheKey = 'catalog:' . md5(serialize($filters));

        return Cache::remember($cacheKey, 300, function () use ($filters) {
            return Product::query()
                ->with(['category', 'images', 'inventory'])
                ->when($filters->category, fn($q, $cat) =>
                    $q->whereHas('category', fn($q) =>
                        $q->where('slug', $cat)
                    )
                )
                ->when($filters->priceMin, fn($q, $min) =>
                    $q->where('price', '>=', $min)
                )
                ->orderBy($filters->sortBy, $filters->sortDir)
                ->paginate(24);
        });
    }
}`,
    },
  },
};

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
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

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
