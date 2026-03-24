"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { PosterCard } from "@/components/Card";
import { Badge } from "@/components/Badge";

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
    <Section id="lineup" variant="cream" className="border-b-[3px] border-arena-ink">
      <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge tone="blue" rotate={-3} className="mb-4">
            Programação 2026
          </Badge>
          <motion.h2
            className="font-display text-5xl uppercase leading-none text-arena-ink sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            Pôsteres
            <span className="block text-arena-red">em cartaz</span>
          </motion.h2>
        </div>
        <motion.p
          className="max-w-sm font-sans text-arena-ink/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Cada bloco é uma atração de capa. Passe o mouse e sinta o efeito —
          como puxar um adesivo novo da parede.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {lineup.map((item, index) => (
          <PosterCard key={item.title} {...item} index={index} />
        ))}
      </div>
    </Section>
  );
}
