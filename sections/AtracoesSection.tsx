"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { AtracoesDecor } from "@/components/local/atracoes/AtracoesDecor";
import {
  AtracoesEventCard,
  atracoesJo,
  atracoesMore,
  atracoesWoods,
} from "@/components/local/atracoes/AtracoesEventCard";
import { AtracoesIntroCard } from "@/components/local/atracoes/AtracoesIntroCard";
import { sectionStagger } from "@/components/motion/presets";

export function AtracoesSection() {
  return (
    <Section
      id="atracoes"
      variant="cream"
      className="bg-[#FDF5E6]"
      innerClassName="relative z-10"
      decor={<AtracoesDecor />}
    >
      <AtracoesIntroCard />

      <motion.div
        className="relative grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3"
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <AtracoesEventCard index={0} {...atracoesJo} />
        <AtracoesEventCard index={1} {...atracoesWoods} />
        <AtracoesEventCard index={2} {...atracoesMore} />
      </motion.div>
    </Section>
  );
}
