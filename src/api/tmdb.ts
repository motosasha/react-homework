import type { Movie } from "@data/movies.data";

const API_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const NO_POSTER = "https://placehold.co/500x750?text=No+poster";

interface TmdbMovie {
	id: number;
	title: string;
	release_date?: string;
	vote_average: number;
	poster_path: string | null;
}

interface TmdbSearchResponse {
	results: TmdbMovie[];
}

interface TmdbMovieDetails extends TmdbMovie {
	original_title: string;
	tagline: string;
	overview: string;
	runtime: number | null;
	genres: { id: number; name: string }[];
	production_countries: { iso_3166_1: string; name: string }[];
}

interface TmdbReview {
	id: string;
	author: string;
	content: string;
	created_at: string;
}

export interface MovieDetails {
	movie: Movie;
	originalTitle: string;
	tagline: string;
	description: string;
	releaseDate: string;
	duration: number;
	genres: string[];
	countries: string[];
}

export interface Review {
	id: string;
	author: string;
	text: string;
	date: string;
}

async function request<T>(
	path: string,
	params: Record<string, string>,
	signal?: AbortSignal
): Promise<T> {
	const token = import.meta.env.VITE_TMDB_TOKEN;
	if (!token) {
		throw new Error("Не задан VITE_TMDB_TOKEN");
	}

	const response = await fetch(`${API_URL}${path}?${new URLSearchParams(params)}`, {
		signal,
		headers: { Authorization: `Bearer ${token}`, accept: "application/json" }
	});
	if (!response.ok) {
		throw new TmdbError(response.status);
	}
	return response.json();
}

export class TmdbError extends Error {
	status: number;

	constructor(status: number) {
		super(`TMDB: ошибка ${status}`);
		this.status = status;
	}
}

function toMovie(m: TmdbMovie): Movie {
	return {
		id: m.id,
		title: m.title,
		year: m.release_date ? Number(m.release_date.slice(0, 4)) : 0,
		rating: Math.round(m.vote_average * 10) / 10,
		poster: m.poster_path ? `${IMAGE_URL}${m.poster_path}` : NO_POSTER,
		isFavorite: false
	};
}

export async function searchMovies(query: string, signal?: AbortSignal): Promise<Movie[]> {
	const data = await request<TmdbSearchResponse>(
		"/search/movie",
		{ query, language: "ru-RU", include_adult: "false" },
		signal
	);
	return data.results.map(toMovie);
}

export async function getPopularMovies(signal?: AbortSignal): Promise<Movie[]> {
	const data = await request<TmdbSearchResponse>("/movie/popular", { language: "ru-RU" }, signal);
	return data.results.map(toMovie);
}

export async function getMovieDetails(id: number, signal?: AbortSignal): Promise<MovieDetails> {
	const m = await request<TmdbMovieDetails>(`/movie/${id}`, { language: "ru-RU" }, signal);
	return {
		movie: toMovie(m),
		originalTitle: m.original_title,
		tagline: m.tagline,
		description: m.overview,
		releaseDate: m.release_date ?? "",
		duration: m.runtime ?? 0,
		genres: m.genres.map((g) => g.name),
		countries: m.production_countries.map((c) => c.name)
	};
}

// Отзывы на TMDB в основном на английском, поэтому язык не указываем
export async function getMovieReviews(id: number, signal?: AbortSignal): Promise<Review[]> {
	const data = await request<{ results: TmdbReview[] }>(`/movie/${id}/reviews`, {}, signal);
	return data.results.map((r) => ({
		id: r.id,
		author: r.author,
		text: r.content,
		date: r.created_at
	}));
}
