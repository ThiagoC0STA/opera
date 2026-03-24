"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/Badge";
import { CtaButton } from "@/components/hero/CtaButton";
import { HeroBackdrop } from "@/components/hero/HeroBackdrop";
import { HeroBottomCurve } from "@/components/hero/HeroBottomCurve";
import { HeroLogo } from "@/components/hero/HeroLogo";

const stagger = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const rise = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(100dvh-var(--site-header-height))] flex-col overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroBackdrop />
      <HeroBottomCurve />

      {/*
        Copy sits in the illustration’s light central field. Extra bottom padding
        keeps CTAs above the bottom-center foam finger; slight top bias matches
        the art’s optical center.
      */}
      <div className="relative z-10 flex w-full flex-1 flex-col justify-center px-4 pb-[min(30vh,240px)] pt-[max(1.75rem,6vh)] sm:px-6 sm:pb-[min(28vh,220px)] sm:pt-[max(2rem,7vh)] lg:px-10 lg:pt-[max(2.25rem,6vh)]">
        <motion.div
          className="relative z-20 mx-auto w-full max-w-3xl shrink-0 text-center lg:max-w-4xl"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="mb-3 flex flex-wrap items-center justify-center gap-2 sm:mb-4 sm:gap-3"
            variants={rise}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge
              tone="yellow"
              rotate={-4}
              immediate
              className="!border-4 text-sm sm:text-base"
            >
              Curitiba (CWB) • Dez 2026
            </Badge>
            <Badge tone="blue" rotate={4} immediate className="!border-4 text-sm sm:text-base">
              Sede no Brasil
            </Badge>
          </motion.div>

          <motion.div variants={rise} transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}>
            <h1 id="hero-heading" className="flex flex-col items-center">
              <HeroLogo />
              <span className="mt-2 block max-w-xl font-condensed text-base uppercase leading-snug tracking-[0.14em] text-arena-ink sm:mt-4 sm:text-lg md:text-xl lg:text-2xl lg:tracking-[0.12em]">
                Uma noite. Casa cheia. Energia total.
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="mx-auto mt-4 max-w-2xl font-sans text-base leading-snug text-arena-ink/90 sm:mt-5 sm:text-lg md:text-xl"
            variants={rise}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            Festival, luz e arquibancada — alma de estádio brasileiro em uma noite
            só.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-7 sm:gap-4"
            variants={rise}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <CtaButton href="#lineup" variant="primary" size="lg">
              Comprar ingressos
            </CtaButton>
            <CtaButton
              href="#experience"
              variant="outline"
              size="lg"
              className="!border-arena-ink !text-arena-ink hover:!bg-arena-ink hover:!text-arena-yellow"
            >
              A experiência
            </CtaButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
