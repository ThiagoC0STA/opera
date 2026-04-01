"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { HEADER_GLYPH_STYLE, ShadowText } from "@/components/ShadowText";

const ctaGlyphStyle: CSSProperties = {
  ...HEADER_GLYPH_STYLE,
  /** Floor ~20px on narrow phones; keeps desktop cap at 35px (2.43vw was ~9px on 375px). */
  fontSize: "clamp(1.25rem, calc(2.43vw + 0.875rem), 35px)",
  lineHeight: 1,
};

type HeroPrimaryCtaProps = {
  href?: string;
};

/**
 * Hero CTA — 252×69 ref, bg #FFEBD5, border 1px #232323.
 * Text uses ShadowText at 35px.
 */
export function HeroPrimaryCta({ href = "#cta" }: HeroPrimaryCtaProps) {
  return (
    <motion.div
      className="w-full flex justify-center"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
    >
      <Link
        href={href}
        className="box-border flex h-14 min-h-14 w-[calc(100%-10rem)] md:w-full max-w-[min(323px,calc(100vw-2rem))] items-center justify-center rounded-[16px] border-2 border-[#232323] bg-[#FFBE3B] px-3 py-2 text-inherit no-underline uppercase leading-none transition-[filter] hover:brightness-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#232323] sm:h-[min(4.79vw,69px)] sm:min-h-0 sm:max-w-[323px] sm:rounded-[20px] sm:py-0 sm:px-0"
      >
        <ShadowText
          className="header-nav-font header-nav-font--cta"
          style={ctaGlyphStyle}
        >
          Cadastre-se
        </ShadowText>
      </Link>
    </motion.div>
  );
}
