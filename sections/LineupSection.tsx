"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { PosterCard } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { SectionDecor } from "@/components/elements/SectionDecor";
import { DECOR_LINEUP } from "@/components/elements/siteDecorPlacements";
import { EASE_OUT, fadeUp, sectionStagger } from "@/components/motion/presets";

const lineup = [
  {
    title: "Verde e ouro",
    subtitle: "Abertura • Bateria e metais",
    imageSrc:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
    imageAlt: "Cores da bandeira brasileira e torcida no estádio",
    accent: "green" as const,
  },
  {
    title: "Carnaval noturno",
    subtitle: "Desfile de LED • 3 palcos",
    imageSrc:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
    imageAlt: "Luzes de festival e multidão colorida",
    accent: "pink" as const,
  },
  {
    title: "Rugido final",
    subtitle: "Atração principal • Acústica de estádio",
    imageSrc:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    imageAlt: "Público em show com as mãos no ar",
    accent: "yellow" as const,
  },
];

export function LineupSection() {
  return (
    <Section
      id="lineup"
      variant="cream"
      className="border-b-[3px] border-arena-ink"
      decor={<SectionDecor items={DECOR_LINEUP} />}
    >
      <motion.div
        className="relative mb-14 overflow-hidden rounded-3xl border-[3px] border-arena-ink bg-white/50 px-5 py-8 shadow-sticker-sm sm:px-8 sm:py-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: EASE_OUT }}
      >
        <motion.div
          className="absolute left-0 top-0 h-1.5 w-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.15 }}
          style={{ originX: 0 }}
          aria-hidden
        >
          <span className="flex h-full w-full">
            <span className="h-full flex-1 bg-arena-green" />
            <span className="h-full flex-1 bg-arena-yellow" />
            <span className="h-full flex-1 bg-arena-blue" />
            <span className="h-full flex-1 bg-arena-pink" />
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp}>
            <Badge tone="blue" rotate={-3} className="mb-4">
              Programação 2026
            </Badge>
            <h2 className="font-display text-5xl uppercase leading-none text-arena-ink sm:text-6xl md:text-7xl">
              Pôsteres
              <span className="block text-arena-red">em cartaz</span>
            </h2>
          </motion.div>
          <motion.p
            className="max-w-md font-sans text-base leading-relaxed text-arena-ink/80 sm:text-lg"
            variants={fadeUp}
          >
            Cada bloco é uma atração de capa. Passe o mouse e sinta o efeito —
            como puxar um adesivo novo da parede.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        {lineup.map((item, index) => (
          <PosterCard key={item.title} {...item} index={index} />
        ))}
      </motion.div>
    </Section>
  );
}
