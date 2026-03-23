import { type LabelHTMLAttributes } from "react";
export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    /** The label text */
    label: string;
    /** Optional helper text shown below the label */
    helper?: string;
    /** Whether to show the required badge */
    required?: boolean;
}
declare const FormLabel: import("react").ForwardRefExoticComponent<FormLabelProps & import("react").RefAttributes<HTMLLabelElement>>;
export { FormLabel };
