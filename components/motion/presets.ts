import type { Variants } from "framer-motion";

/** Shared easing — snappy poster / sticker feel */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** Dramatic cubic for entrance reveals */
export const EASE_DRAMATIC = [0.16, 1.11, 0.3, 1] as const;

export const sectionStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.13, delayChildren: 0.08 },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_DRAMATIC },
  },
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 180, damping: 18, mass: 0.8 },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 160, damping: 20, mass: 0.9 },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 160, damping: 20, mass: 0.9 },
  },
};

export const growFromBottom: Variants = {
  hidden: { opacity: 0, scaleY: 0.3, scaleX: 0.85, y: 30 },
  show: {
    opacity: 1,
    scaleY: 1,
    scaleX: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
      mass: 1.2,
      staggerChildren: 0.06,
    },
  },
};

export const springPop: Variants = {
  hidden: { opacity: 0, scale: 0.4, rotate: -8 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 300, damping: 15, mass: 0.7 },
  },
};

export const flyInLeft: Variants = {
  hidden: { opacity: 0, x: -120, rotate: -12 },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 16, mass: 1.1 },
  },
};

export const flyInRight: Variants = {
  hidden: { opacity: 0, x: 120, rotate: 12 },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 16, mass: 1.1 },
  },
};

export const revealScale: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: 20, rotate: -4 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      mass: 0.8,
    },
  },
};

export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0, y: 40 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 12,
      mass: 0.6,
    },
  },
};
