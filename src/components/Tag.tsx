import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils.ts";
import { Icon, type IconName } from "../icons/index.ts";
import { IconButton } from "./IconButton.tsx";

/* ─── Component ─── */

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

const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    { className, label, leadingIcon, dismissible = false, onDismiss, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center bg-bg-neutral rounded-round",
          dismissible ? "pl-sm pr-[2px]" : "px-sm py-2xs",
          className,
        )}
        {...props}
      >
        {/* Content: icon + label */}
        <div className="flex items-center gap-[2px]">
          {leadingIcon && (
            <span className="relative shrink-0 w-[16px] h-[20px]">
              <Icon
                name={leadingIcon}
                size={20}
                className="absolute right-0 top-1/2 -translate-y-1/2 overflow-clip text-text-default"
              />
            </span>
          )}
          <span className="font-body font-medium text-base leading-normal text-text-default text-center shrink-0">
            {label}
          </span>
        </div>

        {/* Dismiss button */}
        {dismissible && (
          <IconButton
            icon="clear"
            size="sm"
            className="text-text-default"
            onClick={onDismiss}
            aria-label={`${label}を削除`}
          />
        )}
      </div>
    );
  },
);

Tag.displayName = "Tag";

export { Tag };
