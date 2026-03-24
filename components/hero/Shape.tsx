"use client";

import { motion } from "framer-motion";

type ShapeSvgProps = {
  className?: string;
  delay?: number;
  floatDuration?: number;
};

/** Large organic blob — base layer for compositions. */
export function ShapeBlobPrimary({
  className = "",
  delay = 0,
  floatDuration = 5.5,
}: ShapeSvgProps) {
  return (
    <motion.svg
      viewBox="0 0 800 520"
      fill="none"
      className={className}
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.5 },
        y: {
          delay: delay + 0.2,
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <path
        d="M420 45C520 8 620 35 698 118c78 83 95 198 52 292-43 94-138 165-248 188-110 23-235-2-328-82-93-80-152-214-128-328 24-114 124-208 246-243Z"
        className="fill-arena-blue/40 stroke-white"
        strokeWidth="3"
      />
    </motion.svg>
  );
}

export function ShapeBlobAccent({
  className = "",
  delay = 0.1,
  floatDuration = 6.8,
}: ShapeSvgProps) {
  return (
    <motion.svg
      viewBox="0 0 520 400"
      fill="none"
      className={className}
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, -12, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.5 },
        y: {
          delay: delay + 0.25,
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <path
        d="M280 120c48-62 130-88 204-62 74 26 128 98 136 178 8 80-32 162-102 208-70 46-166 54-246 20-80-34-140-110-148-194-8-84 38-168 156-150Z"
        className="fill-arena-yellow/30 stroke-white/90"
        strokeWidth="2.5"
      />
    </motion.svg>
  );
}

/** Soft wave band for depth. */
export function ShapeWave({ className = "", delay = 0 }: ShapeSvgProps) {
  return (
    <motion.svg
      viewBox="0 0 1200 200"
      fill="none"
      className={className}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 0.55, x: 0 }}
      transition={{ delay, duration: 0.7 }}
      aria-hidden
    >
      <path
        d="M0 120 Q300 40 600 100 T1200 80 L1200 200 L0 200Z"
        className="fill-white/12"
      />
      <path
        d="M0 150 Q400 90 800 130 T1200 110 L1200 200 L0 200Z"
        className="fill-arena-blue/25"
      />
    </motion.svg>
  );
}

/** Deeper green blob — reads as shadow mass. */
export function ShapeBlobDeep({
  className = "",
  delay = 0,
  floatDuration = 7.2,
}: ShapeSvgProps) {
  return (
    <motion.svg
      viewBox="0 0 640 480"
      fill="none"
      className={className}
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, -14, 0] }}
      transition={{
        opacity: { delay, duration: 0.55 },
        y: {
          delay: delay + 0.3,
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <path
        d="M120 380c-40-88 12-198 98-252 86-54 202-52 288 6 86 58 130 166 98 258-32 92-124 156-224 156-100 0-220-80-260-168Z"
        className="fill-[#006341]/50 stroke-white/40"
        strokeWidth="2"
      />
    </motion.svg>
  );
}

/** Ribbon wave — thin accent, different read from ShapeWave. */
export function ShapeRibbon({
  className = "",
  delay = 0,
  floatDuration = 5.1,
}: ShapeSvgProps) {
  return (
    <motion.svg
      viewBox="0 0 900 120"
      fill="none"
      className={className}
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.85, y: [0, -9, 0] }}
      transition={{
        opacity: { delay, duration: 0.5 },
        y: {
          delay: delay + 0.15,
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <path
        d="M0 60 Q150 20 300 55 T600 50 T900 65"
        className="stroke-arena-yellow stroke-[10] opacity-90"
        strokeLinecap="round"
      />
      <path
        d="M0 72 Q180 38 320 68 T620 62 T900 78"
        className="stroke-white stroke-[4]"
        strokeLinecap="round"
        opacity="0.7"
      />
    </motion.svg>
  );
}

/** Incomplete ring — stadium / portal hint. */
export function ShapeArcRing({
  className = "",
  delay = 0,
  floatDuration = 4.4,
}: ShapeSvgProps) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      aria-hidden
      initial={{ opacity: 0, rotate: -12 }}
      animate={{ opacity: 0.9, rotate: 6, y: [0, -7, 0] }}
      transition={{
        opacity: { delay, duration: 0.45 },
        rotate: { delay, type: "spring", stiffness: 120, damping: 14 },
        y: {
          delay: delay + 0.25,
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <circle
        cx="100"
        cy="100"
        r="72"
        className="stroke-white stroke-[6]"
        strokeDasharray="48 24 120 40"
        strokeLinecap="round"
      />
      <circle
        cx="100"
        cy="100"
        r="54"
        className="stroke-arena-pink/80 stroke-[3]"
        strokeDasharray="90 70"
      />
    </motion.svg>
  );
}

/**
 * Layered “Wix poster” clouds — inspired by collage heroes (e.g. Arena Brasileira).
 */
export function ShapeCloudCluster({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 260" fill="none" className={className} aria-hidden>
      <motion.path
        d="M48 168c-8-52 38-96 92-88 18-40 78-52 118-28 44-36 108-12 124 42 16 54-24 108-82 112-12 36-62 58-102 44-48 28-112 8-130-42-18-50 22-102 80-108Z"
        className="fill-white/30 stroke-white stroke-[2.5]"
        initial={{ opacity: 0.85 }}
        animate={{ y: [0, -7, 0], x: [0, 4, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M120 200c-28-18-32-62 4-82 20-48 88-56 120-18 36-8 68 24 64 58-4 34-36 52-70 38-28 36-76 28-98-8-22-36-14-72 20-88Z"
        className="fill-white/22 stroke-white/90 stroke-2"
        initial={{ opacity: 0.9 }}
        animate={{ y: [0, -10, 0], x: [0, -5, 0] }}
        transition={{
          duration: 6.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.35,
        }}
      />
      <motion.path
        d="M260 72c32-28 76-20 96 14 28-6 54 18 48 46-6 28-38 44-70 36-14 32-54 40-82 20-28-20-32-58-8-82-4-24 4-48 16-34Z"
        className="fill-arena-cream/35 stroke-arena-ink stroke-[2.5]"
        animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
        transition={{
          duration: 4.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.15,
        }}
      />
    </svg>
  );
}
