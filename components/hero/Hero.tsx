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

      <div className="relative z-10 flex w-full flex-col items-center px-4 pt-[clamp(0.5rem,2vw,1.25rem)] pb-[clamp(4rem,8vw,6rem)] sm:px-6 lg:px-10">
        <motion.div
          className="relative z-20 mx-auto flex w-full max-w-[min(480px,calc(100vw-2rem))] flex-col items-center text-center sm:max-w-[600px]"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={rise}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroSponsorStrip />
          </motion.div>

          <motion.div
            className="flex w-full flex-col items-center mt-12"
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
              <p className="mb-[min(3.19vw,46px)] max-w-full font-alexandria text-[min(0.76vw,11px)] font-bold uppercase leading-none tracking-[0.28em] text-arena-ink">
                Evento restrito para maiores de 18 anos
              </p>
            </div>

            <div className="mb-[min(3.19vw,46px)] flex w-full justify-center">
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
