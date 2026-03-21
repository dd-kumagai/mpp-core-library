import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils.ts";
import { Icon, type IconName } from "../icons/index.ts";

/* ─── Variant definitions ─── */

const floatingButtonVariants = cva(
  [
    "inline-flex items-center justify-center gap-3xs",
    "font-body font-bold text-lg leading-relaxed text-text-inverse",
    "rounded-round overflow-clip",
    "shadow-md",
    "transition-opacity cursor-pointer",
    "hover:opacity-85 active:opacity-75",
    "disabled:opacity-40 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      size: {
        lg: "px-[20px] py-sm",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  },
);

/* ─── Component ─── */

export interface FloatingButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof floatingButtonVariants> {
  /** Leading icon name (required for floating buttons) */
  leadingIcon: IconName;
}

const FloatingButton = forwardRef<HTMLButtonElement, FloatingButtonProps>(
  ({ className, size, leadingIcon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          floatingButtonVariants({ size, className }),
          "bg-bg-secondary-strong",
        )}
        {...props}
      >
        <span className="relative shrink-0 w-[20px] h-[24px]">
          <Icon
            name={leadingIcon}
            size={24}
            className="absolute right-0 top-1/2 -translate-y-1/2 overflow-clip"
          />
        </span>
        {children}
      </button>
    );
  },
);

FloatingButton.displayName = "FloatingButton";

export { FloatingButton, floatingButtonVariants };
