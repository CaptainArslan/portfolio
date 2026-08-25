'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, CheckCircle2, BarChart3, Clock, Target } from 'lucide-react'

/* ============================================
   ANIMATION VARIANTS
   ============================================ */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

/* ============================================
   SAMPLE DATA
   ============================================ */
const SAMPLE_JD =
  "We're looking for a Senior Backend Engineer with 3+ years of experience in PHP/Laravel. You'll design and build RESTful APIs, optimize MySQL queries, integrate payment gateways, and manage AWS infrastructure. Experience with Redis, CI/CD pipelines, and CRM integrations is a plus."

const EXAMPLE_PROMPTS = [
  'Senior Backend Engineer (Laravel)',
  'PHP Developer — FinTech',
  'API Architect — SaaS',
  'Full-Stack PHP Engineer',
]

const MOCK_MATCHED_SKILLS = [
  'Laravel / PHP',
  'REST API Design',
  'MySQL Optimization',
  'Redis & Caching',
  'AWS Infrastructure',
  'Payment Integration',
  'CI/CD Workflows',
  'GoHighLevel CRM',
]

const MOCK_PROJECTS = [
  {
    name: 'PayYourCell',
    desc: 'Payment platform — Laravel, GoHighLevel, AWS',
    slug: 'payyourcell',
    category: 'Payment',
  },
  {
    name: 'loom.dreamhoster.com',
    desc: 'Video queue processing — Redis, Laravel',
    slug: 'loom-dreamhoster',
    category: 'Video',
  },
  {
    name: 'Noomerik.com',
    desc: 'REST API ecosystem — PHP, MySQL, AWS',
    slug: 'noomerik',
    category: 'Platform',
  },
]

/* ============================================
   CIRCULAR PROGRESS COMPONENT
   ============================================ */
function CircularScore({ score, animate: shouldAnimate }: { score: number; animate: boolean }) {
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference
  const ringRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    if (!shouldAnimate || !ringRef.current) return
    const el = ringRef.current
    el.style.strokeDashoffset = String(circumference)
    const timeout = setTimeout(() => {
      el.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(0.22, 1, 0.36, 1)'
      el.style.strokeDashoffset = String(offset)
    }, 100)
    return () => clearTimeout(timeout)
  }, [shouldAnimate, circumference, offset])

  return (
    <div className="relative w-36 h-36 mx-auto">
      <svg className="-rotate-90" width="144" height="144" viewBox="0 0 144 144">
        {/* Track */}
        <circle
          cx="72"
          cy="72"
          r={radius}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="8"
        />
        {/* Progress */}
        <circle
          ref={ringRef}
          cx="72"
          cy="72"
          r={radius}
          fill="none"
          stroke="#2563EB"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-[#0F172A] font-sora">{score}%</span>
        <span className="text-xs text-[#94A3B8] font-medium mt-0.5">Match</span>
      </div>
    </div>
  )
}

/* ============================================
   WHY USE THIS CARDS
   ============================================ */
const WHY_CARDS = [
  {
    icon: Target,
    title: 'Honest Assessment',
    desc: 'Based on real project experience, not inflated claims.',
  },
  {
    icon: BarChart3,
    title: 'Specific Stack Match',
    desc: 'Laravel, PHP, MySQL, Redis, AWS — not generic.',
  },
  {
    icon: Clock,
    title: 'Fast Screening',
    desc: 'Cut to what matters in seconds.',
  },
]

/* ============================================
   MAIN PAGE
   ============================================ */
