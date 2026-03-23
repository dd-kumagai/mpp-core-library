import { type SVGProps } from "react";
/**
 * All available icon names in the design system.
 *
 * To add a new icon:
 * 1. Add the SVG data to iconRegistry.ts
 * 2. Add the icon name to this type union
 * 3. Add the mapping entry in iconRegistry.ts nameToHash map
 */
export type IconName = "search" | "heart" | "heart_paw" | "chevron_right" | "star" | "chevron_left" | "caret_down" | "caret_up" | "chat" | "paw" | "pen" | "success" | "tag" | "clear" | "star_paw" | "clip_paw" | "crown" | "home" | "home_paw" | "external" | "plus" | "minus" | "list" | "chat_bubble" | "images" | "image" | "album" | "check" | "list_circle" | "sort" | "cart" | "bone" | "chevron_down" | "chevron_up" | "eye" | "balloon" | "bell" | "crown_outline" | "cup" | "bag" | "scissors" | "hospital" | "hospital_night" | "dogrun" | "calendar" | "clock" | "walk" | "pill" | "shot" | "setting" | "question" | "info" | "change" | "pin" | "pin_wanpass" | "crop" | "brightness" | "face" | "user" | "menu" | "mail";
export interface IconProps extends SVGProps<SVGSVGElement> {
    /** The name of the icon to render */
    name: IconName;
    /** Icon size in pixels (applies to both width and height). Defaults to 24. */
    size?: number;
}
/**
 * Icon component for the design system.
 *
 * Renders an inline SVG icon that inherits the current text color via `currentColor`.
 * Icons are sourced from the icon registry and rendered at the specified size
 * while preserving their original viewBox proportions.
 *
 * @example
 * ```tsx
 * <Icon name="search" />
 * <Icon name="heart" size={32} className="text-red-500" />
 * <Icon name="chevron_right" size={16} aria-hidden />
 * ```
 */
export declare function Icon({ name, size, className, ...props }: IconProps): import("react/jsx-runtime").JSX.Element | null;
