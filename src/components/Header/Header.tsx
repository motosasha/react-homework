import { Link, NavLink } from "react-router";
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

const linkClassName = ({ isActive }: { isActive: boolean }) =>
	cn(styles.link, { [styles["link--active"]]: isActive });

export function Header({ moviesCount = 0, user = null, onLogout, className = "" }: HeaderProps) {
	return (
		<header className={cn(styles["site-header"], className)}>
			<div className={styles.inner}>
				<Link to="/" className={styles.logo}>
					MovieApp
				</Link>

				<nav className={styles.nav}>
					<NavLink to="/" end className={linkClassName}>
						Поиск фильмов
					</NavLink>

					{user && (
						<NavLink to="/favorites" className={linkClassName}>
							Мои фильмы
							{moviesCount > 0 && <span className={styles.badge}>{moviesCount}</span>}
						</NavLink>
					)}

					{user ? (
						<div className={styles.user}>
							<span className={styles.userName}>{user.name}</span>
							<Button variant="ghost" size="sm" onClick={onLogout}>
								Выйти
							</Button>
						</div>
					) : (
						<NavLink to="/login" className={linkClassName}>
							<LoginIcon />
							Войти
						</NavLink>
					)}
				</nav>
			</div>
		</header>
	);
}
