import { type InputHTMLAttributes } from "react";
export interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
}
declare const SearchField: import("react").ForwardRefExoticComponent<SearchFieldProps & import("react").RefAttributes<HTMLInputElement>>;
export { SearchField };
