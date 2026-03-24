import type { Variants } from "framer-motion";

/** Shared easing — snappy poster / sticker feel */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const sectionStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.06 },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 22 },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 180, damping: 24 },
  },
};
