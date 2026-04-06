/** Strip non-digits (CPF, phone). */
export function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

/** Brazilian CPF: 11 digits with valid check digits. */
export function isValidCpf(value: string): boolean {
  const d = digitsOnly(value);
  if (d.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(d)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(d[i]!, 10) * (10 - i);
  }
  let rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(d[9]!, 10)) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(d[i]!, 10) * (11 - i);
  }
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  return rest === parseInt(d[10]!, 10);
}

/**
 * Normalize Brazilian phone: optional +55, then DDD + number (10 or 11 digits).
 */
export function normalizeBrazilPhone(value: string): string {
  let d = digitsOnly(value);
  if (d.startsWith("55") && d.length >= 12) {
    d = d.slice(2);
  }
  return d;
}

export function isValidBrazilPhone(value: string): boolean {
  const d = normalizeBrazilPhone(value);
  if (d.length < 10 || d.length > 11) return false;
  return /^[1-9]\d{9,10}$/.test(d);
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** `birthDate` is YYYY-MM-DD from `<input type="date">`. */
export function isValidBirthDateIso(birthDate: string, minAgeYears: number): boolean {
  if (!ISO_DATE.test(birthDate)) return false;
  const [ys, ms, ds] = birthDate.split("-");
  const y = parseInt(ys!, 10);
  const m = parseInt(ms!, 10);
  const day = parseInt(ds!, 10);
  if (m < 1 || m > 12 || day < 1 || day > 31) return false;

  const birth = new Date(y, m - 1, day);
  if (
    birth.getFullYear() !== y ||
    birth.getMonth() !== m - 1 ||
    birth.getDate() !== day
  ) {
    return false;
  }

  const now = new Date();
  if (birth > now) return false;

  const oldest = new Date();
  oldest.setFullYear(oldest.getFullYear() - 120);
  if (birth < oldest) return false;

  let age = now.getFullYear() - birth.getFullYear();
  const md = now.getMonth() - birth.getMonth();
  if (md < 0 || (md === 0 && now.getDate() < birth.getDate())) {
    age -= 1;
  }
  return age >= minAgeYears;
}

/** YYYY-MM-DD (from `<input type="date">`) to DD/MM/YYYY for spreadsheets. */
export function formatBirthDateBr(isoDate: string): string {
  if (!ISO_DATE.test(isoDate)) return isoDate;
  const [y, m, d] = isoDate.split("-");
  return `${d}/${m}/${y}`;
}

export const GENDER_VALUES = [
  "female",
  "male",
  "other",
  "prefer_not",
] as const;

export type GenderValue = (typeof GENDER_VALUES)[number];

export function isGenderValue(v: string): v is GenderValue {
  return (GENDER_VALUES as readonly string[]).includes(v);
}

export function genderLabelPt(value: GenderValue): string {
  switch (value) {
    case "female":
      return "Feminino";
    case "male":
      return "Masculino";
    case "other":
      return "Outro";
    case "prefer_not":
      return "Prefiro não informar";
    default:
      return value;
  }
}

export function formatCpfDisplay(digits11: string): string {
  const d = digitsOnly(digits11).slice(0, 11);
  if (d.length !== 11) return digitsOnly(digits11);
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
}

export function formatBrazilPhoneForDisplay(value: string): string {
  const d = normalizeBrazilPhone(value);
  if (d.length === 11) {
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  }
  if (d.length === 10) {
    return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  }
  return value.trim().slice(0, 40);
}
