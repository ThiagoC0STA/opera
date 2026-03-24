"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export function FinalCtaSection() {
  return (
    <Section variant="blue" innerClassName="py-24 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          className="font-condensed text-sm uppercase tracking-[0.35em] text-arena-yellow"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Lotação limitada
        </motion.p>
        <motion.h2
          className="mt-4 font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          Entre
          <span className="block text-arena-pink">antes do apito</span>
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-xl font-sans text-lg text-white/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
        >
          Garanta seu lugar na Arena Ópera. Quem chega cedo desbloqueia acesso ao
          lounge e drops exclusivos de merch.
        </motion.p>
        <motion.div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
        >
          <Button href="#lineup" variant="primary" size="lg">
            Garantir ingresso
          </Button>
          <Button href="#experience" variant="outline" size="lg">
            Saiba mais
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
