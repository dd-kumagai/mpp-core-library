import { type InputHTMLAttributes } from "react";
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
    /** Label text */
    label?: string;
    /** Size variant */
    size?: "lg" | "sm";
    /** When true the component only takes up the width of its icon + label */
    fit?: boolean;
}
declare const Radio: import("react").ForwardRefExoticComponent<RadioProps & import("react").RefAttributes<HTMLInputElement>>;
export { Radio };
