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
      className="relative flex min-h-[calc(100dvh-var(--site-header-height))] flex-col overflow-hidden bg-arena-hero-beige"
      aria-labelledby="hero-heading"
    >
      <HeroBackdrop />
      {/* Design frame: caps width on large monitors so % / vw-based decor matches ~1920 reference */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1920px] min-h-[calc(100dvh-var(--site-header-height))] flex-1 flex-col items-center justify-center">
        <HeroDecorLayer />
        <div className="relative z-10 flex w-full flex-col items-center px-3 pt-[clamp(0.5rem,calc(var(--hero-vw)*0.02),1.25rem)] pb-[clamp(5.5rem,calc(var(--hero-vw)*0.1),6rem)] sm:px-6 sm:pb-[clamp(4rem,calc(var(--hero-vw)*0.08),6rem)] sm:max-[1799px]:pt-6 sm:max-[1799px]:pb-[clamp(5rem,calc(var(--hero-vw)*0.11),6.25rem)] lg:px-10">
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
              className="mx-auto mt-5 flex w-full max-w-[min(480px,calc(var(--hero-vw)-1.5rem))] flex-col items-center sm:mt-12 sm:max-w-[var(--hero-center-max)] sm:max-[1799px]:mt-16"
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

              <div className="mt-[clamp(0.5rem,calc(var(--hero-vw)*0.02),1rem)] flex w-full flex-col items-center sm:max-[1799px]:mt-5">
                <HeroDateBadge />
                <p className="mb-3 max-w-full px-1 font-alexandria text-[clamp(10px,calc(var(--hero-vw)*0.0235),11px)] font-bold uppercase leading-snug tracking-[0.22em] text-arena-ink sm:mb-[min(calc(var(--hero-vw)*0.0319),46px)] sm:max-[1799px]:mb-5 sm:px-0 sm:leading-none sm:tracking-[0.28em]">
                  Evento restrito para maiores de 18 anos
                </p>
              </div>

              <div className="mb-4 flex w-full justify-center sm:mb-[min(calc(var(--hero-vw)*0.0319),46px)] sm:max-[1799px]:mb-8">
                <HeroPrimaryCta href="#cta" />
              </div>

              <div className="w-full">
                <HeroVenueLockup />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <HeroBottomCurve />
    </section>
  );
}
