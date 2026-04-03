"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { HEADER_GLYPH_STYLE, ShadowText } from "@/components/ShadowText";

/** Shared label style: Lilita 24px / 57px + HEADER glyph shadow on yellow pills. */
export const LILITA_YELLOW_PILL_LABEL_STYLE: CSSProperties = {
  ...HEADER_GLYPH_STYLE,
  color: "#ffffff",
  fontSize: "24px",
  lineHeight: "57px",
  letterSpacing: "0",
  fontStyle: "normal",
  WebkitTextStroke: "0.75px #232323",
  textRendering: "geometricPrecision",
  // @ts-expect-error — leading-trim in supporting browsers only
  leadingTrim: "none",
};

type LilitaYellowPillTagProps = {
  children: string;
  className?: string;
};

export function LilitaYellowPillTag({
  children,
  className = "",
}: LilitaYellowPillTagProps) {
  return (
    <motion.span
      className={`box-border inline-flex shrink-0 items-center justify-center rounded-[17px] border-2 border-[#232323] bg-[#FFBE3B] ${className}`}
      style={{ rotate: 0 }}
      initial={{ opacity: 0, scale: 0.5, y: 10, rotate: -6 }}
      whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 280, damping: 16, mass: 0.6 }}
    >
      <ShadowText className="uppercase" style={LILITA_YELLOW_PILL_LABEL_STYLE}>
        {children}
      </ShadowText>
    </motion.span>
  );
}
