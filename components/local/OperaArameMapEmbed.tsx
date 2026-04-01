"use client";

import { motion } from "framer-motion";
import {
  PLAYFUL_SHADOW_TEXT_STYLE,
  ShadowText,
} from "@/components/ShadowText";
import { EASE_OUT } from "@/components/motion/presets";

/** WGS84 — Ópera de Arame (Parque das Pedreiras), Curitiba */
const MAP_LAT = -25.4206;
const MAP_LON = -49.2733;

const OSM_EMBED_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(
  `${MAP_LON - 0.006},${MAP_LAT - 0.004},${MAP_LON + 0.006},${MAP_LAT + 0.004}`,
)}&layer=mapnik&marker=${MAP_LAT},${MAP_LON}`;

const GOOGLE_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Ópera de Arame, Rua João Gava 920, Abranches, Curitiba PR",
)}`;

/**
 * Embedded map + address for Ópera de Arame (Local section).
 */
export function OperaArameMapEmbed() {
  return (
    <div className="relative overflow-hidden rounded-3xl border-[3px] border-arena-ink bg-white/60 shadow-sticker-sm">
      <motion.div
        className="absolute right-0 top-0 z-10 h-24 w-24 rounded-bl-full bg-arena-yellow/35"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.15 }}
        aria-hidden
      />
      <div className="relative aspect-4/3 w-full min-h-[220px] sm:aspect-video sm:min-h-[280px]">
        <iframe
          title="Mapa — Ópera de Arame, Curitiba"
          src={OSM_EMBED_SRC}
          className="absolute inset-0 h-full w-full border-0 grayscale-[0.15] contrast-[1.02]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="relative z-10 border-t-[3px] border-arena-ink bg-arena-cream/90 px-4 py-4 sm:px-6 sm:py-5">
        <p className="font-condensed text-xs uppercase tracking-[0.25em] text-arena-ink/60">
          Endereço
        </p>
        <p className="mt-2 font-sans text-base font-medium leading-snug text-arena-ink sm:text-lg">
          Rua João Gava, 920 — Abranches
          <span className="mt-1 block text-arena-ink/85">
            Curitiba — PR · Parque das Pedreiras (Ópera de Arame)
          </span>
        </p>
        <a
          href={GOOGLE_DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-arena-ink bg-arena-yellow px-4 py-2.5 text-md text-white shadow-sticker-sm transition-[filter] hover:brightness-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-arena-ink"
        >
          <ShadowText
            className="uppercase"
            style={PLAYFUL_SHADOW_TEXT_STYLE}
          >
            Abrir no Google Maps
          </ShadowText>
        </a>
      </div>
    </div>
  );
}
