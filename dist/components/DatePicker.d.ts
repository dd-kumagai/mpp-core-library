import { type InputHTMLAttributes } from "react";
export interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    /** Label text */
    label?: string;
    /** Whether the field is required (shows badge) */
    required?: boolean;
    /** Enable range mode (renders start + end inputs) */
    range?: boolean;
    /** Value for the end date (range mode only) */
    endValue?: string;
    /** Default value for the end date (range mode only) */
    defaultEndValue?: string;
    /** Called when the end date changes (range mode only) */
    onEndChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** Placeholder for the start input */
    startPlaceholder?: string;
    /** Placeholder for the end input */
    endPlaceholder?: string;
}
declare const DatePicker: import("react").ForwardRefExoticComponent<DatePickerProps & import("react").RefAttributes<HTMLInputElement>>;
export { DatePicker };
