// ============================================================
// Shared Framer Motion variants — premium animation library
// ============================================================

import type { Variants } from "framer-motion";

// Premium easing functions
export const easeQuickFunction = [0.25, 0.46, 0.45, 0.94]; // Snappy
export const easeSmooth = [0.22, 1, 0.36, 1]; // Smooth custom curve
export const easeElastic = [0.34, 1.56, 0.64, 1]; // Elastic overshoot

// ============================================================
// ENTRANCE ANIMATIONS
// ============================================================

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeSmooth },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeSmooth },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeSmooth },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeQuickFunction },
  },
};

export const blurFadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const slideInUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeSmooth },
  },
};

// ============================================================
// EXIT ANIMATIONS
// ============================================================

export const fadeOutDown: Variants = {
  exit: {
    opacity: 0,
    y: 24,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

// ============================================================
// STAGGER CONTAINERS
// ============================================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.08,
    },
  },
};

// ============================================================
// CARD INTERACTIONS
// ============================================================

export const cardHover: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
    transition: { duration: 0.4, ease: easeSmooth, type: "spring", stiffness: 400, damping: 40 },
  },
  hover: {
    y: -8,
    boxShadow: "0 25px 50px rgba(0,0,0,0.12), 0 12px 24px rgba(37,99,235,0.08)",
    transition: { duration: 0.4, ease: easeSmooth, type: "spring", stiffness: 400, damping: 40 },
  },
};

export const cardTap = {
  scale: 0.95,
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
};

export const elevatedCardHover: Variants = {
  rest: {
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: { duration: 0.3 },
  },
  hover: {
    boxShadow: "0 20px 40px rgba(37,99, 235,0.15)",
    transition: { duration: 0.3 },
  },
};

// ============================================================
// BUTTON INTERACTIONS
// ============================================================

export const buttonBase: Variants = {
  rest: {
    scale: 1,
    transition: { duration: 0.3, ease: easeSmooth },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: easeSmooth },
  },
  tap: {
    scale: 0.93,
    transition: { duration: 0.1 },
  },
};

export const buttonPrimary: Variants = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 12px rgba(37,99,235,0.2)",
    transition: { duration: 0.3, ease: easeSmooth },
  },
  hover: {
    scale: 1.04,
    boxShadow: "0 12px 24px rgba(37,99,235,0.3)",
    transition: { duration: 0.3, ease: easeSmooth },
  },
  tap: {
    scale: 0.95,
    boxShadow: "0 2px 8px rgba(37,99,235,0.2)",
    transition: { duration: 0.1 },
  },
};

// ============================================================
// FLOATING & CONTINUOUS ANIMATIONS
// ============================================================

export const floatAnimation: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      type: "tween",
    },
  },
};

export const floatSlow: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const pulseGlow: Variants = {
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(37,99,235,0.7)",
      "0 0 0 10px rgba(37,99,235,0)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
};

export const rotate: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// ============================================================
// VIEWPORT DEFAULTS
// ============================================================

export const viewportOnce = { once: true, margin: "-100px" };
export const viewportRepeated = { margin: "-100px" };

// ============================================================
// UTILITIES
// ============================================================

export const motionPreferences = {
  skipAnimation: {
    transition: { duration: 0 },
  },
};
