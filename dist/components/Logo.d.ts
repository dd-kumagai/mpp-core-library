import { type ImgHTMLAttributes } from "react";
export interface LogotypeProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
    /** Height in pixels. Width scales proportionally. */
    height?: number;
    /** Color variant. "white" renders the logo in white (for dark backgrounds). */
    color?: "default" | "white";
}
export declare const Logotype: import("react").ForwardRefExoticComponent<LogotypeProps & import("react").RefAttributes<HTMLImageElement>>;
export interface LogomarkProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
    /** Size in pixels (square). */
    size?: number;
}
export declare const Logomark: import("react").ForwardRefExoticComponent<LogomarkProps & import("react").RefAttributes<HTMLImageElement>>;
