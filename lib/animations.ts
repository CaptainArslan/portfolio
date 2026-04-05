// ============================================================
// Shared Framer Motion variants — import from here, not inline
// ============================================================

import type { Variants } from "framer-motion";

// Core entrance variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Container with stagger
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

// Card hover variants
export const cardHover = {
  rest: {
    y: 0,
    boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hover: {
    y: -5,
    boxShadow:
      "0 20px 40px rgba(0,0,0,0.08), 0 8px 16px rgba(37,99,235,0.06)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Button variants
export const buttonTap = { scale: 0.97 };

// Viewport defaults for scroll reveals
export const viewportOnce = { once: true, margin: "-80px" };

// Floating animation (hero elements)
export const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Pulse glow animation
export const pulseGlow = {
  opacity: [0.4, 0.7, 0.4],
  scale: [1, 1.04, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};
