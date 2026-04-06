"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FooterZhelloCredit } from "@/components/FooterZhelloCredit";

export function SiteFooter() {
  return (
    <footer
      className="border-t-[3px] border-arena-ink bg-arena-ink py-12 text-arena-cream"
      role="contentinfo"
    >
      <motion.div
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        <div>
          <motion.p
            className="font-display text-2xl uppercase tracking-wide"
            whileHover={{ scale: 1.03, color: "#ffcc00" }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            Arena Ópera
          </motion.p>
          <nav aria-label="Navegação do rodapé" className="mt-3 flex gap-4">
            <Link
              href="/#atracoes"
              className="text-sm text-white/60 no-underline transition-colors hover:text-white/90"
            >
              Atrações
            </Link>
            <Link
              href="/#local"
              className="text-sm text-white/60 no-underline transition-colors hover:text-white/90"
            >
              Local
            </Link>
            <Link
              href="/#countdown"
              className="text-sm text-white/60 no-underline transition-colors hover:text-white/90"
            >
              Contagem regressiva
            </Link>
          </nav>
        </div>
        <p className="max-w-md text-center text-sm text-white/60 sm:text-left">
          © {new Date().getFullYear()} Arena Ópera. Ópera Concept Hall, Curitiba,
          PR.
        </p>
      </motion.div>
      <FooterZhelloCredit />
    </footer>
  );
}
