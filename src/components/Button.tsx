import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils.ts";
import { Icon, type IconName } from "../icons/index.ts";

/* ─── Variant definitions ─── */

const buttonVariants = cva(
  /* base */
  [
    "inline-flex items-center justify-center gap-3xs",
    "font-body font-bold",
    "rounded-round overflow-clip",
    "transition-opacity cursor-pointer",
    "disabled:opacity-40 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        filled: [
          "text-text-inverse",
          "shadow-sm",
          "hover:opacity-85 active:opacity-75",
        ],
        outline: [
          "shadow-sm",
          "hover:opacity-85 active:opacity-75",
        ],
        ghost: [
          "hover:opacity-70 active:opacity-60",
        ],
      },
      size: {
        lg: "px-[20px] py-xs text-lg leading-relaxed",
        sm: "px-[20px] py-2xs text-base leading-normal",
      },
    },
    compoundVariants: [
      /* ── Large ── */
      { variant: "filled", size: "lg", className: "bg-bg-primary-stronger" },
      { variant: "outline", size: "lg", className: "bg-bg-default border-2 border-text-primary-stronger text-text-default" },
      { variant: "ghost", size: "lg", className: "text-text-primary-stronger" },

      /* ── Small ── */
      { variant: "filled", size: "sm", className: "bg-bg-primary-alternative" },
      { variant: "outline", size: "sm", className: "border border-border-input-default text-text-default" },
      { variant: "ghost", size: "sm", className: "text-text-default" },
    ],
    defaultVariants: {
      variant: "filled",
      size: "lg",
    },
  },
);

/* ─── Icon leading container map ─── */

const iconLeadingMap: Record<string, { iconSize: number; wrapperW: string; wrapperH: string }> = {
  lg: { iconSize: 24, wrapperW: "w-[20px]", wrapperH: "h-[24px]" },
  sm: { iconSize: 20, wrapperW: "w-[14px]", wrapperH: "h-[20px]" },
};

/* ─── Component ─── */

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Leading icon name from the icon registry */
  leadingIcon?: IconName;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leadingIcon, children, ...props }, ref) => {
    const resolvedSize = size ?? "lg";

    return (
      <button
        ref={ref}
        type="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {leadingIcon && (
          <span
            className={cn(
              "relative shrink-0",
              iconLeadingMap[resolvedSize].wrapperW,
              iconLeadingMap[resolvedSize].wrapperH,
            )}
          >
            <Icon
              name={leadingIcon}
              size={iconLeadingMap[resolvedSize].iconSize}
              className="absolute right-0 top-1/2 -translate-y-1/2 overflow-clip"
            />
          </span>
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
