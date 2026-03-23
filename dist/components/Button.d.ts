import { type ButtonHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { type IconName } from "../icons/index.ts";
declare const buttonVariants: (props?: ({
    variant?: "filled" | "outline" | "ghost" | null | undefined;
    size?: "lg" | "sm" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    /** Leading icon name from the icon registry */
    leadingIcon?: IconName;
}
declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
