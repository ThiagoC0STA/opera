"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { SectionDecor } from "@/components/elements/SectionDecor";
import { DECOR_LOCAL } from "@/components/elements/siteDecorPlacements";
import { EASE_OUT, fadeUp, sectionStagger } from "@/components/motion/presets";

const bullets = [
  "Curitiba — região central, fácil de achar com mapas.",
  "Estacionamento e bicicletário perto do acesso principal.",
  "Transporte público: linhas que passam pela área do evento.",
];

export function LocalSection() {
  return (
    <Section
      id="local"
      variant="cream"
      className="border-b-[3px] border-arena-ink"
      decor={<SectionDecor items={DECOR_LOCAL} />}
    >
      <motion.div
        className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14"
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={fadeUp}>
          <Badge tone="green" rotate={-4} className="mb-4">
            Onde
          </Badge>
          <h2 className="font-display text-4xl uppercase leading-[0.95] text-arena-ink sm:text-5xl md:text-6xl">
            Arena Ópera
            <span className="mt-2 block text-arena-blue">no coração da cidade</span>
          </h2>
          <p className="mt-6 max-w-lg font-sans text-base text-arena-ink/85 sm:text-lg">
            Tudo pensado para você chegar tranquilo, circular com segurança e
            aproveitar a noite inteira sem fricção.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl border-[3px] border-arena-ink bg-white/60 p-6 shadow-sticker-sm sm:p-8"
        >
          <motion.div
            className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-arena-yellow/35"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.2 }}
            aria-hidden
          />
          <p className="font-condensed text-xs uppercase tracking-[0.25em] text-arena-ink/60">
            Acesso
          </p>
          <ul className="mt-5 space-y-4 font-sans text-arena-ink">
            {bullets.map((line) => (
              <li
                key={line}
                className="flex gap-3 border-l-4 border-arena-blue pl-4 text-base leading-snug sm:text-lg"
              >
                {line}
              </li>
            ))}
          </ul>
          <motion.p
            className="mt-8 rounded-xl border-[3px] border-dashed border-arena-ink/30 bg-arena-cream/80 px-4 py-3 text-center text-sm text-arena-ink/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.45 }}
          >
            Mapa e endereço exato serão divulgados na confirmação do ingresso.
          </motion.p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
