"use client";

import { motion } from "framer-motion";
import {
  PLAYFUL_SHADOW_TEXT_STYLE,
  ShadowText,
} from "@/components/ShadowText";
import { EASE_OUT } from "@/components/motion/presets";

/** WGS84 — Ópera Concept Hall, Santa Felicidade, Curitiba */
const MAP_LAT = -25.40224;
const MAP_LON = -49.32766;

const OSM_EMBED_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(
  `${MAP_LON - 0.006},${MAP_LAT - 0.004},${MAP_LON + 0.006},${MAP_LAT + 0.004}`,
)}&layer=mapnik&marker=${MAP_LAT},${MAP_LON}`;

const VENUE_ADDRESS_LINE =
  "R. Via Veneto, 505 - Santa Felicidade, Curitiba - PR, 82020-470";

const GOOGLE_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Ópera Concept Hall, ${VENUE_ADDRESS_LINE}`,
)}`;

/**
 * Embedded map + address for Ópera Concept Hall (Local section).
 */
export function OperaConceptHallMapEmbed() {
  return (
    <div className="relative overflow-hidden rounded-3xl border-[3px] border-arena-ink bg-white/60 shadow-sticker-sm">
      <motion.div
        className="absolute right-0 top-0 z-10 h-24 w-24 rounded-bl-full bg-arena-yellow/35"
        initial={{ scale: 0, rotate: -20 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 }}
        aria-hidden
      />
      <div className="relative aspect-4/3 w-full min-h-[220px] sm:aspect-video sm:min-h-[280px]">
        <iframe
          title="Mapa — Ópera Concept Hall, Curitiba"
          src={OSM_EMBED_SRC}
          className="absolute inset-0 h-full w-full border-0 grayscale-[0.15] contrast-[1.02]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <address className="relative z-10 border-t-[3px] border-arena-ink bg-arena-cream/90 px-4 py-4 not-italic sm:px-6 sm:py-5">
        <p className="font-condensed text-xs uppercase tracking-[0.25em] text-arena-ink/60">
          Endereço
        </p>
        <p className="mt-2 font-sans text-base font-medium leading-snug text-arena-ink sm:text-lg">
          {VENUE_ADDRESS_LINE}
          <span className="mt-2 block text-arena-ink/85">Ópera Concept Hall</span>
        </p>
        <p className="mt-3 font-sans text-sm text-arena-ink/80">
          <a
            href="tel:+5541988826777"
            className="font-medium text-arena-header-green underline-offset-2 hover:underline"
          >
            (41) 98882-6777
          </a>
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
      </address>
    </div>
  );
}
