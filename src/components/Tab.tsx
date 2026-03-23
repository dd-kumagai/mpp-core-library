import { type ButtonHTMLAttributes, type HTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils.ts";

/* ═══════════════════════════════════════════
   PageTab — Underline-style tab for page navigation
   ═══════════════════════════════════════════ */

export interface PageTabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether this tab is currently selected */
  selected?: boolean;
}

const PageTab = forwardRef<HTMLButtonElement, PageTabProps>(
  ({ className, selected = false, children, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      role="tab"
      aria-selected={selected}
      className={cn(
        "flex items-start px-xs py-2xs font-body font-medium text-lg leading-relaxed whitespace-nowrap cursor-pointer",
        "transition-colors duration-[var(--transition-default)]",
        selected
          ? "border-b-3 border-bg-primary-stronger text-text-primary-stronger"
          : "text-text-default hover:bg-bg-hover",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);
PageTab.displayName = "PageTab";

/* ═══════════════════════════════════════════
   DataTab — Pill-style tab for data filtering
   ═══════════════════════════════════════════ */

export interface DataTabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether this tab is currently selected */
  selected?: boolean;
}

const DataTab = forwardRef<HTMLButtonElement, DataTabProps>(
  ({ className, selected = false, children, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      role="tab"
      aria-selected={selected}
      className={cn(
        "flex items-center justify-center px-sm py-[6px] rounded-round font-body font-medium text-base leading-normal whitespace-nowrap cursor-pointer",
        "transition-colors duration-[var(--transition-default)]",
        selected
          ? "bg-bg-primary-alternative text-text-inverse"
          : "text-text-default hover:bg-bg-hover",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);
DataTab.displayName = "DataTab";

/* ═══════════════════════════════════════════
   MobileTab — Full-width two-tab switcher
   ═══════════════════════════════════════════ */

export interface MobileTabItem {
  label: string;
  value: string;
}

export interface MobileTabProps extends HTMLAttributes<HTMLDivElement> {
  /** The two tab items */
  items: [MobileTabItem, MobileTabItem];
  /** Currently selected value */
  value: string;
  /** Called when a tab is selected */
  onValueChange?: (value: string) => void;
}

const MobileTab = forwardRef<HTMLDivElement, MobileTabProps>(
  ({ className, items, value, onValueChange, ...props }, ref) => (
    <div
      ref={ref}
      role="tablist"
      className={cn("flex items-center w-full", className)}
      {...props}
    >
      {items.map((item) => {
        const isSelected = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => onValueChange?.(item.value)}
            className={cn(
              "flex-1 flex items-center justify-center pb-xs font-heading font-bold text-lg leading-relaxed text-text-default whitespace-nowrap cursor-pointer",
              "border-b-3 border-solid transition-colors duration-[var(--transition-default)]",
              isSelected
                ? "border-bg-input-selected"
                : "border-border-default",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  ),
);
MobileTab.displayName = "MobileTab";

export { PageTab, DataTab, MobileTab };
