import { LoginIcon } from "@components/Icons/LoginIcon/LoginIcon";
import "./Header.css";

export function Header({ moviesCount = 0, className = "" }) {
  return (
    <header className={`site-header ${className}`}>
      <div className="site-header__inner">
        <a href="/" className="site-header__logo">
          MovieApp
        </a>

        <nav className="site-header__nav">
          <a href="/search" className="site-header__link">
            Поиск фильмов
          </a>

          <a href="/my-movies" className="site-header__link">
            Мои фильмы
            {moviesCount > 0 && (
              <span className="site-header__badge">{moviesCount}</span>
            )}
          </a>

          <a
            href="/login"
            className="site-header__link site-header__link--login"
          >
            <LoginIcon />
            Войти
          </a>
        </nav>
      </div>
    </header>
  );
}
