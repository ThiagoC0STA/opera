import type { Transition } from "framer-motion";

/**
 * Same corner swing recipe as {@link HeaderCornerPlants}: tween only (no spring overshoot).
 */
export const PLANT_ENTRANCE_EASE = [0.22, 1, 0.36, 1] as const;

export function plantSwingEntranceTransition(delay: number): Transition {
  return {
    opacity: { duration: 0.35, delay, ease: PLANT_ENTRANCE_EASE },
    rotate: { duration: 0.78, delay, ease: PLANT_ENTRANCE_EASE },
    scale: { duration: 0.78, delay, ease: PLANT_ENTRANCE_EASE },
  };
}
