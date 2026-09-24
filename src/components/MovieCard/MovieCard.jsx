import cn from "classnames";
import { HeartIcon } from "@components/Icons/HeartIcon/HeartIcon";
import styles from "./MovieCard.module.css";

export function MovieCard({ movie, onToggleFavorite, className = "" }) {
  return (
    <article className={cn(styles["movie-card"], className)}>
      <div className={styles["poster-wrapper"]}>
        <img
          src={movie.poster}
          alt={movie.title}
          className={styles.poster}
          loading="lazy"
        />

        <button
          className={cn(
            styles.favorite,
            movie.isFavorite && styles["is-active"],
          )}
          onClick={() => onToggleFavorite?.(movie.id)}
          aria-label={
            movie.isFavorite ? "Убрать из избранного" : "Добавить в избранное"
          }
        >
          <HeartIcon filled={movie.isFavorite} />
        </button>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{movie.title}</h3>

        <div className={styles.meta}>
          <span className={styles.year}>{movie.year}</span>
          <span className={styles.rating}>★ {movie.rating}</span>
        </div>
      </div>
    </article>
  );
}
