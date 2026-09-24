import cn from "classnames";
import { LoginIcon } from "@components/Icons/LoginIcon/LoginIcon";
import { Button } from "@components/Button/Button";
import type { Profile } from "@utils/auth";
import styles from "./Header.module.css";

interface HeaderProps {
  moviesCount?: number;
  user?: Profile | null;
  onLogout?: () => void;
  className?: string;
}

export function Header({
  moviesCount = 0,
  user = null,
  onLogout,
  className = "",
}: HeaderProps) {
  return (
    <header className={cn(styles["site-header"], className)}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          MovieApp
        </a>

        <nav className={styles.nav}>
          <a href="/search" className={styles.link}>
            Поиск фильмов
          </a>

          <a href="/my-movies" className={styles.link}>
            Мои фильмы
            {moviesCount > 0 && (
              <span className={styles.badge}>{moviesCount}</span>
            )}
          </a>

          {user ? (
            <div className={styles.user}>
              <span className={styles.userName}>{user.name}</span>
              <Button variant="ghost" size="sm" onClick={onLogout}>
                Выйти
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              <LoginIcon />
              Войти
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
