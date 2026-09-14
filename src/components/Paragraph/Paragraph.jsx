import cn from "classnames";
import styles from "./Paragraph.module.css";

export const Paragraph = ({
  children,
  size = "md",
  muted = false,
  className = "",
}) => {
  return (
    <p
      className={cn(
        styles.paragraph,
        styles[size],
        muted && styles.muted,
        className,
      )}
    >
      {children}
    </p>
  );
};
