import cn from "classnames";
import styles from "./Input.module.css";

export const Input = ({
  icon,
  iconPosition = "left",
  name,
  className = "",
  ...props
}) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      {icon && iconPosition === "left" && (
        <span className={cn(styles.icon, styles["icon-left"])}>{icon}</span>
      )}

      <input
        name={name}
        className={cn(
          styles.input,
          icon &&
            styles[`with-icon${iconPosition === "left" ? "-left" : "-right"}`],
        )}
        {...props}
      />

      {icon && iconPosition === "right" && (
        <span className={cn(styles.icon, styles["icon-right"])}>{icon}</span>
      )}
    </div>
  );
};
