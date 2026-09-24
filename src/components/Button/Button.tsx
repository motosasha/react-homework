import cn from "classnames";
import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "sm" | "md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: Ref<HTMLButtonElement>;
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export function Button({
  ref,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      ref={ref}
      className={cn(styles.button, styles[variant], styles[size], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
