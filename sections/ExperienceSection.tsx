"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      variant="dark"
      className="border-b-[3px] border-arena-ink"
      innerClassName="py-20 sm:py-24"
    >
      <div className="relative overflow-hidden rounded-2xl border-[3px] border-arena-ink shadow-sticker">
        <div className="relative aspect-[21/9] min-h-[320px] w-full md:aspect-[21/8]">
          <Image
            src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1600&q=80"
            alt="Público em evento ao vivo com as mãos erguidas"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-arena-blue/35 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-r from-arena-ink via-arena-ink/40 to-transparent" />
        </div>

        <div className="absolute left-4 top-4 z-10 sm:left-8 sm:top-8">
          <Badge tone="yellow" rotate={-4}>
            A experiência
          </Badge>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-10 lg:max-w-3xl">
          <motion.h2
            className="font-display text-4xl uppercase leading-[0.95] text-white drop-shadow-[4px_4px_0_#000] sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Sinta a torcida
            <span className="mt-2 block text-arena-yellow">virar o barulho</span>
          </motion.h2>
          <motion.p
            className="mt-6 max-w-lg border-l-4 border-arena-yellow bg-arena-ink/75 pl-4 font-sans text-base text-white/95 backdrop-blur-sm sm:text-lg"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.45 }}
          >
            Cantos em camadas, ondas de luz e grave que você sente nas costelas.
            Feito como um pôster de futebol dos anos 90 — tipografia forte,
            cantos secos e emoção em primeiro lugar.
          </motion.p>
        </div>

        <motion.div
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-xl border-[3px] border-arena-ink bg-arena-pink px-4 py-3 font-condensed text-lg uppercase tracking-wide text-white shadow-sticker-sm lg:block"
          initial={{ opacity: 0, x: 40, rotate: 6 }}
          whileInView={{ opacity: 1, x: 0, rotate: 3 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          Energia 360°
        </motion.div>
      </div>
    </Section>
  );
}
