import { type ButtonHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { type IconName } from "../icons/index.ts";
declare const iconButtonVariants: (props?: ({
    size?: "lg" | "sm" | "md" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label">, VariantProps<typeof iconButtonVariants> {
    /** Icon name from the icon registry */
    icon: IconName;
    /** Accessible label (required — icon-only buttons have no visible text) */
    "aria-label": string;
}
declare const IconButton: import("react").ForwardRefExoticComponent<IconButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export { IconButton, iconButtonVariants };
