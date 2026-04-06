import { digitsOnly } from "@/lib/leadValidation";

/**
 * Brazilian phone mask while typing: (XX) XXXXX-XXXX (mobile) or (XX) XXXX-XXXX (landline).
 * Strips leading 55 when present (country code).
 */
export function formatBrazilPhoneInput(raw: string): string {
  let d = digitsOnly(raw);
  if (d.startsWith("55") && d.length >= 12) {
    d = d.slice(2);
  }
  d = d.slice(0, 11);

  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;

  const ddd = d.slice(0, 2);
  const rest = d.slice(2);

  if (d.length <= 6) {
    return `(${ddd}) ${rest}`;
  }

  const isMobile = rest[0] === "9";

  if (isMobile) {
    if (rest.length <= 5) {
      return `(${ddd}) ${rest}`;
    }
    return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5, 9)}`;
  }

  if (rest.length <= 4) {
    return `(${ddd}) ${rest}`;
  }
  return `(${ddd}) ${rest.slice(0, 4)}-${rest.slice(4, 8)}`;
}

/** Max length of masked string (mobile case). */
export const BRAZIL_PHONE_MASK_MAX_LEN = 15;
