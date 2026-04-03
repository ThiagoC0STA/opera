"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE_OUT } from "@/components/motion/presets";

export function SiteFooter() {
  return (
    <footer className="border-t-[3px] border-arena-ink bg-arena-ink py-12 text-arena-cream">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        <motion.p
          className="font-display text-2xl uppercase tracking-wide"
          whileHover={{ scale: 1.03, color: "#ffcc00" }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          Arena Ópera
        </motion.p>
        <p className="max-w-md text-center text-sm text-white/60 sm:text-left">
          © {new Date().getFullYear()} Arena Ópera.
        </p>
      </motion.div>
    </footer>
  );
}
