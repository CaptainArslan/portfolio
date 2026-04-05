"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

// Dynamic import of BackgroundScene without SSR
const BackgroundScene = dynamic(
  () => import("@/components/three/BackgroundScene"),
  { ssr: false }
);

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.33, 0.66, 0.66, 1],
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 0.66, 0.66, 1],
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.5,
      ease: [0.33, 0.66, 0.66, 1],
    },
  },
};

const CodeHighlight = () => {
  return (
    <div className="relative">
      <pre className="text-xs lg:text-sm leading-relaxed font-mono overflow-hidden">
        <code>
          <span className="text-[#A78BFA]">public</span>
          {" function "}
          <span className="text-[#60A5FA]">processPayment</span>
          {"\n    ("}
          <span className="text-[#E2E8F0]">PaymentRequest</span>
          {" "}
          <span className="text-[#E2E8F0]">$request</span>
          {"\n): "}
          <span className="text-[#60A5FA]">JsonResponse</span>
          {" {\n    "}
          <span className="text-[#E2E8F0]">$payment</span>
          {" = "}
          <span className="text-[#60A5FA]">DB</span>
          {"::"}
          <span className="text-[#60A5FA]">transaction</span>
          {"\n        ("}
          <span className="text-[#A78BFA]">function</span>
          {" () \n        "}
          <span className="text-[#A78BFA]">use</span>
          {" ("}
          <span className="text-[#E2E8F0]">$request</span>
          {") {\n        "}
          <span className="text-[#A78BFA]">return</span>
          {" "}
          <span className="text-[#60A5FA]">Payment</span>
          {"::"}
          <span className="text-[#60A5FA]">create</span>
          {"\n            (["}
          <span className="text-[#34D399]">'amount'</span>
          {"  => "}
          <span className="text-[#E2E8F0]">$request</span>
          {"->amount,\n            "}
          <span className="text-[#34D399]">'user_id'</span>
          {" => "}
          <span className="text-[#60A5FA]">Auth</span>
          {"::"}
          <span className="text-[#60A5FA]">id</span>
          {"()\n            "}
          <span className="text-[#34D399]">'status'</span>
          {"  => "}
          <span className="text-[#34D399]">'pending'</span>
          {",\n            ]);\n    });\n\n    "}
          <span className="text-[#60A5FA]">ProcessPaymentJob</span>
          {"::dispatch("}
          <span className="text-[#E2E8F0]">$payment</span>
          {")->onQueue('payments')->delay(now()->addSeconds(2));\n\n    "}
          <span className="text-[#A78BFA]">return</span>
          {" "}
          <span className="text-[#60A5FA]">response</span>
          {"()->json(["}
          <span className="text-[#34D399]">'id'</span>
          {" => "}
          <span className="text-[#E2E8F0]">$payment->id</span>
          {", "}
          <span className="text-[#34D399]">'status'</span>
          {" => "}
          <span className="text-[#34D399]">'queued'</span>
          {"], 201);\n}"}
        </code>
      </pre>
    </div>
  );
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#F8FAFC]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#CBD5E1_1px,_transparent_1px)] bg-[size:28px_28px] opacity-40 pointer-events-none" />

      {/* Blob */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[radial-gradient(circle,_rgba(37,99,235,0.08),_transparent)] rounded-full blur-3xl pointer-events-none" />

      {/* 3D Scene */}
      {mounted && (
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <BackgroundScene />
        </div>
      )}

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">

            {/* LEFT */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
            >
              <motion.h1
                variants={fadeInUp}
                className="mb-6 text-6xl font-bold leading-tight"
                style={{ color: "#0F172A" }}
              >
                I Build Backend Systems That Scale Under Pressure
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mb-8 text-lg max-w-xl"
                style={{ color: "#475569" }}
              >
                Laravel, APIs, payments, CRM automation, and high-performance backend systems.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex gap-4">
                <Link href="/projects">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 rounded-lg text-white shadow-lg"
                    style={{ backgroundColor: "#2563EB" }}
                  >
                    Explore Work
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              className="hidden lg:block"
              variants={fadeInRight}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
            >
              <CodeHighlight />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}