"use client";

import { motion } from "framer-motion";

type StickerShapeProps = {
  className?: string;
  delay?: number;
};

export function StickerDiamond({ className = "", delay = 0 }: StickerShapeProps) {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      className={className}
      initial={{ opacity: 0, scale: 0, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 12 }}
      transition={{ delay, type: "spring", stiffness: 260, damping: 16 }}
      aria-hidden
    >
      <polygon
        points="60,8 112,60 60,112 8,60"
        className="fill-arena-pink stroke-arena-ink"
        strokeWidth="4"
      />
    </motion.svg>
  );
}

export function StickerStar({ className = "", delay = 0 }: StickerShapeProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      initial={{ opacity: 0, rotate: 0 }}
      animate={{ opacity: 1, rotate: -8 }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 14 }}
      aria-hidden
    >
      <polygon
        points="50,5 61,38 96,38 68,58 79,91 50,72 21,91 32,58 4,38 39,38"
        className="fill-arena-yellow stroke-arena-ink"
        strokeWidth="3"
      />
    </motion.svg>
  );
}
