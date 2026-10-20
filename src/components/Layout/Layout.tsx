import { Outlet, useNavigation } from "react-router";
import cn from "classnames";
import { Header } from "@components/Header/Header";
import { useAuth } from "@context/auth-context";
import { movies } from "@data/movies.data";
import styles from "./Layout.module.css";

interface LayoutProps {
	className?: string;
}

export function Layout({ className = "" }: LayoutProps) {
	const { user, logout } = useAuth();
	const navigation = useNavigation();

	const moviesCount = movies.filter((m) => m.isFavorite).length;

	return (
		<div className={cn(styles.layout, className)}>
			<Header moviesCount={moviesCount} user={user} onLogout={logout} />
			<main className={styles.content}>
				{navigation.state === "loading" && (
					<div className={styles.progress} role="progressbar" aria-label="Загрузка" />
				)}
				<Outlet />
			</main>
		</div>
	);
}
