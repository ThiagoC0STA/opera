"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";

const navLinkClass =
  "rounded-lg px-3 py-2 font-condensed text-xs uppercase tracking-[0.12em] text-white/75 transition-colors hover:bg-white/10 hover:text-arena-yellow sm:text-sm";

export function SiteHeader() {
  return (
    <motion.header
      className="sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 280, damping: 30 }}
    >
      <div className="border-b-[3px] border-arena-ink bg-arena-ink/90 pt-[max(0.5rem,env(safe-area-inset-top))] shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 pb-3.5 pt-1 sm:gap-4 sm:px-6 sm:pb-4 sm:pt-1.5 lg:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2 sm:gap-3"
            aria-label="Arena Ópera — início"
          >
            <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border-[3px] border-arena-yellow bg-arena-cream shadow-sticker-sm transition-transform group-hover:scale-[1.05] group-hover:rotate-[-4deg] sm:h-10 sm:w-10">
              <Image
                src="/logoop.png"
                alt=""
                width={160}
                height={160}
                unoptimized
                className="h-full w-full object-contain object-center"
                aria-hidden
              />
            </span>
            <span className="hidden text-left font-display text-lg uppercase leading-tight tracking-wide text-white sm:block sm:text-xl">
              Arena Ópera
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex lg:gap-2"
            aria-label="Principal"
          >
            <Link href="#lineup" className={navLinkClass}>
              Programação
            </Link>
            <Link href="#experience" className={navLinkClass}>
              Experiência
            </Link>
            <Link href="#countdown" className={navLinkClass}>
              Contagem
            </Link>
            <Link href="#local" className={navLinkClass}>
              Local
            </Link>
            <Link href="#dicas" className={navLinkClass}>
              Dicas
            </Link>
          </nav>

          <Button
            href="#lineup"
            variant="primary"
            size="md"
            className="shrink-0"
          >
            Ingressos
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
