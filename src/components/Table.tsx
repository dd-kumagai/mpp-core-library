import {
  type HTMLAttributes,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
  forwardRef,
} from "react";
import { cn } from "../lib/utils.ts";
import { Icon } from "../icons/index.ts";

/* ═══════════════════════════════════════════
   Table
   ═══════════════════════════════════════════ */

export interface TableProps extends HTMLAttributes<HTMLTableElement> {}

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => (
    <table
      ref={ref}
      className={cn(
        "table-fixed border-collapse font-body text-base leading-normal text-text-default",
        className,
      )}
      {...props}
    />
  ),
);
Table.displayName = "Table";

/* ═══════════════════════════════════════════
   Thead
   ═══════════════════════════════════════════ */

export interface TheadProps extends HTMLAttributes<HTMLTableSectionElement> {}

const Thead = forwardRef<HTMLTableSectionElement, TheadProps>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn(className)} {...props} />
  ),
);
Thead.displayName = "Thead";

/* ═══════════════════════════════════════════
   Tbody
   ═══════════════════════════════════════════ */

export interface TbodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

const Tbody = forwardRef<HTMLTableSectionElement, TbodyProps>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn(className)} {...props} />
  ),
);
Tbody.displayName = "Tbody";

/* ═══════════════════════════════════════════
   Tr
   ═══════════════════════════════════════════ */

export interface TrProps extends HTMLAttributes<HTMLTableRowElement> {}

const Tr = forwardRef<HTMLTableRowElement, TrProps>(
  ({ className, ...props }, ref) => (
    <tr ref={ref} className={cn(className)} {...props} />
  ),
);
Tr.displayName = "Tr";

/* ═══════════════════════════════════════════
   Th  —  table header cell
   ═══════════════════════════════════════════ */

export interface ThProps extends ThHTMLAttributes<HTMLTableCellElement> {
  /** Optional group subtitle shown above the title */
  subtitle?: string;
  /** Show the sort icon next to the title */
  sortable?: boolean;
  /** Called when a sortable header is clicked */
  onSort?: () => void;
}

const Th = forwardRef<HTMLTableCellElement, ThProps>(
  ({ className, subtitle, sortable = false, onSort, children, ...props }, ref) => {
    const hasChildren =
      children != null && children !== false && children !== "";

    const titleContent = hasChildren && (
      <>
        <span className="font-body font-bold text-base leading-normal text-text-default">
          {children}
        </span>
        {sortable && (
          <Icon
            name="sort"
            size={20}
            className="shrink-0 text-text-default"
          />
        )}
      </>
    );

    return (
      <th
        ref={ref}
        className={cn(
          "bg-blue-95 text-left align-bottom font-normal",
          className,
        )}
        {...props}
      >
        {subtitle && (
          <div className="pl-xs pt-2xs">
            <span className="font-body font-normal text-xs leading-tight text-text-subtle">
              {subtitle}
            </span>
          </div>
        )}
        {hasChildren &&
          (sortable ? (
            <button
              type="button"
              onClick={onSort}
              className="flex items-start px-xs py-2xs w-full cursor-pointer bg-transparent border-none text-left"
            >
              {titleContent}
            </button>
          ) : (
            <div className="flex items-start px-xs py-2xs">
              {titleContent}
            </div>
          ))}
      </th>
    );
  },
);
Th.displayName = "Th";

/* ═══════════════════════════════════════════
   Td  —  table data cell
   ═══════════════════════════════════════════ */

export interface TdProps extends TdHTMLAttributes<HTMLTableCellElement> {}

const Td = forwardRef<HTMLTableCellElement, TdProps>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn(
        "bg-bg-default border-t border-border-default",
        "px-xs py-2xs align-top",
        "font-body font-normal text-base leading-normal text-text-default",
        className,
      )}
      {...props}
    />
  ),
);
Td.displayName = "Td";

/* ═══════════════════════════════════════════
   Exports
   ═══════════════════════════════════════════ */

export { Table, Thead, Tbody, Tr, Th, Td };
