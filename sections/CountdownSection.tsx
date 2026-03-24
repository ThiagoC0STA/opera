"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { SectionDecor } from "@/components/elements/SectionDecor";
import { DECOR_COUNTDOWN } from "@/components/elements/siteDecorPlacements";
import { EASE_OUT, fadeUp, sectionStagger } from "@/components/motion/presets";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function useAnimatedInt(target: number, enabled: boolean, durationMs = 2200) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;
    startRef.current = null;
    let frame: number;

    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed = now - startRef.current;
      const t = Math.min(elapsed / durationMs, 1);
      setValue(Math.round(target * easeOutCubic(t)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [enabled, target, durationMs]);

  return value;
}

type CountBlockProps = {
  label: string;
  value: number;
  enabled: boolean;
  delayMs?: number;
};

const countBlockVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.88, rotate: -4 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 220, damping: 20 },
  },
};

function CountBlock({ label, value, enabled, delayMs = 0 }: CountBlockProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const t = window.setTimeout(() => setActive(true), delayMs);
    return () => window.clearTimeout(t);
  }, [enabled, delayMs]);

  const display = useAnimatedInt(value, active, 2000);

  return (
    <motion.div
      className="relative flex min-w-[140px] flex-col items-center rounded-2xl border-[3px] border-arena-ink bg-arena-cream px-6 py-8 shadow-sticker"
      variants={countBlockVariants}
      whileHover={{
        y: -8,
        rotate: -1.5,
        boxShadow: "8px 10px 0 #0a0a0a",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <span className="font-display text-6xl tabular-nums text-arena-ink sm:text-7xl md:text-8xl">
        {display}
      </span>
      <span className="mt-2 font-condensed text-sm uppercase tracking-[0.2em] text-arena-ink/70">
        {label}
      </span>
    </motion.div>
  );
}

export function CountdownSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const { days, hours, minutes } = useMemo(() => {
    const event = new Date("2026-12-05T20:00:00-03:00");
    const now = new Date();
    const diff = Math.max(0, event.getTime() - now.getTime());
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    return { days: d, hours: h, minutes: m };
  }, []);

  return (
    <Section
      id="countdown"
      variant="yellow"
      className="border-b-[3px] border-arena-ink"
      innerClassName="relative"
      decor={<SectionDecor items={DECOR_COUNTDOWN} />}
    >
      <div ref={ref} className="text-center">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp} className="mb-6 inline-block">
            <Badge tone="red" rotate={5}>
              Medidor de hype
            </Badge>
          </motion.div>
          <motion.h2
            className="font-display text-5xl uppercase leading-none text-arena-ink sm:text-6xl md:text-7xl"
            variants={fadeUp}
          >
            Contagem
            <span className="mt-2 block text-arena-blue">até a abertura</span>
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-lg font-sans text-base text-arena-ink/85 sm:text-lg"
            variants={fadeUp}
          >
            Números grandes, sombras fortes, animação com mola — a mesma energia
            de um telão no dia do jogo.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-14 flex flex-wrap items-stretch justify-center gap-6 rounded-3xl border-[3px] border-arena-ink bg-arena-cream/50 px-4 py-10 shadow-sticker sm:gap-10 md:px-10 md:py-12"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.15 }}
        >
          <motion.div
            className="flex flex-wrap items-stretch justify-center gap-6 sm:gap-10"
            variants={sectionStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
          >
            <CountBlock
              label="Dias"
              value={days}
              enabled={isInView}
              delayMs={0}
            />
            <CountBlock
              label="Horas"
              value={hours}
              enabled={isInView}
              delayMs={120}
            />
            <CountBlock
              label="Minutos"
              value={minutes}
              enabled={isInView}
              delayMs={240}
            />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
