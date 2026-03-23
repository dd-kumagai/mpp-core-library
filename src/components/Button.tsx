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
    "rounded-round overflow-clip relative",
    "transition-all duration-[var(--transition-default)] cursor-pointer",
    "disabled:opacity-40 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        filled: [
          "text-text-inverse",
          "bg-[image:none] hover:bg-[image:linear-gradient(var(--color-bg-hover),var(--color-bg-hover))]",
        ],
        outline: [
          "hover:bg-bg-hover",
        ],
        ghost: [
          "hover:bg-bg-hover",
        ],
      },
      size: {
        lg: "px-[20px] py-xs text-lg leading-relaxed shadow-md",
        sm: "px-[20px] py-2xs text-base leading-normal shadow-sm",
      },
    },
    compoundVariants: [
      /* ── Large ── */
      { variant: "filled", size: "lg", className: "bg-bg-primary-stronger" },
      { variant: "outline", size: "lg", className: "bg-bg-default border-2 border-text-primary-stronger text-text-default" },
      { variant: "ghost", size: "lg", className: "text-text-primary-stronger shadow-none" },

      /* ── Small ── */
      { variant: "filled", size: "sm", className: "bg-bg-primary-alternative" },
      { variant: "outline", size: "sm", className: "border border-border-input-default text-text-default" },
      { variant: "ghost", size: "sm", className: "text-text-default shadow-none" },
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
