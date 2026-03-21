import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils.ts";
import { Icon, type IconName } from "../icons/index.ts";

const iconButtonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-md",
    "transition-opacity cursor-pointer",
    "hover:opacity-70 active:opacity-60",
    "disabled:opacity-40 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      size: {
        lg: "p-xs",
        md: "p-2xs",
        sm: "p-[6px]",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  },
);

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label">,
    VariantProps<typeof iconButtonVariants> {
  /** Icon name from the icon registry */
  icon: IconName;
  /** Accessible label (required — icon-only buttons have no visible text) */
  "aria-label": string;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size, icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(iconButtonVariants({ size, className }))}
        {...props}
      >
        <Icon name={icon} size={24} className="shrink-0" />
      </button>
    );
  },
);

IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };
