import confetti from "canvas-confetti";

/** Arena / Brazil palette for signup success. */
const COLORS = ["#FFBE3B", "#00A651", "#31613d", "#0057b7", "#e63946", "#ffffff"];

/**
 * Short confetti burst after a successful lead signup (canvas-confetti).
 */
export function celebrateLeadSignup() {
  if (typeof window === "undefined") return;

  const prefersReduced =
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  if (prefersReduced) return;

  const base = {
    colors: COLORS,
    ticks: 220,
    gravity: 1.05,
    decay: 0.92,
    scalar: 1.05,
  } as const;

  void confetti({
    ...base,
    particleCount: 130,
    spread: 78,
    startVelocity: 42,
    origin: { x: 0.5, y: 0.58 },
  });

  window.setTimeout(() => {
    void confetti({
      ...base,
      particleCount: 55,
      angle: 55,
      spread: 50,
      origin: { x: 0.08, y: 0.62 },
    });
    void confetti({
      ...base,
      particleCount: 55,
      angle: 125,
      spread: 50,
      origin: { x: 0.92, y: 0.62 },
    });
  }, 180);
}
