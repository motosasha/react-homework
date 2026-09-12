import cn from "classnames";
import { Header } from "@components/Header/Header";
import styles from "./Layout.module.css";

export function Layout({ children, moviesCount = 0, className = "" }) {
  return (
    <div className={cn(styles.layout, className)}>
      <Header moviesCount={moviesCount} />
      <main className={styles.content}>{children}</main>
    </div>
  );
}
