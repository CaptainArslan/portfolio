"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const SHOW_AFTER_PX = 360;

/** Minimal mouse silhouette + upper “wheel” — same language as the scroll cue, for “back to top”. */
function ScrollTopGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="34"
      viewBox="0 0 22 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="1"
        y="1"
        width="20"
        height="32"
        rx="10"
        stroke="currentColor"
        strokeWidth="1.2"
        vectorEffect="non-scaling-stroke"
      />
      <rect x="9" y="7" width="4" height="9" rx="2" fill="currentColor" className="opacity-[0.88]" />
    </svg>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const transition = reduceMotion
    ? { duration: 0.15 }
    : { duration: 0.38, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14, scale: reduceMotion ? 1 : 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : 10, scale: reduceMotion ? 1 : 0.96 }}
          transition={transition}
          onClick={handleClick}
          className="group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 flex min-h-[3.25rem] min-w-[4.25rem] flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-[#E2E8F0]/55 bg-[#F8FAFC]/40 px-3.5 py-3 font-inter text-[#94A3B8] shadow-[0_1px_0_rgba(255,255,255,0.5)_inset,0_8px_32px_rgba(15,23,42,0.04)] supports-[backdrop-filter]:backdrop-blur-xl motion-safe:transition-[transform,background-color,border-color,color,box-shadow] motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:border-[#E2E8F0]/90 motion-safe:hover:bg-white/55 motion-safe:hover:text-[#64748B] motion-safe:hover:shadow-[0_12px_40px_rgba(15,23,42,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8FAFC] sm:bottom-[max(2rem,env(safe-area-inset-bottom))] sm:right-[max(2rem,env(safe-area-inset-right))] sm:min-w-[4.75rem] sm:px-4 sm:py-3.5"
          aria-label="Scroll to top"
        >
          {/* Subtle dot grid — matches premium / editorial cue from reference */}
          <span
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.28] bg-[radial-gradient(#CBD5E1_0.55px,transparent_0.6px)] [background-size:9px_9px]"
            aria-hidden
          />
          <span className="relative text-[10px] font-medium uppercase tracking-[0.22em] text-current sm:text-[11px]">
            Top
          </span>
          <ScrollTopGlyph className="relative h-8 w-[22px] shrink-0 text-current sm:h-[34px]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
