import cn from "classnames";
import styles from "./Title.module.css";

export const Title = ({
  children,
  as: Tag = "h2",
  size = "md",
  className = "",
}) => {
  return (
    <Tag className={cn(styles.title, styles[size], className)}>{children}</Tag>
  );
};
