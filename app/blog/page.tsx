"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";

/* ============================================
   TYPES & DATA
   ============================================ */
type Category = "Performance" | "Integration" | "Security" | "Architecture";
type Filter = "All" | Category;

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  readTime: number;
  date: string;
  category: Category;
}

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "reducing-mysql-query-time-60-percent",
    title: "Reducing MySQL Query Time by 60%: A Laravel Developer's Playbook",
    excerpt:
      "How strategic indexing, query restructuring, and Redis caching transformed a sluggish API into a sub-100ms powerhouse — with real before/after numbers.",
    tags: ["MySQL", "Laravel", "Redis", "Indexing"],
    readTime: 8,
    date: "2024-03-15",
    category: "Performance",
  },
  {
    slug: "webhook-driven-crm-automations-gohighlevel",
    title: "Webhook-Driven CRM Automation with GoHighLevel: Architecture Deep Dive",
    excerpt:
      "Behind the architecture that automated client onboarding workflows and cut manual operations by 50% — from webhook ingestion to CRM state management.",
    tags: ["GoHighLevel", "CRM", "Laravel", "Webhooks"],
    readTime: 6,
    date: "2024-02-08",
    category: "Integration",
  },
  {
    slug: "redis-caching-patterns-laravel",
    title: "Redis Caching Patterns That Eliminated Our Laravel Bottlenecks",
    excerpt:
      "Not all caching strategies are equal. Here are the three Redis patterns — cache-aside, write-through, and stampede prevention — that made the biggest difference.",
    tags: ["Redis", "Laravel", "Caching", "Performance"],
    readTime: 7,
    date: "2024-01-22",
    category: "Performance",
  },
  {
    slug: "secure-payment-middleware-laravel",
    title: "Designing Secure Payment Middleware in Laravel: A Zero-Trust Approach",
    excerpt:
      "How I built encrypted middleware layers that handle payment data without ever exposing sensitive information to the application layer — and why that matters.",
    tags: ["Laravel", "Payments", "Security", "Middleware"],
    readTime: 10,
    date: "2023-12-10",
    category: "Security",
  },
];

const CATEGORIES: Filter[] = ["All", "Performance", "Integration", "Security", "Architecture"];

const CATEGORY_CONFIG: Record<Category, { color: string; bg: string; border: string }> = {
  Performance:  { color: "#10B981", bg: "#DCFCE7", border: "#BBF7D0" },
  Integration:  { color: "#3B82F6", bg: "#DBEAFE", border: "#BFDBFE" },
  Security:     { color: "#EF4444", bg: "#FEE2E2", border: "#FECACA" },
  Architecture: { color: "#A855F7", bg: "#F3E8FF", border: "#E9D5FF" },
};

/* ============================================
   HELPERS
   ============================================ */
const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

/* ============================================
   ANIMATION VARIANTS
   ============================================ */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

