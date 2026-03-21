import { type HTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils.ts";

/* ─── Variants ─── */

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "px-2xs py-[2px]",
    "rounded-round",
    "font-body font-medium text-xs leading-tight text-center",
  ],
  {
    variants: {
      color: {
        neutral: "",
        blue: "",
        green: "",
        yellow: "",
        orange: "",
        red: "",
      },
      variant: {
        subtle: "",
        strong: "",
      },
    },
    compoundVariants: [
      /* ── Subtle (light bg + colored text) ── */
      { color: "neutral", variant: "subtle", className: "bg-neutral-97 text-neutral-45" },
      { color: "blue", variant: "subtle", className: "bg-blue-95 text-blue-45" },
      { color: "green", variant: "subtle", className: "bg-green-95 text-green-45" },
      { color: "yellow", variant: "subtle", className: "bg-yellow-95 text-yellow-45" },
      { color: "orange", variant: "subtle", className: "bg-orange-95 text-orange-45" },
      { color: "red", variant: "subtle", className: "bg-red-95 text-red-45" },

      /* ── Strong (colored bg + white/dark text) ── */
      { color: "neutral", variant: "strong", className: "bg-neutral-45 text-text-inverse" },
      { color: "blue", variant: "strong", className: "bg-blue-45 text-text-inverse" },
      { color: "green", variant: "strong", className: "bg-green-45 text-text-inverse" },
      { color: "yellow", variant: "strong", className: "bg-yellow-85 text-text-default" },
      { color: "orange", variant: "strong", className: "bg-orange-60 text-text-inverse" },
      { color: "red", variant: "strong", className: "bg-red-45 text-text-inverse" },
    ],
    defaultVariants: {
      color: "neutral",
      variant: "subtle",
    },
  },
);

/* ─── Component ─── */

export interface BadgeProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof badgeVariants> {
  /** Badge label text */
  label: string;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, color, variant, label, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ color, variant, className }))}
        {...props}
      >
        {label}
      </span>
    );
  },
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
