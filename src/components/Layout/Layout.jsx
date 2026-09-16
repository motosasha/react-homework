import cn from "classnames";
import { Header } from "@components/Header/Header";
import { useAuth } from "@context/AuthContext";
import styles from "./Layout.module.css";

export function Layout({ children, moviesCount = 0, className = "" }) {
  const { user, logout } = useAuth();

  return (
    <div className={cn(styles.layout, className)}>
      <Header moviesCount={moviesCount} user={user} onLogout={logout} />
      <main className={styles.content}>{children}</main>
    </div>
  );
}