/* ============================================
   PAGE COMPONENT
   ============================================ */
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Filter>("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* ─── HEADER ──────────────────────────────── */}
      <section className="bg-[#F1F5F9] border-b border-[#E2E8F0] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-3"
            >
              Engineering Insights
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#0F172A] mb-4 font-sora leading-tight"
            >
              Technical Writing from the Backend
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#475569] max-w-2xl"
            >
              Deep dives into backend architecture, performance engineering, and systems
              design from real production experience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── STICKY CATEGORY FILTER ──────────────── */}
      <div className="sticky top-0 z-30 bg-[#F8FAFC]/90 backdrop-blur-md border-b border-[#E2E8F0] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#2563EB] text-white shadow-md"
                    : "bg-white text-[#475569] border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB]"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── FEATURED POST ───────────────────── */}
        <AnimatePresence>
          {activeCategory === "All" && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="py-12"
            >
              <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
                {/* Featured accent bar */}
                <div className="h-[3px] bg-gradient-to-r from-[#2563EB] to-[#7C3AED]" />

                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Left content */}
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
                        Featured Article
                      </span>
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full border"
                        style={{
                          backgroundColor: CATEGORY_CONFIG[featuredPost.category].bg,
                          color: CATEGORY_CONFIG[featuredPost.category].color,
                          borderColor: CATEGORY_CONFIG[featuredPost.category].border,
                        }}
                      >
                        {featuredPost.category}
                      </span>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0F172A] mb-4 font-sora leading-tight group-hover:text-[#2563EB] transition-colors duration-200">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-[#475569] leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0] rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta + CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-[#94A3B8]">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {formatDate(featuredPost.date)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} />
                          {featuredPost.readTime} min read
                        </span>
                      </div>

                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2563EB] group-hover:gap-2.5 transition-all"
                      >
                        Read Article
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Right — visual accent */}
                  <div className="hidden lg:flex lg:col-span-2 items-center justify-center bg-gradient-to-br from-[#F0F9FF] to-[#DBEAFE] relative p-8">
                    {/* Abstract code visualization */}
                    <svg className="w-28 h-28 opacity-25" viewBox="0 0 100 100" fill="none">
                      <rect x="10" y="10" width="80" height="80" rx="4" stroke="#2563EB" strokeWidth="1.5" />
                      <line x1="20" y1="28" x2="80" y2="28" stroke="#2563EB" strokeWidth="1" />
                      <line x1="20" y1="40" x2="65" y2="40" stroke="#2563EB" strokeWidth="1" />
                      <line x1="20" y1="52" x2="72" y2="52" stroke="#2563EB" strokeWidth="1" />
                      <line x1="20" y1="64" x2="55" y2="64" stroke="#2563EB" strokeWidth="1" />
                      <circle cx="20" cy="76" r="2.5" fill="#2563EB" />
                      <circle cx="30" cy="76" r="2.5" fill="#2563EB" />
                      <circle cx="40" cy="76" r="2.5" fill="#2563EB" />
                    </svg>
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-[#2563EB] text-white text-xs font-bold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── POSTS GRID ──────────────────────── */}
        <div className={activeCategory === "All" ? "pb-16" : "py-16"}>
          {filteredPosts.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={`grid grid-cols-1 md:grid-cols-2 ${activeCategory !== "All" ? "lg:grid-cols-3" : "lg:grid-cols-3"} gap-6`}
              >
                {(activeCategory === "All"
                  ? filteredPosts.filter((p) => p.slug !== featuredPost.slug)
                  : filteredPosts
                ).map((post) => {
                  const catCfg = CATEGORY_CONFIG[post.category];
                  return (
                    <motion.div key={post.slug} variants={itemVariants}>
                      <Link href={`/blog/${post.slug}`} className="block group h-full">
                        <motion.div
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.25 }}
                          className="h-full bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:border-[#2563EB]/30 transition-all duration-300 flex flex-col"
                        >
                          {/* Category color bar */}
                          <div
                            className="h-[3px] w-full"
                            style={{ backgroundColor: catCfg.color }}
                          />

                          <div className="p-6 flex flex-col flex-grow">
                            {/* Category badge */}
                            <span
                              className="self-start mb-4 text-xs font-semibold px-2.5 py-1 rounded-full border"
                              style={{
                                backgroundColor: catCfg.bg,
                                color: catCfg.color,
                                borderColor: catCfg.border,
                              }}
                            >
                              {post.category}
                            </span>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-[#0F172A] mb-3 line-clamp-2 group-hover:text-[#2563EB] transition-colors font-sora leading-snug flex-grow">
                              {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-[#475569] text-sm leading-relaxed line-clamp-3 mb-4">
                              {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-5">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs font-medium px-2 py-0.5 bg-[#F1F5F9] text-[#64748B] rounded-md border border-[#E2E8F0]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0] mt-auto">
                              <div className="flex items-center gap-3 text-xs text-[#94A3B8]">
                                <span className="flex items-center gap-1">
                                  <Calendar size={11} />
                                  {formatDate(post.date)}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock size={11} />
                                  {post.readTime} min
                                </span>
                              </div>
                              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] group-hover:gap-1.5 transition-all">
                                Read
                                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-[#94A3B8] text-lg mb-4">
                No articles in this category yet.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="text-[#2563EB] font-semibold hover:text-[#1D4ED8] transition-colors"
              >
                View all articles →
              </button>
            </motion.div>
          )}
        </div>

        {/* ─── MORE ARTICLES BANNER ──────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 bg-gradient-to-r from-[#DBEAFE] to-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-8 sm:p-10 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-3">
            More Articles Coming Soon
          </p>
          <p className="text-[#0F172A] text-lg font-semibold mb-2">
            I write about backend architecture, AWS workflows, performance engineering, and API design.
          </p>
          <p className="text-[#475569] text-sm max-w-xl mx-auto">
            Deep technical articles covering real production challenges and the engineering decisions behind them.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
