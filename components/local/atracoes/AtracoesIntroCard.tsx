"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { LilitaYellowPillTag } from "@/components/local/LilitaYellowPillTag";
import { EASE_OUT, fadeUp, sectionStagger } from "@/components/motion/presets";

/** Same pill shell as {@link LocalSectionPillTag}. */
const ATRACOES_PILL_CLASS =
  "mb-4 h-[40px] w-[min(207px,100%)] max-w-full px-3";

const headlineStyle: CSSProperties = {
  fontFamily: "var(--font-f-display), system-ui, sans-serif",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "clamp(2rem, 4.2vw + 0.75rem, 72px)",
  lineHeight: "clamp(2rem, 4.2vw + 0.75rem, 72px)",
  letterSpacing: "0",
  textTransform: "uppercase",
  // @ts-expect-error — leading-trim when supported
  leadingTrim: "none",
};

const introBodyStyle: CSSProperties = {
  fontFamily: "var(--font-f-body), system-ui, sans-serif",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "18px",
  lineHeight: "29.25px",
  letterSpacing: "0",
  // @ts-expect-error — leading-trim when supported
  leadingTrim: "none",
};

export function AtracoesIntroCard() {
  return (
    <motion.div
      className="relative mb-12 overflow-hidden rounded-[24px] border-4 border-[#232323] bg-white sm:mb-16 sm:rounded-[28px]"
      initial={{ opacity: 0, y: 50, scale: 0.93, rotate: -0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        type: "spring",
        stiffness: 110,
        damping: 18,
        mass: 1,
      }}
    >
      <div
        className="flex h-[7px] w-full"
        aria-hidden
      >
        <span className="h-full flex-1 bg-arena-green" />
        <span className="h-full flex-1 bg-arena-yellow" />
        <span className="h-full flex-1 bg-arena-blue" />
        <span className="h-full flex-1 bg-arena-green" />
      </div>

      <motion.div
        className="grid px-5 py-8 sm:gap-10 sm:px-8 sm:py-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:px-12 lg:py-12"
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div variants={fadeUp}>
          <LilitaYellowPillTag className={ATRACOES_PILL_CLASS}>
            Atrações
          </LilitaYellowPillTag>
          <h2 className="m-0 text-arena-ink" style={headlineStyle}>
            Cada jogo,
            <span className="mt-1 block text-arena-green sm:mt-2">
              Uma festa!
            </span>
          </h2>
        </motion.div>
        <motion.p
          variants={fadeUp}
          className="min-w-0 md:min-w-[562px] text-arena-ink/90"
          style={introBodyStyle}
        >
          As festas que você já ama ganharam o ritmo da maior competição do
          planeta! A Arena Ópera chega para transformar a torcida em um
          espetáculo imersivo no Ópera Concept Hall. Imagine vibrar com cada
          lance em um painel de LED gigante de 8x5m, cercado por ativações
          exclusivas das marcas que você ama e uma energia que Curitiba nunca
          viu. Quando o apito final toca, a festa só começa: atrações nacionais
          assumem o palco para transformar a vitória em uma experiência única.
          Não é só futebol, é o nosso destino. Venha buscar o Hexa com a gente!
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
