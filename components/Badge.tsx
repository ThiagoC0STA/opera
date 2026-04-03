"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  PLAYFUL_SHADOW_TEXT_STYLE,
  ShadowText,
} from "@/components/ShadowText";

type BadgeTone = "yellow" | "green" | "blue" | "pink" | "red" | "cream";

const toneClasses: Record<BadgeTone, string> = {
  yellow: "bg-arena-yellow text-arena-ink border-arena-ink",
  green: "bg-arena-green text-white border-arena-ink",
  blue: "bg-arena-blue text-white border-arena-ink",
  pink: "bg-arena-pink text-white border-arena-ink",
  red: "bg-arena-red text-white border-arena-ink",
  cream: "bg-arena-cream text-arena-ink border-arena-ink",
};

export type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
  rotate?: number;
  className?: string;
  /** When true, animates on mount (for above-the-fold heroes). */
  immediate?: boolean;
};

export function Badge({
  children,
  tone = "yellow",
  rotate = -6,
  className = "",
  immediate = false,
}: BadgeProps) {
  const motionClass =
    "inline-flex items-center justify-center rounded-lg border-[3px] px-3 py-1 text-sm uppercase tracking-wide shadow-sticker-sm md:text-base";

  if (immediate) {
    return (
      <motion.span
        initial={{ opacity: 0, scale: 0.3, rotate: rotate - 12 }}
        animate={{ opacity: 1, scale: 1, rotate }}
        transition={{ type: "spring", stiffness: 300, damping: 14, mass: 0.6 }}
        whileHover={{
          scale: 1.12,
          rotate: rotate + 5,
          transition: { type: "spring", stiffness: 400, damping: 14 },
        }}
        className={`${motionClass} ${toneClasses[tone]} ${className}`}
      >
        <ShadowText style={PLAYFUL_SHADOW_TEXT_STYLE}>{children}</ShadowText>
      </motion.span>
    );
  }

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.3, rotate: rotate - 10 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 300, damping: 14, mass: 0.6 }}
      whileHover={{
        scale: 1.12,
        rotate: rotate + 5,
        transition: { type: "spring", stiffness: 400, damping: 14 },
      }}
      className={`${motionClass} ${toneClasses[tone]} ${className}`}
    >
      <ShadowText style={PLAYFUL_SHADOW_TEXT_STYLE}>{children}</ShadowText>
    </motion.span>
  );
}
