"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Check } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  type: string;
  message: string;
}

interface FormStatus {
  state: "idle" | "loading" | "success";
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    type: "Backend Development Project",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ state: "loading" });

    setTimeout(() => {
      setStatus({ state: "success" });
      setFormData({
        name: "",
        email: "",
        subject: "",
        type: "Backend Development Project",
        message: "",
      });

      setTimeout(() => {
        setStatus({ state: "idle" });
      }, 5000);
    }, 1500);
  };

  const faqItems = [
    {
      question: "Are you available for remote work?",
      answer:
        "Yes — I work remotely with international clients. My current role at Hegemonic Inc (Houston, TX) is fully remote. I'm comfortable with async communication across time zones.",
    },
    {
      question: "What projects do you take on?",
      answer:
        "Laravel/PHP backend systems, REST API design and architecture, payment gateway integrations (Stripe, custom gateways), GoHighLevel CRM automations, and database performance optimization.",
    },
    {
      question: "What's your typical response time?",
      answer:
        "Within 24 hours on weekdays. For urgent requirements, mention it in the subject line and I'll prioritize accordingly.",
    },
  ];

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
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="w-full bg-[#F8FAFC] overflow-x-hidden">
      {/* Page Header */}
      <section className="bg-[#F1F5F9] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.p
              className="text-sm font-medium text-[#2563EB] uppercase tracking-widest mb-4"
              variants={itemVariants}
            >
              Let's Connect
            </motion.p>

            {/* Title */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 font-sora"
              variants={itemVariants}
            >
              Available for Backend Engineering Roles
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl text-[#475569] max-w-2xl mx-auto mb-8"
              variants={itemVariants}
            >
              Whether you need a Laravel architect, REST API designer, or payment systems
              engineer — I'm open to remote opportunities worldwide.
            </motion.p>

            {/* Availability Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#16A34A] px-4 py-2 rounded-full font-medium"
              variants={itemVariants}
            >
              <span className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse"></span>
              Currently Available
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* LEFT — Contact Form Card */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-8 font-sora">
                  Send a Message
                </h2>

                {status.state === "success" ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-16 h-16 bg-[#DCFCE7] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-[#16A34A]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                      Message sent!
                    </h3>
                    <p className="text-[#475569] mb-6">
                      I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus({ state: "idle" })}
                      className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-1.5">
                        Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-1.5">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project, role, or collaboration"
                        className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    {/* Inquiry Type Select */}
                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-1.5">
                        Inquiry Type
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-200 appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23475569' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                          backgroundPosition: "right 0.5rem center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "1.5em 1.5em",
                          paddingRight: "2.5rem",
                        }}
                      >
                        <option>Backend Development Project</option>
                        <option>Full-Time Role Opportunity</option>
                        <option>Part-Time/Contract</option>
                        <option>API Consultation</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-1.5">
                        Message*
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, the tech stack involved, and what you're looking for..."
                        rows={6}
                        required
                        className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={status.state === "loading"}
                      whileHover={status.state !== "loading" ? { y: -2 } : {}}
                      whileTap={status.state !== "loading" ? { scale: 0.98 } : {}}
                      className={`w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                        status.state === "loading"
                          ? "bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed"
                          : "bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-lg hover:shadow-xl"
                      }`}
                    >
                      {status.state === "loading" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#94A3B8] border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>Send Message →</>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* RIGHT — Info Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Info Card */}
              <motion.div
                className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-lg font-bold text-[#0F172A] mb-6 font-sora">
                  Contact Info
                </h3>

                <div className="space-y-5">
                  {/* Email */}
                  <a
                    href="mailto:am1667099@gmail.com"
                    className="flex items-center gap-3 text-[#475569] hover:text-[#2563EB] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#DBEAFE] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                      <Mail className="w-5 h-5 text-[#2563EB] group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#94A3B8]">Email</p>
                      <p className="font-medium text-[#0F172A]">am1667099@gmail.com</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+923177638978"
                    className="flex items-center gap-3 text-[#475569] hover:text-[#2563EB] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#DBEAFE] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                      <Phone className="w-5 h-5 text-[#2563EB] group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#94A3B8]">Phone</p>
                      <p className="font-medium text-[#0F172A]">+92 317 763 8978</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3 text-[#475569]">
                    <div className="w-10 h-10 rounded-lg bg-[#DBEAFE] flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#94A3B8]">Location</p>
                      <p className="font-medium text-[#0F172A]">
                        Gujranwala, Pakistan
                      </p>
                      <p className="text-sm text-[#94A3B8]">
                        (Remote Available Worldwide)
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Availability Card */}
              <motion.div
                className="bg-[#DBEAFE] border border-[#2563EB]/30 rounded-xl p-6 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 bg-[#16A34A] rounded-full animate-pulse"></span>
                  <h3 className="text-lg font-bold text-[#0F172A] font-sora">
                    Currently Available
                  </h3>
                </div>

                <p className="text-[#0F172A] leading-relaxed mb-4">
                  Open to remote backend engineering roles, freelance projects, and API
                  consultation worldwide.
                </p>

                <p className="text-sm text-[#475569]">
                  Typical response: within 24 hours on weekdays
                </p>
              </motion.div>

              {/* Connect Online Card */}
              <motion.div
                className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-lg font-bold text-[#0F172A] mb-4 font-sora">
                  Connect Online
                </h3>

                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/muhammadarslan-390448213"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1D4ED8] transition-all duration-200 group"
                  >
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#FFFFFF] text-[#0F172A] border border-[#E2E8F0] rounded-lg font-semibold hover:bg-[#F1F5F9] transition-all duration-200 group"
                  >
                    <Github className="w-5 h-5" />
                    View GitHub
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-t border-[#E2E8F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4 font-sora">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#475569]">
                Quick answers to common questions about working together
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="border border-[#E2E8F0] rounded-lg overflow-hidden hover:border-[#2563EB]/30 transition-colors duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <button
                    onClick={() =>
                      setOpenFAQ(openFAQ === index ? null : index)
                    }
                    className="w-full px-6 py-5 flex items-center justify-between bg-[#FFFFFF] hover:bg-[#F8FAFC] transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-[#0F172A] text-left">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <svg
                        className="w-5 h-5 text-[#2563EB]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </motion.div>
                  </button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openFAQ === index ? "auto" : 0,
                      opacity: openFAQ === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 bg-[#F8FAFC] border-t border-[#E2E8F0]">
                      <p className="text-[#475569] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
