"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { SectionDecor } from "@/components/elements/SectionDecor";
import { DECOR_FINAL_CTA } from "@/components/elements/siteDecorPlacements";
import { EASE_OUT, fadeUp, sectionStagger } from "@/components/motion/presets";

export function FinalCtaSection() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <Section
      id="cta"
      variant="blue"
      className="overflow-visible border-b-[3px] border-arena-ink"
      innerClassName="relative py-24 sm:py-28"
      decor={<SectionDecor items={DECOR_FINAL_CTA} />}
    >
      <motion.div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-arena-yellow/25 blur-3xl"
        animate={
          reduceMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.35, 0.55, 0.35] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-16 bottom-1/4 h-64 w-64 rounded-full bg-arena-pink/30 blur-3xl"
        animate={
          reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto max-w-3xl rounded-[2rem] border-[3px] border-white/25 bg-white/10 px-6 py-12 text-center shadow-sticker backdrop-blur-md sm:px-10 sm:py-14"
        initial={{ opacity: 0, y: 32, rotate: -0.5 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        whileHover={{ scale: 1.01, borderColor: "rgba(255,255,255,0.45)" }}
      >
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          <motion.p
            className="font-condensed text-sm uppercase tracking-[0.35em] text-arena-yellow"
            variants={fadeUp}
          >
            Lotação limitada
          </motion.p>
          <motion.h2
            className="mt-4 font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl md:text-7xl"
            variants={fadeUp}
          >
            Entre
            <span className="block text-arena-pink">antes do apito</span>
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-xl font-sans text-lg text-white/90"
            variants={fadeUp}
          >
            Garanta seu lugar na Arena Ópera. Quem chega cedo desbloqueia acesso ao
            lounge e drops exclusivos de merch.
          </motion.p>
          <motion.div
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={fadeUp}
          >
            <Button href="#lineup" variant="primary" size="lg">
              Garantir ingresso
            </Button>
            <Button
              href="#experience"
              variant="outline"
              size="lg"
              className="!border-white !text-white hover:!bg-white hover:!text-arena-blue"
            >
              Saiba mais
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
