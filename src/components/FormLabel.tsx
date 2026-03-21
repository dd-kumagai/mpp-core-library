import { type LabelHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils.ts";

export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** The label text */
  label: string;
  /** Optional helper text shown below the label */
  helper?: string;
  /** Whether to show the required badge */
  required?: boolean;
}

const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, label, helper, required = false, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn("flex flex-col items-start", className)}
        {...props}
      >
        <span className="flex items-center gap-2xs">
          <span className="font-body font-bold text-base leading-normal text-text-default">
            {label}
          </span>
          {required && (
            <span className="inline-flex items-center justify-center bg-red-55 px-2xs py-px rounded-sm">
              <span className="font-body font-bold text-xs leading-tight text-text-inverse">
                必須
              </span>
            </span>
          )}
        </span>
        {helper && (
          <p className="font-body text-sm leading-relaxed text-text-subtle">
            {helper}
          </p>
        )}
      </label>
    );
  },
);

FormLabel.displayName = "FormLabel";

export { FormLabel };
