import { type InputHTMLAttributes, forwardRef, useId, useCallback } from "react";
import { cn } from "../lib/utils.ts";
import { Icon } from "../icons/index.ts";

/* ─── Component ─── */

export interface StepperProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  /** Current value */
  value?: number;
  /** Default value (uncontrolled) */
  defaultValue?: number;
  /** Called when the value changes */
  onChange?: (value: number) => void;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
}

const Stepper = forwardRef<HTMLInputElement, StepperProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue = 0,
      onChange,
      min,
      max,
      step = 1,
      disabled = false,
      id,
      ...props
    },
    ref,
  ) => {
    const autoId = useId();
    const inputId = id ?? autoId;

    const isControlled = controlledValue !== undefined;
    const displayValue = isControlled ? controlledValue : undefined;

    const clamp = useCallback(
      (v: number) => {
        let clamped = v;
        if (min !== undefined) clamped = Math.max(min, clamped);
        if (max !== undefined) clamped = Math.min(max, clamped);
        return clamped;
      },
      [min, max],
    );

    const handleStep = useCallback(
      (direction: 1 | -1) => {
        if (disabled) return;

        if (isControlled) {
          onChange?.(clamp(controlledValue + step * direction));
        } else {
          const input = document.getElementById(inputId) as HTMLInputElement;
          if (!input) return;
          const current = Number(input.value) || 0;
          const next = clamp(current + step * direction);
          // Use native setter to trigger React's change detection
          const nativeSetter = Object.getOwnPropertyDescriptor(
            HTMLInputElement.prototype,
            "value",
          )?.set;
          nativeSetter?.call(input, String(next));
          input.dispatchEvent(new Event("input", { bubbles: true }));
          onChange?.(next);
        }
      },
      [isControlled, controlledValue, onChange, clamp, step, disabled, inputId],
    );

    return (
      <div
        className={cn(
          "inline-flex items-center",
          "bg-input-subtle border border-border-input-default rounded-md",
          "transition-colors",
          disabled && "opacity-40 cursor-not-allowed",
          className,
        )}
      >
        <button
          type="button"
          aria-label="減らす"
          tabIndex={-1}
          disabled={disabled}
          onClick={() => handleStep(-1)}
          className={cn(
            "inline-flex items-center justify-center p-2xs",
            "cursor-pointer transition-opacity",
            "hover:opacity-70 active:opacity-60",
            "disabled:cursor-not-allowed disabled:opacity-40",
          )}
        >
          <Icon name="minus" size={24} className="shrink-0 text-text-default" />
        </button>

        <input
          ref={ref}
          id={inputId}
          type="text"
          inputMode="numeric"
          className={cn(
            "w-[40px] bg-transparent text-center",
            "font-body font-normal text-lg leading-relaxed text-text-default",
            "focus:outline-none",
            "disabled:cursor-not-allowed",
          )}
          value={displayValue}
          defaultValue={isControlled ? undefined : defaultValue}
          disabled={disabled}
          readOnly
          {...props}
        />

        <button
          type="button"
          aria-label="増やす"
          tabIndex={-1}
          disabled={disabled}
          onClick={() => handleStep(1)}
          className={cn(
            "inline-flex items-center justify-center p-2xs",
            "cursor-pointer transition-opacity",
            "hover:opacity-70 active:opacity-60",
            "disabled:cursor-not-allowed disabled:opacity-40",
          )}
        >
          <Icon name="plus" size={24} className="shrink-0 text-text-default" />
        </button>
      </div>
    );
  },
);

Stepper.displayName = "Stepper";

export { Stepper };
