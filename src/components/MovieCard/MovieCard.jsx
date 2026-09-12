import { HeartIcon } from "@components/Icons/HeartIcon/HeartIcon";
import "./MovieCard.css";

export function MovieCard({ movie, onToggleFavorite, className = "" }) {
  return (
    <article className={`movie-card ${className}`}>
      <div className="movie-card__poster-wrapper">
        <img
          src={movie.poster}
          alt={movie.title}
          className="movie-card__poster"
          loading="lazy"
        />

        <button
          className={`movie-card__favorite ${movie.isFavorite ? "is-active" : ""}`}
          onClick={() => onToggleFavorite?.(movie.id)}
          aria-label={
            movie.isFavorite ? "Убрать из избранного" : "Добавить в избранное"
          }
        >
          <HeartIcon filled={movie.isFavorite} />
        </button>
      </div>

      <div className="movie-card__body">
        <h3 className="movie-card__title">{movie.title}</h3>

        <div className="movie-card__meta">
          <span className="movie-card__year">{movie.year}</span>
          <span className="movie-card__rating">★ {movie.rating}</span>
        </div>
      </div>
    </article>
  );
}
