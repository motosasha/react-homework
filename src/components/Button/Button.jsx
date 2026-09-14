import cn from "classnames";
import styles from "./Button.module.css";

export const Button = ({
  ref,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  ...props
}) => {
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
};
