"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

  return (
    <motion.article
      initial={{ opacity: 0, y: 36, rotate: tilt * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 260, damping: 26, delay: index * 0.06 }}
      whileHover={{
        y: -10,
        rotate: tilt + (index % 2 === 0 ? -2 : 2),
        scale: 1.02,
      }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border-[3px] border-arena-ink bg-arena-cream shadow-sticker ${className}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b-[3px] border-arena-ink">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          className={`absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/55 to-transparent`}
          aria-hidden
        />
      </div>
      <div
        className={`flex flex-1 flex-col gap-1 border-t-0 px-4 py-4 ${accentBg[accent]}`}
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
