'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Download, MapPin, ArrowRight } from 'lucide-react';
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from '@/lib/animations';

/* ============================================
   SVG ICONS
   ============================================ */
const NodesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
    <circle cx="10" cy="20" r="3" fill="currentColor" />
    <circle cx="20" cy="10" r="3" fill="currentColor" />
    <circle cx="30" cy="20" r="3" fill="currentColor" />
    <circle cx="20" cy="30" r="3" fill="currentColor" />
    <line x1="13" y1="18" x2="17" y2="12" stroke="currentColor" strokeWidth="1.5" />
    <line x1="23" y1="12" x2="27" y2="18" stroke="currentColor" strokeWidth="1.5" />
    <line x1="27" y1="22" x2="23" y2="28" stroke="currentColor" strokeWidth="1.5" />
    <line x1="17" y1="28" x2="13" y2="22" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const LightningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
    <path d="M22 5L12 22H20L18 35L28 18H20L22 5Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
  </svg>
);

const PuzzleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
    <rect x="5" y="5" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="23" y="5" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="5" y="23" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="23" y="23" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M17 11H23M29 17V23M11 17V23M17 29H23" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const GradCapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
    <path d="M8 18L20 10L32 18V20H8V18Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="12" y="20" width="16" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M32 18V26M20 30V34M17 34H23" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13 20L17 24L27 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/* ============================================
   DATA
   ============================================ */