export default function FitCheckPage() {
  const [jobDescription, setJobDescription] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) return
    setIsAnalyzing(true)
    setShowResult(false)
    await new Promise<void>((r) => setTimeout(r, 2400))
    setIsAnalyzing(false)
    setShowResult(true)
  }

  const handleExampleClick = (text: string) => {
    setJobDescription(text)
    textareaRef.current?.focus()
  }

  const handleReset = () => {
    setJobDescription('')
    setShowResult(false)
    setIsAnalyzing(false)
    setTimeout(() => textareaRef.current?.focus(), 0)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ─── PAGE HEADER ─────────────────────────────── */}
      <section className="bg-[#F1F5F9] border-b border-[#E2E8F0] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#DBEAFE] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold rounded-full uppercase tracking-wide">
                <Sparkles size={12} />
                Smart Fit Analysis
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#0F172A] mb-5 leading-tight font-sora"
            >
              Does My Profile Match<br className="hidden sm:block" /> Your Role?
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#475569] max-w-2xl mb-6"
            >
              Paste a job description and see how my backend engineering background aligns
              with your requirements — in seconds.
            </motion.p>

            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F1F5F9] border border-[#E2E8F0] text-[#94A3B8] text-xs font-medium rounded-lg">
                Frontend demo · AI scoring coming in Phase 2
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* ─── INPUT SECTION ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-card">
            <label className="block text-sm font-semibold text-[#0F172A] mb-3">
              Paste Job Description
            </label>
            <textarea
              ref={textareaRef}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              rows={8}
              placeholder="Paste the full job description here — requirements, responsibilities, tech stack..."
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 text-[#0F172A] placeholder-[#94A3B8] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] focus:bg-white text-sm leading-relaxed" style={{resize: 'vertical'}}
            />
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs text-[#94A3B8]">
                {jobDescription.length} characters
              </span>
              {jobDescription.length > 0 && (
                <button
                  onClick={() => setJobDescription('')}
                  className="text-xs text-[#94A3B8] hover:text-[#475569] transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Example Prompts */}
          <div className="mt-5">
            <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-3">
              Try an example:
            </p>
            <div className="flex flex-wrap gap-2">
              {EXAMPLE_PROMPTS.map((prompt, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleExampleClick(SAMPLE_JD)}
                  className="px-4 py-2 bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] text-[#475569] text-sm font-medium rounded-lg transition-all duration-200 shadow-sm"
                >
                  {prompt}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Analyze Button */}
          <motion.button
            whileHover={!jobDescription.trim() || isAnalyzing ? {} : { y: -2 }}
            whileTap={!jobDescription.trim() || isAnalyzing ? {} : { scale: 0.98 }}
            onClick={handleAnalyze}
            disabled={!jobDescription.trim() || isAnalyzing}
            className={`w-full mt-6 py-4 px-6 rounded-xl font-semibold text-base transition-all duration-200 flex items-center justify-center gap-3 ${
              !jobDescription.trim() || isAnalyzing
                ? 'bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed'
                : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-lg hover:shadow-xl'
            }`}
          >
            {isAnalyzing ? (
              <>
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-2 h-2 bg-[#94A3B8] rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
                <span>Analyzing your requirements…</span>
              </>
            ) : (
              <>
                <span>Analyze Fit</span>
                <ArrowRight size={18} />
              </>
            )}
          </motion.button>
        </motion.div>

        {/* ─── LOADING STATE ───────────────────────── */}
        <AnimatePresence>
          {isAnalyzing && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-10"
            >
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-card">
                <div className="space-y-4 animate-pulse">
                  <div className="h-10 bg-[#F1F5F9] rounded-lg w-2/3" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-[#F1F5F9] rounded-lg" />
                    <div className="h-20 bg-[#F1F5F9] rounded-lg" />
                  </div>
                  <div className="h-16 bg-[#F1F5F9] rounded-lg" />
                  <div className="h-8 bg-[#F1F5F9] rounded-lg w-1/2" />
                </div>
                <p className="text-center text-[#94A3B8] text-sm mt-8">
                  Matching your requirements against my profile…
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── RESULT CARD ─────────────────────────── */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10"
            >
              <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-card-hover">
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]" />

                <div className="p-8 sm:p-10">
                  {/* Score Banner */}
                  <div className="text-center mb-10">
                    <CircularScore score={94} animate={showResult} />
                    <div className="mt-4">
                      <h3 className="text-2xl font-bold text-[#0F172A] font-sora mb-1">
                        Strong Match
                      </h3>
                      <p className="text-[#475569] text-sm max-w-sm mx-auto">
                        Your requirements align closely with my backend engineering expertise.
                      </p>
                    </div>
                  </div>

                  {/* Two-column grid */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-[#E2E8F0]">
                    {/* Matched Skills */}
                    <div>
                      <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-4">
                        Matched Skills
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {MOCK_MATCHED_SKILLS.map((skill, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#DBEAFE] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-semibold rounded-lg"
                          >
                            <CheckCircle2 size={11} />
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Relevant Projects */}
                    <div>
                      <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-4">
                        Relevant Projects
                      </p>
                      <div className="space-y-3">
                        {MOCK_PROJECTS.map((project, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            className="flex items-start gap-3 p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl hover:border-[#2563EB] transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#DBEAFE] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-[#2563EB] text-xs font-bold">
                                {project.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                                {project.name}
                              </p>
                              <p className="text-xs text-[#94A3B8] mt-0.5">{project.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mb-8">
                    <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-3">
                      Summary
                    </p>
                    <p className="text-[#475569] leading-relaxed text-sm">
                      Based on the job requirements, my 5+ years in Laravel backend development,
                      payment gateway integrations, and AWS infrastructure deployments closely
                      match what you&apos;re looking for. I have direct, production-proven experience
                      building the exact systems this role requires.
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Link href="/projects">
                      <motion.div
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 px-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold rounded-xl transition-all duration-200 text-center shadow-sm flex items-center justify-center gap-2"
                      >
                        View Full Projects
                        <ArrowRight size={14} />
                      </motion.div>
                    </Link>
                    <Link href="/contact">
                      <motion.div
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 px-4 bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB] text-[#0F172A] hover:text-[#2563EB] text-sm font-semibold rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-2"
                      >
                        Get In Touch
                        <ArrowRight size={14} />
                      </motion.div>
                    </Link>
                  </div>

                  {/* Reset */}
                  <button
                    onClick={handleReset}
                    className="w-full mt-4 py-2.5 text-sm text-[#94A3B8] hover:text-[#475569] transition-colors font-medium"
                  >
                    ← Analyze Another Role
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── WHY USE THIS (shown when no result) ─── */}
        {!showResult && !isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4"
          >
            <p className="text-center text-[#94A3B8] text-xs font-semibold uppercase tracking-widest mb-6">
              Why use this?
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {WHY_CARDS.map((card, idx) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="p-6 bg-white border border-[#E2E8F0] rounded-2xl text-center hover:border-[#2563EB] hover:shadow-card-hover transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 mx-auto mb-4 bg-[#DBEAFE] rounded-xl flex items-center justify-center group-hover:bg-[#2563EB] transition-colors duration-300">
                      <Icon
                        size={18}
                        className="text-[#2563EB] group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-[#0F172A] mb-2 text-sm font-sora">
                      {card.title}
                    </h4>
                    <p className="text-xs text-[#475569] leading-relaxed">{card.desc}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* Subtle note */}
            <p className="text-center text-xs text-[#94A3B8] mt-8">
              Results are based on a mock analysis · Real AI scoring arrives in Phase 2
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
