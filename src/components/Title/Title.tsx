import cn from "classnames";
import type { ElementType, ReactNode } from "react";
import styles from "./Title.module.css";

type TitleSize = "sm" | "md" | "lg";

interface TitleProps {
  children: ReactNode;
  as?: ElementType;
  size?: TitleSize;
  className?: string;
}

export function Title({
  children,
  as: Tag = "h2",
  size = "md",
  className = "",
}: TitleProps) {
  return (
    <Tag className={cn(styles.title, styles[size], className)}>{children}</Tag>
  );
}
