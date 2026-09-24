import cn from "classnames";
import { MovieCard } from "@components/MovieCard/MovieCard";
import type { Movie } from "@data/movies.data";
import styles from "./MoviesGrid.module.css";

interface MoviesGridProps {
  movies: Movie[];
  onToggleFavorite?: (id: number) => void;
  className?: string;
}

export function MoviesGrid({
  movies,
  onToggleFavorite,
  className = "",
}: MoviesGridProps) {
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
