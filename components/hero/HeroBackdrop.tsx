"use client";

/**
 * Solid hero field color — decorative art lives in {@link HeroDecorLayer}.
 */
export function HeroBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-arena-hero-beige"
      aria-hidden
    />
  );
}
