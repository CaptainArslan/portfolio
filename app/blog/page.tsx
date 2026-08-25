"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, ExternalLink, Github } from "lucide-react";

/* ============================================
   TYPES & DATA
   ============================================
   These are real, published technical guides — hosted as standalone
   GitHub Pages sites, not in-app blog posts. Links go straight to the
   live guide (and the repo), since there's no in-app reader for them.
*/
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  readTime: number;
  date: string;
  url: string;
  githubUrl: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "deploy-laravel-vps",
    title: "Deploying Laravel to a Bare Ubuntu VPS: A Complete, Copy-Paste Guide",
    excerpt:
      "A start-to-finish playbook for taking a Laravel app from a blank Ubuntu server to a hardened production host — firewall and user setup, Nginx, PHP-FPM, MySQL, HTTPS via Let's Encrypt, Supervisor-managed queue workers, cron-driven scheduling, and a zero-downtime redeploy script.",
    tags: ["Laravel", "VPS", "Nginx", "DevOps"],
    readTime: 12,
    date: "2026-08-24",
    url: "https://captainarslan.github.io/deploy-laravel-vps/",
    githubUrl: "https://github.com/CaptainArslan/deploy-laravel-vps",
    image: "/blog/deploy-laravel-vps.jpg",
  },
  {
    slug: "python-systemd-guide",
    title: "Running a Python App as a systemd Service on Ubuntu",
    excerpt:
      "A step-by-step guide to turning a Python application into a proper background service — virtual environment setup, writing the systemd unit file, file permissions, enabling and monitoring the service with journalctl, a systemctl command reference, and safely redeploying after updates.",
    tags: ["Python", "systemd", "Linux", "DevOps"],
    readTime: 9,
    date: "2026-08-24",
    url: "https://captainarslan.github.io/python-systemd-guide/",
    githubUrl: "https://github.com/CaptainArslan/python-systemd-guide",
    image: "/blog/python-systemd-guide.jpg",
  },
];

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
  const featuredPost = BLOG_POSTS[0];
  const restPosts = BLOG_POSTS.slice(1);

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
              Engineering Guides
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
              In-depth, step-by-step guides on deployment and server infrastructure —
              written from real production setups, not tutorials.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── FEATURED POST ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
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
                    Featured Guide
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]">
                    DevOps
                  </span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-[#0F172A] mb-4 font-sora leading-tight group-hover:text-[#2563EB] transition-colors duration-200">
                  <a href={featuredPost.url} target="_blank" rel="noopener noreferrer">
                    {featuredPost.title}
                  </a>
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
                <div className="flex items-center justify-between flex-wrap gap-4">
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

                  <div className="flex items-center gap-4">
                    <a
                      href={featuredPost.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#475569] hover:text-[#2563EB] transition-colors"
                    >
                      <Github size={14} />
                      Source
                    </a>
                    <a
                      href={featuredPost.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2563EB] group-hover:gap-2.5 transition-all"
                    >
                      Read Guide
                      <ExternalLink size={14} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right — cover image */}
              <div className="hidden lg:block lg:col-span-2 relative overflow-hidden bg-[#0F172A]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 bg-[#2563EB] text-white text-xs font-bold rounded-full shadow-lg">
                    Featured
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── REMAINING GUIDES ────────────────── */}
        {restPosts.length > 0 && (
          <div className="pb-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {restPosts.map((post) => (
                <motion.div key={post.slug} variants={itemVariants}>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group h-full"
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.25 }}
                      className="h-full bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:border-[#2563EB]/30 transition-all duration-300 flex flex-col"
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0F172A]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <span className="self-start mb-4 text-xs font-semibold px-2.5 py-1 rounded-full border bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]">
                          DevOps
                        </span>

                        <h3 className="text-lg font-bold text-[#0F172A] mb-3 line-clamp-2 group-hover:text-[#2563EB] transition-colors font-sora leading-snug flex-grow">
                          {post.title}
                        </h3>

                        <p className="text-[#475569] text-sm leading-relaxed line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>

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
                            <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* ─── MORE ARTICLES BANNER ──────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 bg-gradient-to-r from-[#DBEAFE] to-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-8 sm:p-10 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-3">
            More Guides Coming Soon
          </p>
          <p className="text-[#0F172A] text-lg font-semibold mb-2">
            I write in-depth, practical guides on deployment, infrastructure, and backend engineering.
          </p>
          <p className="text-[#475569] text-sm max-w-xl mx-auto mb-6">
            Documented from real production setups — clear, tested, and built to be followed start to finish.
          </p>
          <a
            href="https://github.com/CaptainArslan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
          >
            See all repos on GitHub
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
