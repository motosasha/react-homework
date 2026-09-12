import { MovieCard } from "@components/MovieCard/MovieCard";
import "./MoviesGrid.css";

export function MoviesGrid({ movies, onToggleFavorite, className = "" }) {
  if (movies.length === 0) {
    return (
      <div className="movies-grid movies-grid--empty">Фильмы не найдены</div>
    );
  }

  return (
    <div className={`movies-grid ${className}`}>
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
