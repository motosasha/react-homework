import cn from "classnames";
import { MovieCard } from "@components/MovieCard/MovieCard";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid({ movies, onToggleFavorite, className = "" }) {
  if (movies.length === 0) {
    return (
      <div className={cn(styles["movies-grid"], styles.empty)}>
        Фильмы не найдены
      </div>
    );
  }

  return (
    <div className={cn(styles["movies-grid"], className)}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
