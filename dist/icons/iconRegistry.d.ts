import type { IconName } from "./Icon.tsx";
interface IconData {
    /** The SVG viewBox attribute value */
    viewBox: string;
    /** The inner SVG content (paths, groups, etc.) */
    content: string;
}
/**
 * Registry mapping icon names to their SVG data.
 *
 * Each entry contains the original viewBox dimensions and the inner SVG content
 * with fills set to "currentColor" so icons inherit the parent text color.
 *
 * To add a new icon:
 * 1. Export the SVG from Figma
 * 2. Extract the viewBox and inner content
 * 3. Replace solid color fills with "currentColor"
 * 4. Add the entry below and update the IconName type in Icon.tsx
 */
export declare const iconRegistry: Record<IconName, IconData>;
export {};
