"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/motion/presets";

export type TipCardProps = {
  title: string;
  body: string;
};

export function TipCard({ title, body }: TipCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="rounded-2xl border-[3px] border-arena-ink bg-white/[0.06] p-5 shadow-sticker-sm ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-white/[0.1] sm:p-6"
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <h3 className="font-display text-xl uppercase leading-tight text-arena-yellow sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-white/85 sm:text-base">
        {body}
      </p>
    </motion.article>
  );
}
