import { type ButtonHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { type IconName } from "../icons/index.ts";
declare const floatingButtonVariants: (props?: ({
    size?: "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface FloatingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof floatingButtonVariants> {
    /** Leading icon name (required for floating buttons) */
    leadingIcon: IconName;
}
declare const FloatingButton: import("react").ForwardRefExoticComponent<FloatingButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export { FloatingButton, floatingButtonVariants };
