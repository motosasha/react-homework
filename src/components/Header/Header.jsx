import cn from "classnames";
import { LoginIcon } from "@components/Icons/LoginIcon/LoginIcon";
import styles from "./Header.module.css";

export function Header({ moviesCount = 0, className = "" }) {
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

          <a href="/login" className={cn(styles.link, styles["link--login"])}>
            <LoginIcon />
            Войти
          </a>
        </nav>
      </div>
    </header>
  );
}
