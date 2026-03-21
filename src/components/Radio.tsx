import { type InputHTMLAttributes, forwardRef, useId } from "react";
import { cn } from "../lib/utils.ts";

/* ─── Size config ─── */

const sizeConfig = {
  lg: {
    outer: "size-[24px]",
    inner: "size-[20px]",
    dot: "size-[12px]",
    label: "text-lg leading-relaxed",
    gap: "gap-2xs",
    padding: "py-2xs",
  },
  sm: {
    outer: "size-[20px]",
    inner: "size-[18px]",
    dot: "size-[10px]",
    label: "text-base leading-normal shrink-0",
    gap: "gap-[2px]",
    padding: "py-[6px]",
  },
} as const;

/* ─── Component ─── */

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** Label text */
  label?: string;
  /** Size variant */
  size?: "lg" | "sm";
  /** When true the component only takes up the width of its icon + label */
  fit?: boolean;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
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
          type="radio"
          className="sr-only"
          aria-label={!label ? ariaLabel : undefined}
          {...props}
        />

        {/* Custom radio indicator */}
        <span
          className={cn(
            "relative shrink-0 flex items-center justify-center",
            config.outer,
          )}
        >
          {/* Unselected circle */}
          <span
            className={cn(
              "rounded-round border-2 border-border-input-strong",
              "group-has-[:checked]:hidden",
              config.inner,
            )}
          />
          {/* Selected circle with blue ring and blue dot */}
          <span
            className={cn(
              "hidden rounded-round border-2 border-bg-primary-stronger items-center justify-center",
              "group-has-[:checked]:flex",
              config.inner,
            )}
          >
            <span
              className={cn(
                "rounded-round bg-bg-primary-stronger",
                config.dot,
              )}
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

Radio.displayName = "Radio";

export { Radio };
