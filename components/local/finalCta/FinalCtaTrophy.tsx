"use client";

import Image from "next/image";

const SRC = "/final-elements/trophy.png";
const REF_W = 118;
const REF_H = 153;

type FinalCtaTrophyProps = {
  className?: string;
  mirrored?: boolean;
};

/**
 * FIFA-style trophy for the final CTA band (matches hero asset).
 */
export function FinalCtaTrophy({
  className = "",
  mirrored = false,
}: FinalCtaTrophyProps) {
  return (
    <Image
      src={SRC}
      alt=""
      width={REF_W}
      height={REF_H}
      className={`pointer-events-none select-none object-contain ${mirrored ? "scale-x-[-1]" : ""} ${className}`}
    />
  );
}
