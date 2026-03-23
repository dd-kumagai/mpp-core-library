import { type InputHTMLAttributes } from "react";
export interface StepperProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
    /** Current value */
    value?: number;
    /** Default value (uncontrolled) */
    defaultValue?: number;
    /** Called when the value changes */
    onChange?: (value: number) => void;
    /** Minimum value */
    min?: number;
    /** Maximum value */
    max?: number;
    /** Step increment */
    step?: number;
}
declare const Stepper: import("react").ForwardRefExoticComponent<StepperProps & import("react").RefAttributes<HTMLInputElement>>;
export { Stepper };
