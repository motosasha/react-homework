import cn from "classnames";
import type { ReactNode } from "react";
import styles from "./Paragraph.module.css";

type ParagraphSize = "sm" | "md" | "lg";

interface ParagraphProps {
  children: ReactNode;
  size?: ParagraphSize;
  muted?: boolean;
  className?: string;
}

export function Paragraph({
  children,
  size = "md",
  muted = false,
  className = "",
}: ParagraphProps) {
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
}
