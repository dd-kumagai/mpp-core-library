import { type InputHTMLAttributes, forwardRef, useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils.ts";
import { FormLabel } from "./FormLabel.tsx";

/* ─── Input field variants ─── */

const inputVariants = cva(
  [
    "bg-input-subtle",
    "ring-1 ring-inset ring-border-input-default",
    "font-body font-normal text-text-default",
    "placeholder:text-text-subtle",
    "transition-shadow",
    "focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none",
    "disabled:opacity-40 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      layout: {
        vertical: "w-full px-[10px] rounded-md text-lg leading-relaxed h-[44px]",
        inline: "flex-1 min-w-0 px-[10px] rounded-sm text-base leading-normal h-[36px]",
      },
    },
    defaultVariants: {
      layout: "vertical",
    },
  },
);

/* ─── Component ─── */

export interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  /** Label text */
  label?: string;
  /** Helper text below the label */
  helper?: string;
  /** Whether the field is required (shows badge) */
  required?: boolean;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      layout,
      label,
      helper,
      required = false,
      id,
      ...props
    },
    ref,
  ) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const resolvedLayout = layout ?? "vertical";

    const isVertical = resolvedLayout === "vertical";

    return (
      <div
        className={cn(
          isVertical
            ? "flex flex-col gap-3xs items-start"
            : "flex items-center gap-2xs",
          className,
        )}
      >
        {label && (
          <FormLabel
            label={label}
            helper={isVertical ? helper : undefined}
            required={required}
            htmlFor={inputId}
            className={isVertical ? "w-full" : "shrink-0"}
          />
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(inputVariants({ layout }))}
          required={required}
          {...props}
        />
      </div>
    );
  },
);

TextField.displayName = "TextField";

export { TextField, inputVariants };
