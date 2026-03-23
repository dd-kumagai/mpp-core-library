import { type HTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
declare const badgeVariants: (props?: ({
    color?: "neutral" | "blue" | "green" | "yellow" | "orange" | "red" | null | undefined;
    variant?: "subtle" | "strong" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, "color">, VariantProps<typeof badgeVariants> {
    /** Badge label text */
    label: string;
}
declare const Badge: import("react").ForwardRefExoticComponent<BadgeProps & import("react").RefAttributes<HTMLSpanElement>>;
export { Badge, badgeVariants };
