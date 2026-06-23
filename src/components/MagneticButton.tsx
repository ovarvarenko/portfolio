import { useRef, type AnchorHTMLAttributes, type ReactNode } from "react";
import { useMagnetic } from "../hooks/useMagnetic";
import "./MagneticButton.css";

interface MagneticButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "solid" | "outline";
}

export function MagneticButton({
  children,
  variant = "outline",
  className = "",
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  useMagnetic(ref);

  return (
    <a
      ref={ref}
      className={`magnetic-btn magnetic-btn--${variant} ${className}`.trim()}
      {...rest}
    >
      <span>{children}</span>
    </a>
  );
}
