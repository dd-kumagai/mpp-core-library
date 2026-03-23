import { type HTMLAttributes } from "react";
import { type IconName } from "../icons/index.ts";
export interface TagProps extends HTMLAttributes<HTMLDivElement> {
    /** Label text */
    label: string;
    /** Optional leading icon */
    leadingIcon?: IconName;
    /** Show a dismiss button (renders an IconButton sm with the clear icon) */
    dismissible?: boolean;
    /** Called when the dismiss button is clicked */
    onDismiss?: () => void;
}
declare const Tag: import("react").ForwardRefExoticComponent<TagProps & import("react").RefAttributes<HTMLDivElement>>;
export { Tag };
