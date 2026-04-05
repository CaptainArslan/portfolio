"use client";

import React, { useState, useMemo } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  readTime: number;
  date: string;
  category: "Performance" | "Integration" | "Security" | "Architecture";
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
      "Not all caching strategies are equal. Here are the three Redis patterns — cache-aside, write-through, and pub/sub — that made the biggest difference.",
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

const CATEGORIES = [
  "All",
  "Performance",
  "Integration",
  "Security",
  "Architecture",
] as const;

const CATEGORY_COLORS: Record<string, string> = {
  Performance: "#10B981",
  Integration: "#3B82F6",
  Security: "#EF4444",
  Architecture: "#A855F7",
};

const TAG_COLORS: Record<string, string> = {
  MySQL: "#10B981",
  Performance: "#06B6D4",
  Laravel: "#FF2D20",
  Redis: "#DC2626",
  GoHighLevel: "#7C3AED",
  CRM: "#F59E0B",
  Webhooks: "#3B82F6",
  Caching: "#8B5CF6",
  Payments: "#EC4899",
  Security: "#EF4444",
  Middleware: "#06B6D4",
  Indexing: "#F59E0B",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return BLOG_POSTS;
    }
    return BLOG_POSTS.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const featuredPost = BLOG_POSTS[0];
  const remainingPosts = filteredPosts.filter((post) => post.slug !== featuredPost.slug);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header Section */}
      <motion.section
        className="bg-[#F1F5F9] py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-3"
            >
              Engineering Insights
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-4 font-sora leading-tight"
            >
              Technical Writing from the Backend
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-[#475569] max-w-3xl"
            >
              Deep dives into backend architecture, performance engineering, and systems design from real production experience.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="px-4 sm:px-6 lg:px-8 py-12 sticky top-0 bg-[#F8FAFC]/80 backdrop-blur-sm z-40 border-b border-[#E2E8F0]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  activeCategory === category
                    ? "bg-[#2563EB] text-white shadow-lg"
                    : "bg-[#FFFFFF] text-[#475569] border border-[#E2E8F0] hover:border-[#2563EB]"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Post */}
      <AnimatePresence>
        {activeCategory === "All" && (
          <section className="px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] shadow-sm hover:shadow-lg transition-all"
              >
                {/* Featured Post Content */}
                <div className="flex flex-col lg:flex-row">
                  {/* Left Content */}
                  <div className="flex-1 p-8 lg:p-10">
                    {/* Category Badge & Meta */}
                    <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
                      <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Badge
                          variant="accent"
                          className="bg-[#DBEAFE] text-[#0369A1]"
                        >
                          {featuredPost.category}
                        </Badge>
                      </motion.div>
                      <div className="flex items-center gap-4 text-sm text-[#64748B]">
                        <span>{formatDate(featuredPost.date)}</span>
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10.894 2.553a.75.75 0 00-1.788 0l-.27 4.05a.75.75 0 001.498.092l.503-7.505.504 7.505a.75.75 0 001.498-.092l-.27-4.05zM12.309 5.372a.75.75 0 00-1.364.558l1.707 5.71.908-6.33a.75.75 0 00-1.45-.508L10.5 10.366l1.81-4.994z" />
                          </svg>
                          {featuredPost.readTime} min read
                        </span>
                      </div>
                    </div>

                    {/* Title & Excerpt */}
                    <div className="mb-6">
                      <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4 font-sora leading-tight hover:text-[#2563EB] transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-lg text-[#475569] leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="default"
                          className="bg-[#FFFFFF] border border-[#E2E8F0] text-[#475569]"
                        >
                          <span
                            className="inline-block w-2 h-2 rounded-full mr-2"
                            style={{
                              backgroundColor: TAG_COLORS[tag] || "#64748B",
                            }}
                          />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:gap-3 transition-all group text-lg"
                    >
                      Read Article
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>

                  {/* Right Accent Strip */}
                  <div className="hidden lg:flex flex-col items-center justify-center lg:w-1/3 relative overflow-hidden bg-gradient-to-br from-[#F0F9FF] to-[#DBEAFE] p-8">
                    {/* Decorative SVG or Abstract Code Visual */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <svg
                        className="w-32 h-32 opacity-20"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="10" y="10" width="80" height="80" stroke="#2563EB" strokeWidth="2" />
                        <line x1="20" y1="30" x2="80" y2="30" stroke="#2563EB" strokeWidth="1" />
                        <line x1="20" y1="45" x2="70" y2="45" stroke="#2563EB" strokeWidth="1" />
                        <line x1="20" y1="60" x2="75" y2="60" stroke="#2563EB" strokeWidth="1" />
                        <circle cx="25" cy="70" r="3" fill="#2563EB" />
                        <circle cx="35" cy="70" r="3" fill="#2563EB" />
                        <circle cx="45" cy="70" r="3" fill="#2563EB" />
                      </svg>
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-[#2563EB] text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </AnimatePresence>

      {/* Blog Posts Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length > 0 && (activeCategory === "All" ? remainingPosts.length > 0 : true) ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {(activeCategory === "All" ? remainingPosts : filteredPosts).map(
                (post, index) => (
                  <motion.div key={post.slug} variants={itemVariants}>
                    <Card hover className="h-full flex flex-col p-6 hover:border-[#2563EB]">
                      <div className="space-y-4 flex flex-col h-full">
                        {/* Category Badge */}
                        <motion.div
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Badge
                            variant="default"
                            className="w-fit"
                            style={{
                              backgroundColor: `${
                                CATEGORY_COLORS[post.category]
                              }15`,
                              borderColor: `${
                                CATEGORY_COLORS[post.category]
                              }30`,
                              color: CATEGORY_COLORS[post.category],
                              border: `1px solid ${CATEGORY_COLORS[post.category]}30`,
                            }}
                          >
                            {post.category}
                          </Badge>
                        </motion.div>

                        {/* Title */}
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-[#0F172A] mb-3 line-clamp-2 hover:text-[#2563EB] transition-colors font-sora">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h3>

                          {/* Excerpt */}
                          <p className="text-[#475569] text-sm leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="default"
                              className="text-xs bg-[#F1F5F9] text-[#475569]"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 3 && (
                            <Badge
                              variant="default"
                              className="text-xs bg-[#F1F5F9] text-[#475569]"
                            >
                              +{post.tags.length - 3}
                            </Badge>
                          )}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                          <div className="flex items-center gap-3 text-xs text-[#64748B]">
                            <span>{formatDate(post.date)}</span>
                            <span className="flex items-center gap-1">
                              <svg
                                className="w-3 h-3"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10.894 2.553a.75.75 0 00-1.788 0l-.27 4.05a.75.75 0 001.498.092l.503-7.505.504 7.505a.75.75 0 001.498-.092l-.27-4.05zM12.309 5.372a.75.75 0 00-1.364.558l1.707 5.71.908-6.33a.75.75 0 00-1.45-.508L10.5 10.366l1.81-4.994z" />
                              </svg>
                              {post.readTime} min
                            </span>
                          </div>

                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-1 text-[#2563EB] font-semibold hover:gap-2 transition-all group"
                          >
                            Read
                            <svg
                              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-[#64748B] text-lg mb-4">
                No articles found in this category yet.
              </p>
              <motion.button
                onClick={() => setActiveCategory("All")}
                className="text-[#2563EB] font-semibold hover:underline transition-all"
                whileHover={{ x: 4 }}
              >
                View all articles
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Coming Soon Banner */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#F0F9FF] to-[#DBEAFE] p-8 sm:p-10 rounded-2xl border border-[#DBEAFE] shadow-sm">
            <div className="text-center space-y-3">
              <motion.p
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest"
              >
                More Articles Coming Soon
              </motion.p>
              <p className="text-[#0F172A] text-lg font-semibold">
                I write about backend architecture, AWS workflows, performance engineering, and API design.
              </p>
              <p className="text-[#475569] text-sm max-w-2xl mx-auto">
                Stay tuned for in-depth technical articles covering real-world challenges and solutions.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
