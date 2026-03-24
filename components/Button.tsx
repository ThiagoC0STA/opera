"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "dark";
type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-arena-yellow text-arena-ink border-arena-ink hover:bg-arena-cream",
  secondary:
    "bg-arena-pink text-white border-arena-ink hover:brightness-110",
  outline:
    "bg-transparent text-arena-cream border-arena-cream hover:bg-arena-cream hover:text-arena-ink",
  dark: "bg-arena-ink text-arena-yellow border-arena-yellow hover:bg-arena-blue",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-base",
  lg: "px-10 py-4 text-lg sm:text-xl",
};

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
};

type ButtonAsLink = BaseProps & {
  href: string;
  type?: undefined;
  onClick?: undefined;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
  } = props;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl border-[3px] font-condensed uppercase tracking-wide shadow-sticker transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arena-yellow";

  const combined = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.04, rotate: -1 },
    whileTap: { scale: 0.97, rotate: 0 },
    transition: { type: "spring" as const, stiffness: 400, damping: 18 },
  };

  if ("href" in props && props.href) {
    return (
      <motion.div className="inline-block" {...motionProps}>
        <Link href={props.href} className={combined}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={combined}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
