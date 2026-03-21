import { type InputHTMLAttributes, forwardRef, useId } from "react";
import { cn } from "../lib/utils.ts";
import { Icon } from "../icons/index.ts";

/* ─── Component ─── */

export interface SearchFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  ({ className, id, ...props }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;

    return (
      <div
        className={cn(
          "relative flex items-center",
          "bg-input-subtle rounded-[6px]",
          "ring-1 ring-inset ring-border-input-default",
          "focus-within:ring-2 focus-within:ring-border-focus",
          "transition-shadow",
          className,
        )}
      >
        <input
          ref={ref}
          id={inputId}
          type="search"
          className={cn(
            "flex-1 min-w-0 bg-transparent pl-[10px] pr-[40px] h-[36px]",
            "font-body font-normal text-lg leading-relaxed text-text-default",
            "placeholder:text-text-subtle",
            "focus:outline-none",
            "disabled:opacity-40 disabled:cursor-not-allowed",
          )}
          {...props}
        />
        <Icon
          name="search"
          size={24}
          className="pointer-events-none absolute right-2xs top-1/2 -translate-y-1/2 text-text-primary-strong"
        />
      </div>
    );
  },
);

SearchField.displayName = "SearchField";

export { SearchField };
