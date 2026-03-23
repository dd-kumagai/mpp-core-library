import { type InputHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
declare const inputVariants: (props?: ({
    layout?: "inline" | "vertical" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    /** Label text */
    label?: string;
    /** Helper text below the label */
    helper?: string;
    /** Whether the field is required (shows badge) */
    required?: boolean;
}
declare const TextField: import("react").ForwardRefExoticComponent<TextFieldProps & import("react").RefAttributes<HTMLInputElement>>;
export { TextField, inputVariants };
