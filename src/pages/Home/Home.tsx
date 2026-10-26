import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Title } from "@components/Title/Title";
import { Paragraph } from "@components/Paragraph/Paragraph";
import { Search } from "@components/Search/Search";
import { MoviesGrid } from "@components/MoviesGrid/MoviesGrid";
import { getPopularMovies, searchMovies } from "@api/tmdb";
import type { Movie } from "@data/movies.data";

interface SearchResult {
	query: string;
	movies: Movie[];
	error: string | null;
}

export default function Home() {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("q")?.trim() ?? "";
	const [result, setResult] = useState<SearchResult | null>(null);

	useEffect(() => {
		const controller = new AbortController();
		// при пустом запросе показываем популярные фильмы
		const request = query
			? searchMovies(query, controller.signal)
			: getPopularMovies(controller.signal);
		request
			.then((movies) => setResult({ query, movies, error: null }))
			.catch((e) => {
				if (controller.signal.aborted) return;
				const error = e instanceof Error ? e.message : "Не удалось загрузить фильмы";
				setResult({ query, movies: [], error });
			});

		return () => controller.abort();
	}, [query]);

	const handleSearch = (value: string) => {
		setSearchParams(value ? { q: value } : {});
	};

	// результат относится к другому запросу — значит, текущий ещё грузится
	const loading = result?.query !== query;
	const current = result?.query === query ? result : null;

	return (
		<>
			<div className="stack">
				<Title size="lg">Поиск фильмов</Title>
				<Paragraph>
					Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
				</Paragraph>
				<Search key={query} defaultValue={query} onSearch={handleSearch} />
			</div>

			{loading && (
				<Paragraph className={"loading"} muted>
					Загрузка...
				</Paragraph>
			)}
			{current?.error && (
				<Paragraph className={"loading"} muted>
					{current.error}
				</Paragraph>
			)}
			{current && !current.error && (
				<MoviesGrid
					movies={current.movies}
					onToggleFavorite={(id) => console.log("toggle favorite", id)}
				/>
			)}
		</>
	);
}
