"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * Thin accent-colored progress bar fixed to the top of the viewport, filling
 * as the visitor scrolls through the page. Purely additive/decorative — sits
 * above the nav so it reads as a single continuous strip across route changes.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();

  // A light spring smooths out fast/jittery scroll input into something that
  // feels premium rather than robotic. Under reduced motion we skip the
  // spring lag entirely and track the scroll position 1:1.
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 420,
    damping: 40,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-[#2563EB]"
      style={{ scaleX: reduceMotion ? scrollYProgress : smoothed }}
    />
  );
}
