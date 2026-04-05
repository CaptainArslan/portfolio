"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface MetricItemProps {
  number: string;
  label: string;
}

function AnimatedCounter({ end, isInView }: { end: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1500; // 1.5 seconds

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end]);

  return <span>{count}</span>;
}

function MetricItem({ number, label }: MetricItemProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const endNum = parseInt(number.replace(/[^0-9]/g, ""));
  const hasPlus = number.includes("+");
  const hasPercent = number.includes("%");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center py-8 px-4 sm:py-10 sm:px-6 lg:px-8 border-r border-[#E2E8F0] last:border-r-0"
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2563EB] font-sora mb-3">
        <AnimatedCounter end={endNum} isInView={inView} />
        {hasPlus && "+"}
        {hasPercent && "%"}
      </div>
      <p className="text-xs sm:text-sm text-[#475569] font-medium text-center">
        {label}
      </p>
    </motion.div>
  );
}

export function TrustMetrics() {
  const metrics = [
    { number: "3+", label: "Years Experience" },
    { number: "4", label: "Production Systems" },
    { number: "8+", label: "Companies Served" },
    { number: "25%", label: "Faster API Response" },
    { number: "60%", label: "Query Performance Gain" },
    { number: "50%", label: "Faster Client Onboarding" },
  ];

  return (
    <section className="bg-[#FFFFFF] border-y border-[#E2E8F0] py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: 2 columns, Tablet: 3 columns, Desktop: 6 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {metrics.map((metric, index) => (
            <MetricItem
              key={index}
              number={metric.number}
              label={metric.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
