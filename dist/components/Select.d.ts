import { type SelectHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
declare const selectWrapperVariants: (props?: ({
    layout?: "inline" | "vertical" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface SelectOption {
    value: string;
    label: string;
}
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, VariantProps<typeof selectWrapperVariants> {
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
declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLSelectElement>>;
export { Select, selectWrapperVariants };
