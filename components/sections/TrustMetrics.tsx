"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import trustMetricsData from "@/data/trust-metrics.json";

interface Metric {
  number: string;
  label: string;
  description: string;
}

/* ============================================
   ANIMATED COUNTER
   ============================================ */
function AnimatedCounter({ end, isInView }: { end: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const duration = 1600;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, end]);

  return <span>{count}</span>;
}

/* ============================================
   METRIC ITEM
   ============================================ */
function MetricItem({
  number,
  label,
  description,
  index,
}: Metric & { index: number }) {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const endNum = parseInt(number.replace(/[^0-9]/g, ""), 10);
  const hasPlus = number.includes("+");
  const hasX = number.includes("×") || number.includes("x");
  const isK = number.toLowerCase().includes("k");
  /** Decimals, %, or K suffix break the counter — show the string as authored */
  const useLiteralValue =
    number.includes("%") || /\d+\.\d/.test(number) || /k/i.test(number);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group flex flex-col items-center text-center py-8 px-4 sm:px-6 relative"
    >
      {/* Vertical separator (not on last item) */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-[#E2E8F0] hidden sm:block last:hidden" />

      {/* Number */}
      <motion.div
        className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#2563EB] font-sora mb-2 tabular-nums"
        whileInView={{ scale: [0.9, 1.05, 1] }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
      >
        {useLiteralValue ? (
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            {number}
          </motion.span>
        ) : (
          <>
            <AnimatedCounter end={endNum} isInView={inView} />
            {hasPlus && "+"}
            {isK && !hasPlus && "K+"}
            {hasX && "×"}
          </>
        )}
      </motion.div>

      {/* Label */}
      <motion.p
        className="text-xs sm:text-sm font-semibold text-[#0F172A] mb-1"
        whileHover={{ color: "#2563EB" }}
      >
        {label}
      </motion.p>

      {/* Description */}
      <p className="text-xs leading-relaxed max-w-[160px] sm:max-w-[200px] text-[#475569]">
        {description}
      </p>
    </motion.div>
  );
}

/* ============================================
   TRUST METRICS SECTION
   ============================================ */
export function TrustMetrics() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="bg-white border-y border-[#E2E8F0]">
      {/* Micro header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center pt-10 pb-4 px-4"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
          {trustMetricsData.header}
        </p>
      </motion.div>

      {/* Metrics grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 divide-x divide-[#E2E8F0]">
          {trustMetricsData.metrics.map((metric, index) => (
            <MetricItem key={index} {...metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
