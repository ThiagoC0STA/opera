"use client";

import { motion } from "framer-motion";
import { HeroBackdrop } from "@/components/hero/HeroBackdrop";
import { HeroBottomCurve } from "@/components/hero/HeroBottomCurve";
import { HeroDateBadge } from "@/components/hero/HeroDateBadge";
import { HeroDecorLayer } from "@/components/hero/HeroDecorLayer";
import { HeroLogo } from "@/components/hero/HeroLogo";
import { HeroPrimaryCta } from "@/components/hero/HeroPrimaryCta";
import { HeroSponsorStrip } from "@/components/hero/HeroSponsorStrip";
import { HeroStarsArc } from "@/components/hero/HeroStarsArc";
import { HeroVenueLockup } from "@/components/hero/HeroVenueLockup";

const stagger = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.09, delayChildren: 0.04 },
  },
};

const rise = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(100dvh-var(--site-header-height))] flex-col items-center justify-center overflow-hidden bg-arena-hero-beige"
      aria-labelledby="hero-heading"
    >
      <HeroBackdrop />
      <HeroDecorLayer />
      <HeroBottomCurve />

      <div className="relative z-10 flex w-full flex-col items-center px-3 pt-[clamp(0.5rem,2vw,1.25rem)] pb-[clamp(5.5rem,10vw,6rem)] sm:px-6 sm:pb-[clamp(4rem,8vw,6rem)] lg:px-10">
        <motion.div
          className="relative z-20 flex w-full flex-col items-center text-center"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="w-full max-sm:-mx-3 max-sm:px-3 sm:px-0"
            variants={rise}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroSponsorStrip />
          </motion.div>

          <motion.div
            className="mx-auto mt-5 flex w-full max-w-[min(480px,calc(100vw-1.5rem))] flex-col items-center sm:mt-12 sm:max-w-[573px]"
            variants={rise}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroStarsArc />

            <h1
              id="hero-heading"
              className="flex w-full flex-col items-center"
            >
              <HeroLogo />
            </h1>

            <div className="mt-[clamp(0.5rem,2vw,1rem)] flex w-full flex-col items-center">
              <HeroDateBadge />
              <p className="mb-3 max-w-full px-1 font-alexandria text-[clamp(10px,2.35vw,11px)] font-bold uppercase leading-snug tracking-[0.22em] text-arena-ink sm:mb-[min(3.19vw,46px)] sm:px-0 sm:leading-none sm:tracking-[0.28em]">
                Evento restrito para maiores de 18 anos
              </p>
            </div>

            <div className="mb-4 flex w-full justify-center sm:mb-[min(3.19vw,46px)]">
              <HeroPrimaryCta href="#cta" />
            </div>

            <div className="w-full">
              <HeroVenueLockup />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