const EXPERIENCE = [
  {
    dateRange: 'Sep 2023 – Present',
    company: 'Hegemonic Inc',
    location: 'Remote · Houston TX',
    title: 'Back-End Engineer',
    current: true,
    achievements: [
      'Architected PayYourCell payment platform with GoHighLevel CRM automation, reducing client onboarding by 50%',
      'Built encrypted middleware layers ensuring PCI DSS compliance for thousands of daily transactions',
      'SQL query optimization and strategic indexing achieving 25% reduction in API response times',
    ],
    tech: ['Laravel', 'PHP', 'GoHighLevel', 'MySQL', 'AWS', 'Redis'],
  },
  {
    dateRange: 'Apr 2024 – Oct 2024',
    company: 'CodeCapital',
    location: 'Gujranwala',
    title: 'Back-End PHP & Laravel Engineer',
    current: false,
    achievements: [
      'Maintained zero-downtime deployments under peak traffic serving 50K+ daily active users',
      'Implemented Redis caching layer reducing database load by 60% and response times from 800ms to 300ms',
      'Architected queue-based job processing system handling 10K+ background jobs daily',
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'Redis', 'AWS', 'CI/CD'],
  },
  {
    dateRange: 'Dec 2023 – Apr 2024',
    company: 'HexaTech Solution',
    location: 'Lahore',
    title: 'Software Engineer',
    current: false,
    achievements: [
      'Built loom.dreamhoster.com with async background processing for video encoding',
      'Custom payment gateway integration boosted transaction success rate by 45%',
      'Redis-powered queue system managing thousands of concurrent video processing jobs',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'AWS', 'Redis', 'Webhooks'],
  },
  {
    dateRange: 'Nov 2022 – Apr 2024',
    company: 'Appalo Inc',
    location: 'Lahore',
    title: 'Full-Stack Developer',
    current: false,
    achievements: [
      'Real-time location tracking system with geofencing for 5K+ concurrent users',
      'Firebase push notification system delivering 100K+ notifications daily at 95% rate',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'jQuery', 'Firebase'],
  },
  {
    dateRange: 'Apr 2023 – Dec 2023',
    company: 'UnitSol',
    location: 'Gujranwala',
    title: 'Software Engineer',
    current: false,
    achievements: [
      'Delivered Speedo Training School digital management system, improving efficiency by 50%',
      'Dashboard load time reduced from 2.5s to 1.2s through query optimization and caching',
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
  },
  {
    dateRange: 'May 2022 – Jan 2023',
    company: 'DevZone Solutions',
    location: 'Lahore',
    title: 'Full-Stack Developer',
    current: false,
    achievements: [
      'Built Ylaa.com achieving 30% improvement in page load times',
      'Advanced caching strategy supporting 2× increase in concurrent users without infrastructure cost',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'jQuery'],
  },
  {
    dateRange: 'Dec 2022 – Apr 2023',
    company: 'Syntax Lab',
    location: 'Gujranwala',
    title: 'Full-Stack Developer',
    current: false,
    achievements: [
      'Delivered scalable web platform with optimized data layer and high-performance API architecture',
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
  },
  {
    dateRange: 'Sep 2021 – Apr 2022',
    company: 'SoftShack (Pvt.) Ltd.',
    location: 'Gujranwala',
    title: 'Full-Stack Engineer',
    current: false,
    achievements: [
      'Enterprise software features and API integration layer for business operations platform',
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
  },
  {
    dateRange: 'Dec 2021 – Apr 2022',
    company: 'PSEB',
    location: 'Gujranwala',
    title: 'Web Developer',
    current: false,
    achievements: [
      'Government portal development with secure authentication and user management systems',
    ],
    tech: ['PHP', 'HTML', 'CSS', 'JavaScript'],
  },
];

const PHILOSOPHY = [
  {
    title: 'Systems Before Code',
    description:
      'Architecture comes first. I design clean separation of concerns, proper middleware layers, and extensible API contracts before writing a single line. Code is the implementation of a good system — not the system itself.',
    icon: <NodesIcon />,
  },
  {
    title: 'Performance is a Feature',
    description:
      'From Redis caching to query indexing, I treat performance metrics as first-class requirements — not afterthoughts. Every millisecond saved is revenue protected and user experience improved.',
    icon: <LightningIcon />,
  },
  {
    title: 'Integration as First-Class',
    description:
      'Payment gateways, CRM platforms, and third-party APIs aren\'t bolt-ons. They\'re core citizens in the systems I design — reliable, observable, and recoverable under failure.',
    icon: <PuzzleIcon />,
  },
];

const TECH_STACK: Record<string, string[]> = {
  'Backend': ['PHP', 'Laravel', 'REST API', 'Middleware', 'JWT Auth', 'OOP Design Patterns'],
  'Database': ['MySQL', 'Redis', 'Query Optimization', 'Indexing', 'Eloquent ORM'],
  'Cloud': ['AWS EC2/RDS/S3', 'CI/CD', 'Git', 'Docker', 'Linux', 'Nginx'],
  'Integrations': ['GoHighLevel CRM', 'Payment Gateways', 'Webhook Management', 'REST Clients'],
};

const CREDENTIALS = [
  {
    title: 'BS Computer Science',
    institution: 'University of Sargodha',
    period: '2017 – 2021',
    description: 'Computer science fundamentals, data structures, algorithms, and software engineering.',
    icon: <GradCapIcon />,
  },
  {
    title: 'CSDA Certification',
    institution: 'Certified Software Development Associate',
    description: 'Industry certification in software development methodologies and best practices.',
    icon: <CheckCircleIcon />,
  },
  {
    title: 'Web Development',
    institution: 'Professional Certification',
    description: 'Full-stack web development with PHP, MySQL, and JavaScript ecosystem.',
    icon: <CheckCircleIcon />,
  },
];

/* ============================================
   SECTION HEADER COMPONENT
   ============================================ */
function SectionHeader({
  eyebrow, title, subtitle,
}: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      className="text-center mb-16"
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={viewportOnce}
    >
      <motion.p
        className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4"
        variants={fadeInUp}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4 font-sora"
        variants={fadeInUp}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto" variants={fadeInUp}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

/* ============================================
   PAGE COMPONENT
   ============================================ */
export default function About() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* ─── HERO BANNER ─────────────────────────── */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF] overflow-hidden">
        {/* Decorative blob */}
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.06) 0%, transparent 70%)',
          }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left (60%) */}
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p
                className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4"
                variants={fadeInUp}
              >
                About Me
              </motion.p>

              <motion.h1
                className="text-5xl sm:text-6xl font-bold text-[#0F172A] mb-6 leading-tight font-sora"
                variants={fadeInUp}
              >
                Engineered for Backend.<br />Built for Scale.
              </motion.h1>

              <motion.p
                className="text-lg text-[#475569] mb-8 leading-relaxed max-w-2xl"
                variants={fadeInUp}
              >
                I&apos;m Muhammad Arslan — a Back-End Engineer with 3+ years designing secure,
                high-performance systems for international tech companies. I specialize in
                Laravel, PHP, MySQL, and AWS — systems that handle real traffic, real
                payments, and real data.
              </motion.p>

              <motion.div className="flex flex-wrap gap-3 mb-8" variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBEAFE] text-[#2563EB] text-sm font-semibold">
                  <MapPin size={13} />
                  Gujranwala, Pakistan
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DCFCE7] text-[#16A34A] text-sm font-semibold border border-[#BBF7D0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                  Available for Remote Work
                </span>
              </motion.div>

              {/* CTAs */}
              <motion.div className="flex flex-wrap gap-3" variants={fadeInUp}>
                <Link href="/contact">
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-xl shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    Get In Touch
                    <ArrowRight size={15} />
                  </motion.div>
                </Link>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] text-[#475569] font-semibold rounded-xl transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    <Download size={14} />
                    Download Resume
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>

            {/* Right — Stat cards (40%) */}
            <motion.div
              className="lg:col-span-1 space-y-4"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {[
                { number: '3+', label: 'Years Experience', sub: 'Backend engineering' },
                { number: '9', label: 'Companies Served', sub: 'International & local' },
                { number: '4', label: 'Production Systems', sub: 'Deployed at scale' },
                { number: '99.9%', label: 'Uptime Maintained', sub: 'Across all platforms' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-card-hover transition-all duration-300"
                  variants={scaleIn}
                  whileHover={{ y: -3, x: 3 }}
                >
                  <div className="flex items-baseline gap-2">
                    <div className="text-2xl font-bold text-[#2563EB] font-sora">
                      {stat.number}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0F172A]">{stat.label}</div>
                      <div className="text-xs text-[#94A3B8]">{stat.sub}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── ENGINEERING PHILOSOPHY ──────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="My Approach" title="How I Think About Systems" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-7"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={viewportOnce}
          >
            {PHILOSOPHY.map((card, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-card-hover transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300"
                  whileHover={{ rotate: 8 }}
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 font-sora">
                  {card.title}
                </h3>
                <p className="text-[#475569] leading-relaxed text-sm">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── WORK EXPERIENCE TIMELINE ────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Work History"
            title="Companies I've Built Systems For"
            subtitle="Nine roles across 3+ years — each with measurable backend engineering impact."
          />

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="hidden lg:block absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-[#2563EB] via-[#2563EB]/30 to-transparent" />

            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={viewportOnce}
            >
              {EXPERIENCE.map((exp, idx) => (
                <motion.div key={idx} className="relative" variants={fadeInUp}>
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-0 top-6 items-center justify-center">
                    <div
                      className={`w-[46px] h-[46px] rounded-full flex items-center justify-center border-2 ${
                        exp.current
                          ? 'bg-[#2563EB] border-[#2563EB] shadow-glow'
                          : 'bg-white border-[#E2E8F0]'
                      }`}
                    >
                      <span className={`text-xs font-bold font-sora ${exp.current ? 'text-white' : 'text-[#94A3B8]'}`}>
                        {exp.company.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    className="lg:ml-16 p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/30 hover:shadow-card-hover transition-all duration-300"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-[#0F172A] font-sora">
                            {exp.company}
                          </h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-semibold bg-[#DCFCE7] text-[#16A34A] rounded-full border border-[#BBF7D0]">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-[#2563EB]">{exp.title}</p>
                      </div>
                      <div className="text-right">
                        <div className="inline-block px-3 py-1 rounded-full bg-[#F1F5F9] text-[#475569] text-xs font-semibold">
                          {exp.dateRange}
                        </div>
                        <p className="text-xs text-[#94A3B8] mt-1">{exp.location}</p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((a, aidx) => (
                        <li key={aidx} className="flex gap-2.5 text-sm text-[#475569]">
                          <span className="text-[#2563EB] font-bold flex-shrink-0 mt-0.5">→</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t, tidx) => (
                        <span
                          key={tidx}
                          className="px-2.5 py-1 rounded-full bg-[#DBEAFE] text-[#2563EB] text-xs font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TECH STACK GRID ─────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Tech Stack"
            title="Tools I Use in Production"
            subtitle="Technologies I work with daily across real-world backend systems."
          />

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={viewportOnce}
          >
            {Object.entries(TECH_STACK).map(([category, tools], idx) => (
              <motion.div key={idx} className="flex flex-col sm:flex-row gap-6 sm:gap-10" variants={fadeInUp}>
                {/* Category label */}
                <div className="sm:w-40 flex-shrink-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] pt-2">
                    {category}
                  </p>
                </div>

                {/* Tool pills */}
                <div className="flex-1 flex flex-wrap gap-2">
                  {tools.map((tool, tidx) => (
                    <motion.span
                      key={tidx}
                      whileHover={{ scale: 1.04, y: -1 }}
                      className="px-4 py-2 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] text-[#475569] text-sm font-medium hover:bg-[#DBEAFE] hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-200 cursor-default"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── EDUCATION & CERTIFICATIONS ──────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Credentials"
            title="Education & Certifications"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-7"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={viewportOnce}
          >
            {CREDENTIALS.map((cred, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-card-hover transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center mb-6"
                  whileHover={{ rotate: 8, scale: 1.05 }}
                >
                  {cred.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 font-sora">{cred.title}</h3>
                <p className="text-sm text-[#2563EB] font-semibold mb-1">{cred.institution}</p>
                {cred.period && <p className="text-xs text-[#94A3B8] mb-3">{cred.period}</p>}
                <p className="text-sm text-[#475569] leading-relaxed">{cred.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA SECTION ─────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#2563EB] to-[#1e40af] overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)' }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-5 font-sora"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={viewportOnce}
          >
            Ready to scale your backend?
          </motion.h2>
          <motion.p
            className="text-lg text-blue-100 mb-8 max-w-xl mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={viewportOnce}
          >
            Let&apos;s build systems that handle real traffic, real payments, and real growth.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={viewportOnce}
          >
            <motion.div variants={fadeInUp}>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.04, boxShadow: '0 16px 40px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#2563EB] font-bold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg cursor-pointer"
                >
                  Start a Conversation
                  <ArrowRight size={15} />
                </motion.div>
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/projects">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/60 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-200 cursor-pointer"
                >
                  View My Projects
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
