"use client";

import {
  GENDER_VALUES,
  genderLabelPt,
  isGenderValue,
  type GenderValue,
} from "@/lib/leadValidation";

const inputClass =
  "mt-2 w-full rounded-xl border-2 border-[#232323] bg-white px-4 py-3 font-sans text-base text-[#0A0A0A] outline-none ring-arena-yellow/40 transition-shadow focus-visible:ring-2";

type LeadGenderSelectProps = {
  id: string;
  value: GenderValue | "";
  onChange: (value: GenderValue) => void;
  required?: boolean;
};

export function LeadGenderSelect({
  id,
  value,
  onChange,
  required,
}: LeadGenderSelectProps) {
  return (
    <select
      id={id}
      name="gender"
      required={required}
      value={value}
      onChange={(ev) => {
        const v = ev.target.value;
        if (isGenderValue(v)) onChange(v);
      }}
      className={inputClass}
    >
      <option value="" disabled>
        Selecione
      </option>
      {GENDER_VALUES.map((g) => (
        <option key={g} value={g}>
          {genderLabelPt(g)}
        </option>
      ))}
    </select>
  );
}
