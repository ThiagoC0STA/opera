"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { LocalSectionCornerArt } from "@/components/local/LocalSectionCornerArt";
import { LocalSectionPillTag } from "@/components/local/LocalSectionPillTag";
import { OperaConceptHallMapEmbed } from "@/components/local/OperaConceptHallMapEmbed";
import { fadeUp, sectionStagger } from "@/components/motion/presets";

export function LocalSection() {
  return (
    <Section
      id="local"
      variant="cream"
      className="border-b-[3px] border-arena-ink"
      decor={<LocalSectionCornerArt />}
    >
      <motion.div
        className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14"
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={fadeUp}>
          <LocalSectionPillTag />
          <h2 className="font-display text-4xl uppercase leading-[0.95] text-arena-ink sm:text-5xl md:text-6xl">
            Ópera Concept Hall
            <span className="mt-2 block text-arena-blue">no coração de Curitiba</span>
          </h2>
          <p className="mt-6 max-w-lg font-sans text-base text-arena-ink/85 sm:text-md">
            O Ópera Concept Hall é um espaço multifuncional de alto padrão
            no bairro de Santa Felicidade, em Curitiba, sede da Arena Ópera
            durante a Copa do Mundo 2026. O local é reconhecido por sua
            arquitetura imponente, pensado para você chegar tranquilo, circular
            com segurança e aproveitar a noite inteira sem preocupações.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <OperaConceptHallMapEmbed />
        </motion.div>
      </motion.div>
    </Section>
  );
}
