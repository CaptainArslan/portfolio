"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Download, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";

/* ============================================
   TYPES
   ============================================ */
interface FormState {
  name: string;
  email: string;
  subject: string;
  type: string;
  message: string;
}

/* ============================================
   FAQ DATA
   ============================================ */
const FAQ_ITEMS = [
  {
    question: "Are you available for remote work?",
    answer:
      "Yes — I work remotely with international clients. My current role at Hegemonic Inc (Houston, TX) is fully remote. I'm comfortable with async communication across time zones.",
  },
  {
    question: "What types of projects do you take on?",
    answer:
      "Laravel/PHP backend systems, REST API design and architecture, payment gateway integrations, GoHighLevel CRM automations, database performance optimization, and AWS infrastructure management.",
  },
  {
    question: "What's your typical response time?",
    answer:
      "Within 24 hours on weekdays. For urgent requirements, mention it in the subject line and I'll prioritize accordingly.",
  },
  {
    question: "Are you open to full-time roles?",
    answer:
      "Yes — I'm open to both full-time remote backend engineering roles and project-based freelance work. Remote-first positions are preferred.",
  },
];

/* ============================================
   ANIMATION VARIANTS
   ============================================ */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/* ============================================
   PAGE COMPONENT
   ============================================ */
export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    type: "Backend Development Project",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setErrorMessage(
          typeof data.error === "string" ? data.error : "Something went wrong. Please try again."
        );
        setStatus("error");
        return;
      }
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        type: "Backend Development Project",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setErrorMessage("Network error. Check your connection and try again.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] focus:bg-white transition-all duration-200 text-sm";

  return (
    <main className="w-full bg-[#F8FAFC] overflow-x-hidden">

      {/* ─── PAGE HEADER ─────────────────────────── */}
      <section className="bg-[#F1F5F9] border-b border-[#E2E8F0] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4"
            >
              Let&apos;s Connect
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#0F172A] mb-5 font-sora leading-tight"
            >
              Available for Backend Engineering Roles
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#475569] mb-6 max-w-2xl"
            >
              Whether you need a Laravel architect, REST API designer, or payment systems
              engineer — I&apos;m open to remote opportunities worldwide.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 items-center">
              <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#16A34A] px-4 py-2 rounded-full text-sm font-semibold border border-[#BBF7D0]">
                <span className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" />
                Currently Available
              </div>
              <a
                href="/Muhammad_Arslan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] text-[#475569] px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              >
                <Download size={13} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── MAIN FORM + INFO ────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* LEFT — Contact Form */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 sm:p-10 shadow-card">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-8 font-sora">
                  Send a Message
                </h2>

                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      className="text-center py-14"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="w-16 h-16 bg-[#DCFCE7] rounded-full flex items-center justify-center mx-auto mb-5">
                        <CheckCircle className="w-8 h-8 text-[#16A34A]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-2 font-sora">
                        Message Sent!
                      </h3>
                      <p className="text-[#475569] mb-6">
                        I&apos;ll get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="text-[#2563EB] hover:text-[#1D4ED8] font-semibold text-sm transition-colors"
                      >
                        ← Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Name + Email row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wide mb-1.5">
                            Name *
                          </label>
                          <input
                            type="text" name="name" value={formData.name}
                            onChange={handleChange} placeholder="Your full name" required
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wide mb-1.5">
                            Email *
                          </label>
                          <input
                            type="email" name="email" value={formData.email}
                            onChange={handleChange} placeholder="your@email.com" required
                            className={inputClass}
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wide mb-1.5">
                          Subject
                        </label>
                        <input
                          type="text" name="subject" value={formData.subject}
                          onChange={handleChange} placeholder="Project, role, or collaboration"
                          className={inputClass}
                        />
                      </div>

                      {/* Inquiry type */}
                      <div>
                        <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wide mb-1.5">
                          Inquiry Type
                        </label>
                        <div className="relative">
                          <select
                            name="type" value={formData.type} onChange={handleChange}
                            className={`${inputClass} appearance-none pr-10`}
                          >
                            <option>Backend Development Project</option>
                            <option>Full-Time Role Opportunity</option>
                            <option>Part-Time / Contract</option>
                            <option>API Consultation</option>
                            <option>General Inquiry</option>
                          </select>
                          <ChevronDown
                            size={15}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wide mb-1.5">
                          Message *
                        </label>
                        <textarea
                          name="message" value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project, the tech stack involved, and what you're looking for…"
                          rows={6} required
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      {status === "error" && errorMessage && (
                        <div
                          role="alert"
                          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                        >
                          {errorMessage}
                        </div>
                      )}

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={status === "loading"}
                        whileHover={status !== "loading" ? { y: -2 } : {}}
                        whileTap={status !== "loading" ? { scale: 0.97 } : {}}
                        className={`w-full py-4 px-8 rounded-xl font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2.5 ${
                          status === "loading"
                            ? "bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed"
                            : "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-lg hover:shadow-xl"
                        }`}
                      >
                        {status === "loading" ? (
                          <>
                            <div className="w-5 h-5 border-2 border-[#94A3B8] border-t-transparent rounded-full animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight size={16} />
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* RIGHT — Info */}
            <div className="lg:col-span-5 space-y-5">

              {/* Contact Info */}
              <motion.div
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-lg font-bold text-[#0F172A] mb-5 font-sora">Contact Info</h3>

                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "am1667099@gmail.com",
                      href: "mailto:am1667099@gmail.com",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+92 317 763 8978",
                      href: "tel:+923177638978",
                    },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#DBEAFE] flex items-center justify-center group-hover:bg-[#2563EB] transition-colors duration-200 flex-shrink-0">
                        <Icon size={16} className="text-[#2563EB] group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div>
                        <p className="text-xs text-[#94A3B8] font-medium">{label}</p>
                        <p className="text-sm font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                          {value}
                        </p>
                      </div>
                    </a>
                  ))}

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#94A3B8] font-medium">Location</p>
                      <p className="text-sm font-semibold text-[#0F172A]">Gujranwala, Pakistan</p>
                      <p className="text-xs text-[#94A3B8]">Remote · Available Worldwide</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Availability */}
              <motion.div
                className="bg-[#DBEAFE] border border-[#BFDBFE] rounded-2xl p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-2.5 h-2.5 bg-[#16A34A] rounded-full animate-pulse" />
                  <h3 className="text-base font-bold text-[#0F172A] font-sora">Currently Available</h3>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed mb-3">
                  Open to remote backend engineering roles, freelance projects, and API consultation worldwide.
                </p>
                <p className="text-xs text-[#64748B] font-medium">
                  Typical response: within 24 hours on weekdays
                </p>
              </motion.div>

              {/* LinkedIn + Resume */}
              <motion.div
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-base font-bold text-[#0F172A] mb-4 font-sora">Connect Online</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/muhammad-arslan-390448213"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm"
                  >
                    <Linkedin size={16} />
                    Connect on LinkedIn
                  </a>
                  <a
                    href="/Muhammad_Arslan_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] text-[#475569] rounded-xl font-semibold text-sm transition-all duration-200"
                  >
                    <Download size={15} />
                    Download Resume PDF
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">
              Quick Answers
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] font-sora">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                className="border border-[#E2E8F0] rounded-2xl overflow-hidden bg-white hover:border-[#2563EB]/30 transition-colors duration-200"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-[#F8FAFC] transition-colors duration-200 text-left"
                >
                  <h3 className="text-sm font-bold text-[#0F172A] pr-4">{item.question}</h3>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={18} className="text-[#2563EB]" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 bg-[#F8FAFC] border-t border-[#E2E8F0]">
                        <p className="text-[#475569] text-sm leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
