"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Section } from "@/components/Section";
import { HEADER_GLYPH_STYLE, ShadowText } from "@/components/ShadowText";
import { CountdownSectionDecor } from "@/components/local/countdown/CountdownSectionDecor";
import { EASE_OUT, fadeUp, sectionStagger } from "@/components/motion/presets";

/** First match moment — 13 June 2026, 17:00 Brasília. */
const COUNTDOWN_TARGET_ISO = "2026-06-13T17:00:00-03:00";

/** Lilita + glyph shadow (same system as hero CTA); white fill on green button. */
const countdownCtaLabelStyle = {
  ...HEADER_GLYPH_STYLE,
  color: "#FFFFFF",
  fontSize: "35px",
  lineHeight: "57px",
  letterSpacing: "0",
  leadingTrim: "none",
} as CSSProperties;

type CountBlockProps = {
  label: string;
  value: number;
};

const countBlockContainerVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 26,
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
};

const countBlockNumberVariants: Variants = {
  hidden: { scale: 0.45, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 420, damping: 22, mass: 0.65 },
  },
};

const countBlockLabelVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
};

function CountBlock({ label, value }: CountBlockProps) {
  return (
    <motion.div
      className="flex min-w-[min(28vw,140px)] flex-1 flex-col items-center rounded-2xl border-[3px] border-[#0A0A0A] bg-white px-4 py-6 sm:min-w-[160px] sm:px-6 sm:py-8"
      variants={countBlockContainerVariants}
    >
      <motion.span
        className="origin-center font-display text-5xl tabular-nums leading-none text-[#0A0A0A] sm:text-6xl md:text-7xl"
        variants={countBlockNumberVariants}
      >
        {value}
      </motion.span>
      <motion.span
        className="mt-3 font-condensed text-xs uppercase tracking-[0.22em] text-[#0A0A0A] sm:text-sm"
        variants={countBlockLabelVariants}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

function useCountdownTo(targetMs: number, tickMs: number) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), tickMs);
    return () => window.clearInterval(id);
  }, [tickMs]);

  return useMemo(() => {
    const diff = Math.max(0, targetMs - now);
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    return { days: d, hours: h, minutes: m };
  }, [now, targetMs]);
}

export function CountdownSection() {
  const targetMs = useMemo(
    () => new Date(COUNTDOWN_TARGET_ISO).getTime(),
    [],
  );
  const { days, hours, minutes } = useCountdownTo(targetMs, 1000);

  return (
    <Section
      id="countdown"
      variant="yellow"
      className="border-b-[3px] border-[#0A0A0A] bg-[#FFBE3B]"
      innerClassName="relative pb-24 pt-12 sm:pb-28 sm:pt-16 md:pb-32"
      decor={<CountdownSectionDecor />}
    >
      <div className="relative z-10 text-center">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.h2
            className="font-display text-[clamp(2rem,5.5vw,3.75rem)] font-normal uppercase leading-[0.95] tracking-normal text-[#0A0A0A] sm:text-[clamp(2.5rem,5vw,4.25rem)]"
            variants={fadeUp}
          >
            Estamos quase lá!
          </motion.h2>
          <motion.p
            className="mx-auto mt-5 max-w-2xl px-1 font-sans text-base leading-relaxed text-[#0A0A0A] sm:mt-6 sm:text-lg"
            variants={fadeUp}
          >
            Faltam poucos dias para a Arena Ópera dominar Curitiba. Garanta
            agora sua entrada na pré-venda exclusiva e assegure seu lugar no
            Ópera Concept Hall antes que o lote vire.
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 max-w-3xl rounded-2xl border-[3px] border-[#0A0A0A] bg-[#FFF8DC] px-4 py-8 sm:mt-12 sm:rounded-3xl sm:px-8 sm:py-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.08 }}
        >
          <motion.div
            className="flex flex-wrap items-stretch justify-center gap-4 sm:gap-6 md:gap-8"
            variants={sectionStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
          >
            <CountBlock label="Dias" value={days} />
            <CountBlock label="Horas" value={hours} />
            <CountBlock label="Minutos" value={minutes} />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center sm:mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.12 }}
        >
          <Link
            href="#cta"
            className="box-border inline-flex h-[69px] w-[min(323px,calc(100%-1.5rem))] max-w-full shrink-0 items-center justify-center rounded-[20px] border-2 border-solid border-[#232323] bg-[#00A651] text-white transition-[filter] hover:brightness-[1.05] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#232323] no-underline"
          >
            <ShadowText style={countdownCtaLabelStyle}>CADASTRE-SE</ShadowText>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
