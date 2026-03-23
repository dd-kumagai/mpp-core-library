import { forwardRef, type ImgHTMLAttributes } from "react";
import { cn } from "../lib/utils";
import logotypeSrc from "../assets/logotype.svg";
import logomarkSrc from "../assets/logomark.svg";

export interface LogotypeProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  /** Height in pixels. Width scales proportionally. */
  height?: number;
  /** Color variant. "white" renders the logo in white (for dark backgrounds). */
  color?: "default" | "white";
}

export const Logotype = forwardRef<HTMLImageElement, LogotypeProps>(
  ({ height = 32, color = "default", className, alt = "My Pet+", ...props }, ref) => (
    <img
      ref={ref}
      src={logotypeSrc}
      alt={alt}
      className={className}
      style={{
        height,
        width: "auto",
        ...(color === "white" && { filter: "brightness(0) invert(1)" }),
      }}
      {...props}
    />
  ),
);
Logotype.displayName = "Logotype";

export interface LogomarkProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  /** Size in pixels (square). */
  size?: number;
}

export const Logomark = forwardRef<HTMLImageElement, LogomarkProps>(
  ({ size = 40, className, alt = "My Pet+", ...props }, ref) => (
    <img
      ref={ref}
      src={logomarkSrc}
      alt={alt}
      width={size}
      height={size}
      className={cn("rounded-md", className)}
      style={{ width: size, height: size }}
      {...props}
    />
  ),
);
Logomark.displayName = "Logomark";
