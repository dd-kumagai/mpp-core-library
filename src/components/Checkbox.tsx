import { type InputHTMLAttributes, forwardRef, useId } from "react";
import { cn } from "../lib/utils.ts";
import { Icon } from "../icons/index.ts";

/* ─── Size config ─── */

const sizeConfig = {
  lg: {
    outer: "size-[24px]",
    inner: "size-[20px]",
    iconSize: 24,
    label: "text-lg leading-relaxed",
    gap: "gap-2xs",
    padding: "py-2xs",
  },
  sm: {
    outer: "size-[20px]",
    inner: "size-[18px]",
    iconSize: 20,
    label: "text-base leading-normal shrink-0",
    gap: "gap-[2px]",
    padding: "py-[6px]",
  },
} as const;

/* ─── Component ─── */

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** Label text */
  label?: string;
  /** Size variant */
  size?: "lg" | "sm";
  /** When true the component only takes up the width of its icon + label */
  fit?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, size = "lg", fit = false, id, "aria-label": ariaLabel, ...props }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const config = sizeConfig[size];

    return (
      <label
        htmlFor={inputId}
        className={cn(
          "group inline-flex items-start cursor-pointer",
          fit && "self-start",
          config.gap,
          config.padding,
          "has-[:disabled]:opacity-40 has-[:disabled]:cursor-not-allowed",
          className,
        )}
      >
        {/* Hidden native input */}
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className="sr-only"
          aria-label={!label ? ariaLabel : undefined}
          {...props}
        />

        {/* Custom checkbox indicator */}
        <span
          className={cn(
            "relative shrink-0 flex items-center justify-center",
            config.outer,
          )}
        >
          {/* Unselected box */}
          <span
            className={cn(
              "rounded-sm border-2 border-border-input-strong",
              "group-has-[:checked]:hidden",
              config.inner,
            )}
          />
          {/* Selected box with check */}
          <span
            className={cn(
              "hidden rounded-sm bg-bg-primary-stronger items-center justify-center overflow-clip",
              "group-has-[:checked]:flex",
              config.inner,
            )}
          >
            <Icon
              name="check"
              size={config.iconSize}
              className="text-white"
            />
          </span>
        </span>

        {label && (
          <span
            className={cn(
              "font-body font-normal text-text-default",
              !fit && "min-w-0 flex-1",
              config.label,
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
