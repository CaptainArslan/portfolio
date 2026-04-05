'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from '@/lib/animations';

// SVG Icons
const InterconnectedNodesIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="10" cy="20" r="3" fill="currentColor" />
    <circle cx="20" cy="10" r="3" fill="currentColor" />
    <circle cx="30" cy="20" r="3" fill="currentColor" />
    <line x1="13" y1="18" x2="17" y2="12" stroke="currentColor" strokeWidth="1.5" />
    <line x1="23" y1="12" x2="27" y2="18" stroke="currentColor" strokeWidth="1.5" />
    <line x1="20" y1="13" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const LightningChartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 5L25 15H20V30L15 20H20V5Z" fill="currentColor" opacity="0.3" />
    <path d="M20 5L25 15H20V30L15 20H20V5Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <polyline points="8,25 15,18 22,28 28,15" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const PuzzlePiecesIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="5" y="5" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="23" y="5" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="5" y="23" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="23" y="23" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M17 11H23M29 17V23M11 17V23M17 29H23" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const GraduationCapIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M8 18L20 10L32 18V20H8V18Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="12" y="20" width="16" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M20 30V33" stroke="currentColor" strokeWidth="1.5" />
    <path d="M20 33H25" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const CheckmarkIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M14 20L18 24L26 16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

export default function About() {
  // Experience data
  const experience = [
    {
      id: 1,
      dateRange: 'Sep 2023 – Present',
      company: 'Hegemonic Inc',
      location: 'Remote, Houston TX',
      title: 'Back-End Engineer',
      achievements: [
        'Built PayYourCell payment platform with GoHighLevel CRM',
        'SQL optimization reduced response times by 25%',
      ],
      tech: ['Laravel', 'PHP', 'GoHighLevel', 'MySQL', 'AWS'],
    },
    {
      id: 2,
      dateRange: 'Apr 2024 – Oct 2024',
      company: 'CodeCapital',
      location: 'Gujranwala',
      title: 'Back-End PHP & Laravel Engineer',
      achievements: [
        'Achieved zero-downtime deployments under peak traffic',
        '60% query improvement via Redis caching',
      ],
      tech: ['PHP', 'Laravel', 'MySQL', 'Redis', 'AWS', 'CI/CD'],
    },
    {
      id: 3,
      dateRange: 'Dec 2023 – Apr 2024',
      company: 'HexaTech Solution',
      location: 'Lahore',
      title: 'Software Engineer',
      achievements: [
        'Built loom.dreamhoster.com with async background processing',
        'Custom payment gateway boosted success 45%',
      ],
      tech: ['Laravel', 'PHP', 'MySQL', 'AWS', 'Redis'],
    },
    {
      id: 4,
      dateRange: 'Nov 2022 – Apr 2024',
      company: 'Appalo Inc',
      location: 'Lahore',
      title: 'Full-Stack Developer',
      achievements: [
        'Real-time location tracking system',
        'Push notification infrastructure',
      ],
      tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'jQuery'],
    },
    {
      id: 5,
      dateRange: 'Apr 2023 – Dec 2023',
      company: 'UnitSol',
      location: 'Gujranwala',
      title: 'Software Engineer',
      achievements: [
        'Speedo Training School digital system',
        '50% system performance improvement',
      ],
      tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
    },
    {
      id: 6,
      dateRange: 'May 2022 – Jan 2023',
      company: 'DevZone Solutions',
      location: 'Lahore',
      title: 'Full-Stack Developer',
      achievements: [
        'Built Ylaa.com with 30% faster page loads',
        '2x user capacity improvement',
      ],
      tech: ['Laravel', 'PHP', 'MySQL', 'jQuery'],
    },
    {
      id: 7,
      dateRange: 'Dec 2022 – Apr 2023',
      company: 'Syntax Lab',
      location: 'Gujranwala',
      title: 'Full-Stack Developer',
      achievements: [
        'Delivered scalable web platform with optimized data layer',
        'High-performance API architecture',
      ],
      tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
    },
    {
      id: 8,
      dateRange: 'Sep 2021 – Apr 2022',
      company: 'SoftShack (Pvt.) Ltd.',
      location: 'Gujranwala',
      title: 'Full-Stack Engineer',
      achievements: [
        'Enterprise software features and API integration layer',
        'Complex system architecture design',
      ],
      tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    },
    {
      id: 9,
      dateRange: 'Dec 2021 – Apr 2022',
      company: 'PSEB',
      location: 'Gujranwala',
      title: 'Web Developer',
      achievements: [
        'Government portal development and deployment',
        'Secure authentication and user management',
      ],
      tech: ['PHP', 'HTML', 'CSS', 'JavaScript'],
    },
  ];

  // Philosophy cards
  const philosophyCards = [
    {
      title: 'Systems Before Code',
      description:
        'Architecture comes first. I design clean separation of concerns, proper middleware layers, and extensible API contracts before writing a single line.',
      icon: <InterconnectedNodesIcon />,
    },
    {
      title: 'Performance is a Feature',
      description:
        'From Redis caching to query indexing, I treat performance metrics as requirements — not afterthoughts. Every millisecond saved is revenue protected.',
      icon: <LightningChartIcon />,
    },
    {
      title: 'Integration as First-Class',
      description:
        'Payment gateways, CRM platforms, and third-party APIs aren't bolt-ons. They're core citizens in the systems I design — reliable, observable, recoverable.',
      icon: <PuzzlePiecesIcon />,
    },
  ];

  // Tech stack categories
  const techStack = {
    'Backend': ['PHP', 'Laravel', 'REST API', 'Middleware', 'JWT Authentication'],
    'Database': ['MySQL', 'Redis', 'Query Optimization', 'Database Indexing', 'Eloquent ORM'],
    'Cloud': ['AWS', 'CI/CD Pipelines', 'Git', 'Linux', 'Composer'],
    'Integrations': ['GoHighLevel CRM', 'Payment Gateways', 'Webhook Management', 'REST Clients'],
    'Frontend Support': ['JavaScript', 'jQuery', 'Bootstrap', 'HTML/CSS', 'Blade Templates'],
  };

  // Education & certifications
  const credentials = [
    {
      title: 'BS Computer Science',
      institution: 'University of Sargodha',
      period: '2017 – 2021',
      description: 'Studied computer science fundamentals, data structures, algorithms, and software engineering.',
      icon: <GraduationCapIcon />,
    },
    {
      title: 'CSDA Certification',
      institution: 'Certified Software Development Associate',
      description: 'Industry certification in software development methodologies and best practices.',
      icon: <CheckmarkIcon />,
    },
    {
      title: 'Web Development',
      institution: 'Professional Certification',
      description: 'Full-stack web development with PHP, MySQL, and JavaScript ecosystem.',
      icon: <CheckmarkIcon />,
    },
  ];

  // Section header component
  const SectionHeader = ({
    eyebrow,
    title,
    subtitle,
  }: {
    eyebrow: string;
    title: string;
    subtitle?: string;
  }) => (
    <motion.div
      className="text-center mb-16"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={viewportOnce}
    >
      <motion.p
        className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4"
        variants={fadeInUp}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4"
        style={{ fontFamily: 'var(--font-sora)' }}
        variants={fadeInUp}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p className="text-lg text-[#475569] max-w-3xl mx-auto" variants={fadeInUp}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ============================================================
          SECTION 1: PAGE HERO BANNER
          ============================================================ */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left side (60%) */}
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
                className="text-5xl sm:text-6xl font-bold text-[#0F172A] mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-sora)' }}
                variants={fadeInUp}
              >
                Engineered for Backend. Built for Scale.
              </motion.h1>

              <motion.p
                className="text-lg text-[#475569] mb-8 leading-relaxed max-w-2xl"
                style={{ fontFamily: 'var(--font-inter)' }}
                variants={fadeInUp}
              >
                I'm Muhammad Arslan, a Back-End Engineer with 3+ years designing secure, high-performance
                systems for international tech companies. I specialize in Laravel, PHP, MySQL, and AWS — systems
                that handle real traffic, real payments, and real data.
              </motion.p>

              <motion.div className="flex flex-wrap gap-3" variants={fadeInUp}>
                <span className="inline-block px-4 py-2 rounded-full bg-[#DBEAFE] text-[#2563EB] text-sm font-semibold">
                  📍 Gujranwala, Pakistan
                </span>
                <span className="inline-block px-4 py-2 rounded-full bg-[#F1F5F9] text-[#475569] text-sm font-semibold border border-[#E2E8F0]">
                  Available for Remote Work
                </span>
              </motion.div>
            </motion.div>

            {/* Right side (40%) - Stat cards */}
            <motion.div
              className="lg:col-span-1 space-y-4"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {[
                { number: '3+', label: 'Years Experience' },
                { number: '9', label: 'Companies Served' },
                { number: '4', label: 'Production Systems' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-lg transition-all"
                  variants={scaleIn}
                  whileHover={{ y: -4 }}
                >
                  <div
                    className="text-3xl font-bold text-[#2563EB] mb-1"
                    style={{ fontFamily: 'var(--font-sora)' }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-[#94A3B8]">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative background element */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#DBEAFE] rounded-full opacity-10 blur-3xl -z-10"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </section>

      {/* ============================================================
          SECTION 2: ENGINEERING PHILOSOPHY
          ============================================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="My Approach" title="How I Think About Systems" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={viewportOnce}
          >
            {philosophyCards.map((card, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-xl transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {card.icon}
                </motion.div>

                <h3
                  className="text-xl font-bold text-[#0F172A] mb-4"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  {card.title}
                </h3>

                <p className="text-[#475569] leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: WORK EXPERIENCE TIMELINE
          ============================================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Work History"
            title="Companies I've Built Systems For"
            subtitle="A chronological journey through production systems, scaling challenges, and engineered solutions."
          />

          <div className="relative">
            {/* Timeline line - desktop only */}
            <div className="hidden lg:block absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2563EB] to-[#DBEAFE]" />

            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={viewportOnce}
            >
              {experience.map((exp, idx) => (
                <motion.div key={exp.id} className="relative" variants={fadeInUp}>
                  {/* Timeline dot - desktop only */}
                  <div className="hidden lg:block absolute left-0 top-4 w-16 flex justify-center pt-1">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-[#2563EB] ring-4 ring-[#FFFFFF] shadow-md"
                      whileHover={{ scale: 1.5 }}
                    />
                  </div>

                  {/* Content card */}
                  <motion.div
                    className="lg:ml-32 p-6 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -2 }}
                  >
                    {/* Date badge */}
                    <div className="inline-block px-3 py-1 rounded-full bg-[#F1F5F9] text-[#94A3B8] text-xs font-semibold mb-3">
                      {exp.dateRange}
                    </div>

                    {/* Company & location */}
                    <h3
                      className="text-xl font-bold text-[#0F172A] mb-1"
                      style={{ fontFamily: 'var(--font-sora)' }}
                    >
                      {exp.company}
                    </h3>

                    <p className="text-xs text-[#94A3B8] mb-3">{exp.location}</p>

                    {/* Role title */}
                    <p className="text-sm font-semibold text-[#2563EB] mb-4">{exp.title}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, aidx) => (
                        <li key={aidx} className="flex gap-3 text-sm text-[#475569]">
                          <span className="text-[#2563EB] font-bold flex-shrink-0">→</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, tidx) => (
                        <span
                          key={tidx}
                          className="px-3 py-1 rounded-full bg-[#DBEAFE] text-[#2563EB] text-xs font-semibold"
                        >
                          {tech}
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

      {/* ============================================================
          SECTION 4: TECH STACK GRID
          ============================================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Tech Stack"
            title="Tools I Use in Production"
            subtitle="A curated selection of technologies I work with daily."
          />

          <motion.div
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={viewportOnce}
          >
            {Object.entries(techStack).map(([category, tools], idx) => (
              <motion.div key={idx} className="flex flex-col sm:flex-row gap-8" variants={fadeInUp}>
                {/* Category label */}
                <div className="sm:w-48 flex-shrink-0">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8]"
                  >
                    {category}
                  </p>
                </div>

                {/* Pills */}
                <div className="flex-1 flex flex-wrap gap-3">
                  {tools.map((tool, tidx) => (
                    <motion.button
                      key={tidx}
                      className="px-4 py-2 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] text-[#475569] text-sm font-medium hover:bg-[#DBEAFE] hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {tool}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: EDUCATION & CERTIFICATIONS
          ============================================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Credentials"
            title="Education & Certifications"
            subtitle="Continuous learning and professional development"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={viewportOnce}
          >
            {credentials.map((cred, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 rounded-lg bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {cred.icon}
                </motion.div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-[#0F172A] mb-2"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  {cred.title}
                </h3>

                {/* Institution */}
                <p className="text-sm text-[#2563EB] font-semibold mb-3">{cred.institution}</p>

                {/* Period */}
                {cred.period && <p className="text-xs text-[#94A3B8] mb-4">{cred.period}</p>}

                {/* Description */}
                <p className="text-sm text-[#475569] leading-relaxed">{cred.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <motion.section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#2563EB] to-[#1e40af] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={viewportOnce}
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl -z-10"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-sora)' }}
            variants={fadeInUp}
          >
            Ready to scale your backend?
          </motion.h2>

          <motion.p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto" variants={fadeInUp}>
            Let's discuss how I can help you build systems that handle real traffic, real payments, and real growth.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link href="/contact">
              <motion.button
                className="inline-block px-8 py-4 bg-white text-[#2563EB] font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Conversation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
