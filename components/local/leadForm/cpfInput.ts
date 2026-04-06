import { digitsOnly } from "@/lib/leadValidation";

/** Max length of masked CPF: 000.000.000-00 */
export const CPF_MASK_MAX_LEN = 14;

/** Mask CPF while typing (max 11 digits): 000.000.000-00 */
export function formatCpfInput(raw: string): string {
  const d = digitsOnly(raw).slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`;
  if (d.length <= 9) {
    return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
  }
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
}
