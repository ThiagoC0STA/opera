"use client";

import { Button, type ButtonProps } from "@/components/Button";

export type CtaButtonProps = ButtonProps;

/**
 * Hero call-to-action — same behavior as Button, exported for a clear hero API.
 */
export function CtaButton(props: CtaButtonProps) {
  return <Button {...props} size={props.size ?? "lg"} />;
}
