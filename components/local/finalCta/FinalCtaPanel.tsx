"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HEADER_GLYPH_STYLE, ShadowText } from "@/components/ShadowText";
import { EASE_OUT, fadeUp, sectionStagger } from "@/components/motion/presets";

/** Same glyph system as CountdownSection CTA; white fill on yellow button. */
const finalCtaGlyphStyle = {
  ...HEADER_GLYPH_STYLE,
  color: "#FFFFFF",
  fontSize: "35px",
  lineHeight: "57px",
  letterSpacing: "0",
  leadingTrim: "none",
} as CSSProperties;

const CTA_HREF = process.env.NEXT_PUBLIC_FINAL_CTA_URL ?? "#";

/**
 * Bordered panel: kicker, two-line headline, body, single yellow CTA (design reference).
 */
export function FinalCtaPanel({ className = "" }: { className?: string }) {
  return (
    <motion.article
      className={`relative z-10 w-full rounded-[28px] border-2 border-[#232323] bg-[#FFFFFF1A] px-6 py-10 text-center shadow-none sm:rounded-[32px] sm:px-10 sm:py-12 md:px-12 md:py-12 ${className}`}
      initial={{ opacity: 0, y: 50, scale: 0.92, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 1,
      }}
    >
      <motion.div
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        <motion.p
          className="font-condensed text-xs uppercase tracking-[0.32em] text-arena-yellow sm:text-sm sm:tracking-[0.35em]"
          variants={fadeUp}
        >
          Ingressos limitados
        </motion.p>
        <motion.h2
          className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] uppercase leading-[0.98] tracking-tight text-white sm:mt-5"
          variants={fadeUp}
        >
          Entre antes
          <span className="mt-1 block text-arena-yellow">do apito</span>
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-md font-sans text-sm leading-relaxed text-white sm:mt-7 sm:max-w-lg sm:text-base"
          variants={fadeUp}
        >
          Garanta seu lugar no Arena Ópera! Cadastre-se agora mesmo em nossa
          pré-venda para obter benefícios exclusivos.
        </motion.p>
        <motion.div className="mt-9 sm:mt-10" variants={fadeUp}>
          <Link
            href={CTA_HREF}
            className="animate-pulse-glow box-border inline-flex h-[69px] w-[min(323px,calc(100%-1.5rem))] max-w-full shrink-0 items-center justify-center rounded-[20px] border-2 border-solid border-[#232323] bg-[#FFBE3B] text-white no-underline transition-[filter] hover:brightness-[1.05] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#232323]"
          >
            <ShadowText style={finalCtaGlyphStyle}>CADASTRE-SE</ShadowText>
          </Link>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
