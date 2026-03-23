import { type ButtonHTMLAttributes, type HTMLAttributes } from "react";
export interface PageTabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Whether this tab is currently selected */
    selected?: boolean;
}
declare const PageTab: import("react").ForwardRefExoticComponent<PageTabProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface DataTabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Whether this tab is currently selected */
    selected?: boolean;
}
declare const DataTab: import("react").ForwardRefExoticComponent<DataTabProps & import("react").RefAttributes<HTMLButtonElement>>;
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
declare const MobileTab: import("react").ForwardRefExoticComponent<MobileTabProps & import("react").RefAttributes<HTMLDivElement>>;
export { PageTab, DataTab, MobileTab };
