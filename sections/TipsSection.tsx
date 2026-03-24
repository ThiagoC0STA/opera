"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { TipCard } from "@/components/TipCard";
import { SectionDecor } from "@/components/elements/SectionDecor";
import { DECOR_TIPS } from "@/components/elements/siteDecorPlacements";
import { fadeUp, sectionStagger } from "@/components/motion/presets";

const tips = [
  {
    title: "Vista leve",
    body: "Mochila compacta, jaqueta se esfriar e tênis confortável — você vai pular.",
  },
  {
    title: "Chegue cedo",
    body: "Portões e filas rendem melhor quem chega com antecedência. Menos stress, mais show.",
  },
  {
    title: "Hidratação",
    body: "Beba água ao longo do dia. No evento, aproveite os pontos oficiais de bebidas.",
  },
  {
    title: "Bateria",
    body: "Carregue o celular — fotos, ingresso digital e encontro com a galera dependem disso.",
  },
];

export function TipsSection() {
  return (
    <Section
      id="dicas"
      variant="pattern"
      className="border-b-[3px] border-arena-ink"
      innerClassName="py-20 sm:py-24"
      decor={<SectionDecor items={DECOR_TIPS} />}
    >
      <motion.div
        className="mb-12 text-center sm:mb-14"
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div variants={fadeUp} className="flex justify-center">
          <Badge tone="pink" rotate={3}>
            Dicas
          </Badge>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="mt-5 font-display text-4xl uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl"
        >
          Vai firme
          <span className="mt-2 block text-arena-pink">na noite toda</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-2xl font-sans text-base text-white/80 sm:text-lg"
        >
          Pequenos hábitos que deixam a experiência mais lisa — do portão ao último
          refrão.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid gap-5 sm:grid-cols-2"
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        {tips.map((t) => (
          <TipCard key={t.title} title={t.title} body={t.body} />
        ))}
      </motion.div>
    </Section>
  );
}
