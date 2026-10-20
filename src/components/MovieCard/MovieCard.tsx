import { Link } from "react-router";
import cn from "classnames";
import { HeartIcon } from "@components/Icons/HeartIcon/HeartIcon";
import { useAuth } from "@context/auth-context";
import type { Movie } from "@data/movies.data";
import styles from "./MovieCard.module.css";

interface MovieCardProps {
	movie: Movie;
	onToggleFavorite?: (id: number) => void;
	className?: string;
}

export function MovieCard({ movie, onToggleFavorite, className = "" }: MovieCardProps) {
	const { user } = useAuth();

	return (
		<article className={cn(styles["movie-card"], className)}>
			<div className={styles["poster-wrapper"]}>
				<Link to={`/movie/${movie.id}`}>
					<img src={movie.poster} alt={movie.title} className={styles.poster} loading="lazy" />
				</Link>

				{user && (
					<button
						className={cn(styles.favorite, movie.isFavorite && styles["is-active"])}
						onClick={() => onToggleFavorite?.(movie.id)}
						aria-label={movie.isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
					>
						<HeartIcon filled={movie.isFavorite} />
					</button>
				)}
			</div>

			<div className={styles.body}>
				<h3 className={styles.title}>
					<Link to={`/movie/${movie.id}`} className={styles.link}>
						{movie.title}
					</Link>
				</h3>

				<div className={styles.meta}>
					<span className={styles.year}>{movie.year}</span>
					<span className={styles.rating}>★ {movie.rating}</span>
				</div>
			</div>
		</article>
	);
}
