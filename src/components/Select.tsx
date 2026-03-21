import { type SelectHTMLAttributes, forwardRef, useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils.ts";
import { Icon } from "../icons/index.ts";
import { FormLabel } from "./FormLabel.tsx";

/* ─── Select field variants ─── */

const selectWrapperVariants = cva(
  ["relative"],
  {
    variants: {
      layout: {
        vertical: "",
        inline: "flex-1 min-w-0",
      },
    },
    defaultVariants: {
      layout: "vertical",
    },
  },
);

const selectBaseClasses = [
  "appearance-none w-full",
  "bg-input-subtle",
  "ring-1 ring-inset ring-border-input-default",
  "font-body font-normal text-text-default",
  "transition-shadow",
  "focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none",
  "disabled:opacity-40 disabled:cursor-not-allowed",
].join(" ");

const selectLayoutClasses = {
  vertical: "px-[10px] pr-[40px] rounded-md text-lg leading-relaxed h-[44px]",
  inline: "pl-[10px] pr-[32px] rounded-sm text-base leading-normal h-[36px]",
} as const;

/* ─── Component ─── */

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectWrapperVariants> {
  /** Label text */
  label?: string;
  /** Helper text below the label */
  helper?: string;
  /** Whether the field is required (shows badge) */
  required?: boolean;
  /** Placeholder text when no value is selected */
  placeholder?: string;
  /** Options to render */
  options?: SelectOption[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      layout,
      label,
      helper,
      required = false,
      placeholder,
      options = [],
      children,
      id,
      ...props
    },
    ref,
  ) => {
    const autoId = useId();
    const selectId = id ?? autoId;
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
            htmlFor={selectId}
            className={isVertical ? "w-full" : "shrink-0"}
          />
        )}
        <div className={cn(selectWrapperVariants({ layout }))}>
          <select
            ref={ref}
            id={selectId}
            required={required}
            className={cn(selectBaseClasses, selectLayoutClasses[resolvedLayout])}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
            {children}
          </select>
          <Icon
            name="caret_down"
            size={24}
            className={cn(
              "pointer-events-none absolute top-1/2 -translate-y-1/2 text-text-default",
              isVertical ? "right-[10px]" : "right-[4px]",
            )}
          />
        </div>
      </div>
    );
  },
);

Select.displayName = "Select";

export { Select, selectWrapperVariants };
