'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function FitCheckPage() {
  const [jobDescription, setJobDescription] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const progressRingRef = useRef<SVGCircleElement>(null)

  // Circular progress ring animation
  useEffect(() => {
    if (showResult && progressRingRef.current) {
      const circle = progressRingRef.current
      const radius = 54
      const circumference = 2 * Math.PI * radius
      const score = 94
      const offset = circumference - (score / 100) * circumference

      // Animate from full offset to target offset
      let animationFrameId: number
      let currentOffset = circumference
      const startTime = performance.now()
      const duration = 1200 // 1.2s

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        currentOffset = circumference - progress * (circumference - offset)
        circle.style.strokeDashoffset = `${currentOffset}`

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate)
        }
      }

      animationFrameId = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrameId)
    }
  }, [showResult])

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) return

    setIsAnalyzing(true)
    setShowResult(false)
    await new Promise(resolve => setTimeout(resolve, 2500))
    setIsAnalyzing(false)
    setShowResult(true)
  }

  const handleExampleClick = (exampleText: string) => {
    setJobDescription(exampleText)
    if (textareaRef.current) {
      setTimeout(() => {
        textareaRef.current?.focus()
        textareaRef.current?.setSelectionRange(
          exampleText.length,
          exampleText.length
        )
      }, 0)
    }
  }

  const handleReset = () => {
    setJobDescription('')
    setShowResult(false)
    setIsAnalyzing(false)
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }

  const sampleJobDescription =
    "We're looking for a Senior Backend Engineer with 3+ years of experience in PHP/Laravel. You'll design and build RESTful APIs, optimize MySQL queries, integrate payment gateways, and manage AWS infrastructure. Experience with Redis, CI/CD pipelines, and CRM integrations is a plus."

  const examplePrompts = [
    'Senior Backend Engineer (Laravel)',
    'PHP Developer — FinTech',
    'API Architect — SaaS',
    'Full-Stack PHP Engineer',
  ]

  const charCount = jobDescription.length

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation spacing */}
      <div className="h-20" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Section 1: Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
              Smart Fit Analysis
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Does My Profile Match Your Role?
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            Paste a job description and see how my backend engineering background
            aligns with your requirements.
          </p>
          <div className="inline-block px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-lg">
            <span className="text-xs text-slate-400">
              Frontend demo — AI scoring coming soon
            </span>
          </div>
        </motion.div>

        {/* Section 2: Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <label className="block text-sm font-semibold text-slate-900 mb-3">
              Job Description
            </label>
            <textarea
              ref={textareaRef}
              value={jobDescription}
              onChange={e => setJobDescription(e.target.value)}
              rows={8}
              placeholder="Paste the full job description here — requirements, responsibilities, tech stack..."
              className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-900 placeholder-slate-400 resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
            <div className="mt-2 text-sm text-slate-500">
              {charCount} {charCount === 1 ? 'character' : 'characters'}
            </div>
          </div>

          {/* Example Prompts */}
          <div className="mt-6">
            <p className="text-sm font-medium text-slate-400 mb-3">
              Try an example:
            </p>
            <div className="flex flex-wrap gap-2">
              {examplePrompts.map((prompt, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleExampleClick(sampleJobDescription)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-sm rounded-lg transition-colors"
                >
                  {prompt}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Analyze Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAnalyze}
            disabled={!jobDescription.trim() || isAnalyzing}
            className="w-full mt-6 py-3 px-6 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
          >
            {isAnalyzing ? (
              <>
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-100" />
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-200" />
                </div>
                <span>Analyzing your requirements...</span>
              </>
            ) : (
              <>
                Analyze Fit <span>→</span>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Section 3: Loading State */}
        <AnimatePresence>
          {isAnalyzing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mb-12"
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <div className="space-y-4">
                  <div className="h-12 bg-slate-700 rounded-lg animate-pulse" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-slate-700 rounded-lg animate-pulse" />
                    <div className="h-24 bg-slate-700 rounded-lg animate-pulse" />
                  </div>
                  <div className="h-20 bg-slate-700 rounded-lg animate-pulse" />
                </div>
                <p className="text-center text-slate-400 text-sm mt-6 flex items-center justify-center gap-2">
                  <span>Matching your requirements against my profile</span>
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse delay-100" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse delay-200" />
                  </span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section 4: Result Card */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mb-12"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 shadow-2xl">
                {/* Top: Score Banner */}
                <div className="mb-10 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="relative w-36 h-36">
                      <svg
                        className="transform -rotate-90"
                        width="144"
                        height="144"
                        viewBox="0 0 144 144"
                      >
                        {/* Background circle */}
                        <circle
                          cx="72"
                          cy="72"
                          r="54"
                          fill="none"
                          stroke="rgba(148, 163, 184, 0.2)"
                          strokeWidth="8"
                        />
                        {/* Progress circle */}
                        <circle
                          ref={progressRingRef}
                          cx="72"
                          cy="72"
                          r="54"
                          fill="none"
                          stroke="rgb(34, 197, 94)"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray={2 * Math.PI * 54}
                          strokeDashoffset={2 * Math.PI * 54}
                          style={{ transition: 'stroke-dashoffset 1.2s ease-out' }}
                        />
                      </svg>
                      {/* Center text */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold text-green-400">
                          94%
                        </span>
                        <span className="text-xs text-slate-400 mt-1">Match</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">
                    Strong Match
                  </h3>
                  <p className="text-slate-300">
                    Your requirements align closely with my backend expertise
                  </p>
                </div>

                {/* Middle: Two-column grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-10 pb-10 border-b border-slate-700">
                  {/* Left column: Matched Skills */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wide mb-4">
                      Matched Skills
                    </h4>
                    <div className="space-y-2">
                      {[
                        'Laravel / PHP',
                        'REST API Design',
                        'MySQL Optimization',
                        'Redis & Caching',
                        'AWS Infrastructure',
                        'Payment Integration',
                        'CI/CD Workflows',
                      ].map((skill, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="inline-block"
                        >
                          <span className="inline-block px-3 py-1.5 bg-blue-500/20 border border-blue-500/40 text-blue-300 text-sm rounded-lg">
                            <span className="mr-2">✓</span>
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right column: Relevant Projects */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wide mb-4">
                      Relevant Projects
                    </h4>
                    <div className="space-y-3">
                      {[
                        {
                          name: 'PayYourCell',
                          desc: 'Payment platform, Laravel + AWS',
                        },
                        {
                          name: 'loom.dreamhoster.com',
                          desc: 'Queue processing, Redis',
                        },
                        {
                          name: 'Noomerik.com',
                          desc: 'REST API system, PHP',
                        },
                      ].map((project, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="p-3 bg-slate-700/30 border border-slate-600 rounded-lg"
                        >
                          <p className="text-sm font-semibold text-slate-100">
                            {project.name}
                          </p>
                          <p className="text-xs text-slate-400 mt-1">
                            {project.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom: Summary */}
                <div className="mb-8">
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Based on the job requirements, my 3+ years in Laravel backend
                    development, payment gateway integrations, and AWS
                    infrastructure deployments closely match what you're looking
                    for. I have direct experience building the exact systems this
                    role requires.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Link href="/projects">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-2.5 px-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors"
                      >
                        View Full Projects →
                      </motion.button>
                    </Link>
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-2.5 px-4 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold rounded-lg transition-colors"
                      >
                        Get In Touch →
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* Reset button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleReset}
                  className="w-full py-2.5 px-4 border border-slate-600 text-slate-300 hover:text-slate-100 hover:border-slate-500 text-sm font-semibold rounded-lg transition-colors bg-transparent"
                >
                  Analyze Another Role
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section 5: Why Use This */}
        {!showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <p className="text-center text-slate-400 text-sm uppercase tracking-wide mb-8">
              Why use this?
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: '✓',
                  title: 'Honest Assessment',
                  desc: 'Based on real project experience, not inflated claims',
                },
                {
                  icon: '⚡',
                  title: 'Specific Stack Match',
                  desc: 'Laravel, PHP, MySQL, Redis, AWS — not generic',
                },
                {
                  icon: '⏱',
                  title: 'Fast Screening',
                  desc: 'Cut to what matters in seconds',
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg text-center"
                >
                  <div className="text-3xl mb-3">{card.icon}</div>
                  <h4 className="font-semibold text-slate-100 mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-400">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer spacing */}
      <div className="h-12" />
    </div>
  )
}
