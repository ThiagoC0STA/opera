"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { SectionDecor } from "@/components/elements/SectionDecor";
import { DECOR_EXPERIENCE } from "@/components/elements/siteDecorPlacements";
import {
  fadeUp,
  sectionStagger,
  slideInRight,
} from "@/components/motion/presets";

export function ExperienceSection() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <Section
      id="experience"
      variant="dark"
      className="border-b-[3px] border-arena-ink"
      innerClassName="py-20 sm:py-24"
      decor={<SectionDecor items={DECOR_EXPERIENCE} />}
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl border-[3px] border-arena-ink bg-[#0c0c12] shadow-sticker ring-2 ring-white/10"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 200, damping: 26 }}
        whileHover={{ scale: 1.005 }}
      >
        <div className="relative aspect-[21/9] min-h-[320px] w-full overflow-hidden md:aspect-[21/8]">
          <motion.div
            className="absolute inset-[-8%]"
            animate={
              reduceMotion
                ? undefined
                : { scale: [1, 1.05, 1] }
            }
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1600&q=80"
              alt="Público em evento ao vivo com as mãos erguidas"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-arena-blue/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-r from-arena-ink via-arena-ink/50 to-transparent" />
          <motion.div
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-transparent via-transparent to-arena-yellow/10"
            animate={
              reduceMotion ? undefined : { opacity: [0.25, 0.55, 0.25] }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
        </div>

        <div className="absolute left-4 top-4 z-10 sm:left-8 sm:top-8">
          <Badge tone="yellow" rotate={-4}>
            A experiência
          </Badge>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-10 lg:max-w-3xl"
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          <motion.h2
            className="font-display text-4xl uppercase leading-[0.95] text-white drop-shadow-[4px_4px_0_#000] sm:text-5xl md:text-6xl lg:text-7xl"
            variants={fadeUp}
          >
            Sinta a torcida
            <span className="mt-2 block text-arena-yellow">virar o barulho</span>
          </motion.h2>
          <motion.p
            className="mt-6 max-w-lg rounded-r-xl border-l-4 border-arena-yellow bg-arena-ink/80 pl-4 pr-3 py-3 font-sans text-base text-white/95 shadow-sticker-sm backdrop-blur-md sm:text-lg"
            variants={fadeUp}
          >
            Cantos em camadas, ondas de luz e grave que você sente nas costelas.
            Feito como um pôster de futebol dos anos 90 — tipografia forte,
            cantos secos e emoção em primeiro lugar.
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-xl border-[3px] border-arena-ink bg-arena-pink px-4 py-3 font-condensed text-lg uppercase tracking-wide text-white shadow-sticker-sm lg:block"
          variants={slideInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{
            scale: 1.06,
            rotate: [3, -4, 3],
            transition: { duration: 0.45 },
          }}
        >
          Energia 360°
        </motion.div>
      </motion.div>
    </Section>
  );
}
