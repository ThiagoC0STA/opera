"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { OperaArameMapEmbed } from "@/components/local/OperaArameMapEmbed";
import { SectionDecor } from "@/components/elements/SectionDecor";
import { DECOR_LOCAL } from "@/components/elements/siteDecorPlacements";
import { fadeUp, sectionStagger } from "@/components/motion/presets";

export function LocalSection() {
  return (
    <Section
      id="local"
      variant="cream"
      className="border-b-[3px] border-arena-ink"
      decor={<SectionDecor items={DECOR_LOCAL} />}
    >
      <motion.div
        className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-14"
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
            aproveitar a noite inteira sem fricção. O palco é a Ópera de Arame,
            ícone de Curitiba — região central, com estacionamento, bicicletário
            e linhas de transporte público na área.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <OperaArameMapEmbed />
        </motion.div>
      </motion.div>
    </Section>
  );
}
