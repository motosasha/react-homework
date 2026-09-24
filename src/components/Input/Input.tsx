import cn from "classnames";
import type { InputHTMLAttributes, ReactNode, Ref } from "react";
import styles from "./Input.module.css";

type IconPosition = "left" | "right";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  name?: string;
  className?: string;
}

export function Input({
  ref,
  icon,
  iconPosition = "left",
  name,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className={cn(styles.wrapper, className)}>
      {icon && iconPosition === "left" && (
        <span className={cn(styles.icon, styles["icon-left"])}>{icon}</span>
      )}

      <input
        ref={ref}
        name={name}
        className={cn(
          styles.input,
          icon ?
            styles[
              `with-icon${iconPosition === "left" ? "-left" : "-right"}` as keyof typeof styles
            ]
          : undefined,
        )}
        {...props}
      />

      {icon && iconPosition === "right" && (
        <span className={cn(styles.icon, styles["icon-right"])}>{icon}</span>
      )}
    </div>
  );
}
