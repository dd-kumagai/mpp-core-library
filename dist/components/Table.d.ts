import { type HTMLAttributes, type TdHTMLAttributes, type ThHTMLAttributes } from "react";
export interface TableProps extends HTMLAttributes<HTMLTableElement> {
}
declare const Table: import("react").ForwardRefExoticComponent<TableProps & import("react").RefAttributes<HTMLTableElement>>;
export interface TheadProps extends HTMLAttributes<HTMLTableSectionElement> {
}
declare const Thead: import("react").ForwardRefExoticComponent<TheadProps & import("react").RefAttributes<HTMLTableSectionElement>>;
export interface TbodyProps extends HTMLAttributes<HTMLTableSectionElement> {
}
declare const Tbody: import("react").ForwardRefExoticComponent<TbodyProps & import("react").RefAttributes<HTMLTableSectionElement>>;
export interface TrProps extends HTMLAttributes<HTMLTableRowElement> {
}
declare const Tr: import("react").ForwardRefExoticComponent<TrProps & import("react").RefAttributes<HTMLTableRowElement>>;
export interface ThProps extends ThHTMLAttributes<HTMLTableCellElement> {
    /** Optional group subtitle shown above the title */
    subtitle?: string;
    /** Show the sort icon next to the title */
    sortable?: boolean;
    /** Called when a sortable header is clicked */
    onSort?: () => void;
}
declare const Th: import("react").ForwardRefExoticComponent<ThProps & import("react").RefAttributes<HTMLTableCellElement>>;
export interface TdProps extends TdHTMLAttributes<HTMLTableCellElement> {
}
declare const Td: import("react").ForwardRefExoticComponent<TdProps & import("react").RefAttributes<HTMLTableCellElement>>;
export { Table, Thead, Tbody, Tr, Th, Td };
