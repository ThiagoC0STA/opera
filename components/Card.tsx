"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export type PosterCardAccent =
  | "yellow"
  | "green"
  | "blue"
  | "pink"
  | "red";

const accentBg: Record<PosterCardAccent, string> = {
  yellow: "bg-arena-yellow",
  green: "bg-arena-green",
  blue: "bg-arena-blue",
  pink: "bg-arena-pink",
  red: "bg-arena-red",
};

export type PosterCardProps = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  accent: PosterCardAccent;
  footer?: ReactNode;
  className?: string;
  index?: number;
};

export function PosterCard({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  accent,
  footer,
  className = "",
  index = 0,
}: PosterCardProps) {
  const tilt = index % 2 === 0 ? -1.5 : 1.2;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 70, rotate: tilt * 3, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      rotate: tilt,
      scale: 1,
      transition: { type: "spring", stiffness: 180, damping: 18, mass: 0.9 },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -18,
        rotate: tilt + (index % 2 === 0 ? -3 : 3),
        scale: 1.04,
        boxShadow: "10px 14px 0 #0a0a0a",
      }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 350, damping: 18, mass: 0.7 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border-[3px] border-arena-ink bg-arena-cream shadow-sticker ${className}`}
    >
      <span
        className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-lg border-[3px] border-arena-ink bg-white font-condensed text-sm font-bold tabular-nums text-arena-ink shadow-sticker-sm"
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b-[3px] border-arena-ink">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/60 via-black/20 to-transparent"
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute inset-0 bg-linear-to-tr from-arena-yellow/0 via-transparent to-arena-pink/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
      </div>
      <div
        className={`relative flex flex-1 flex-col gap-1 border-t-0 px-4 py-4 ${accentBg[accent]}`}
      >
        <h3 className="font-display text-3xl uppercase leading-none tracking-wide text-arena-ink md:text-4xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="font-condensed text-lg uppercase tracking-wide text-arena-ink/90">
            {subtitle}
          </p>
        ) : null}
        {footer ? <div className="mt-3">{footer}</div> : null}
      </div>
    </motion.article>
  );
}
