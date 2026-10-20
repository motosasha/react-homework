import type { LoaderFunctionArgs } from "react-router";
import { getMovieDetails, getMovieReviews, TmdbError } from "@api/tmdb";
import type { MovieDetails, Review } from "@api/tmdb";

export interface MovieLoaderData {
	details: MovieDetails | null;
	reviews: Review[];
}

export async function movieLoader({
	params,
	request
}: LoaderFunctionArgs): Promise<MovieLoaderData> {
	const id = Number(params.id);

	try {
		const [details, reviews] = await Promise.all([
			getMovieDetails(id, request.signal),
			// отзывы не критичны: если не загрузились, показываем страницу без них
			getMovieReviews(id, request.signal).catch(() => [])
		]);
		return { details, reviews };
	} catch (e) {
		if (e instanceof TmdbError && e.status === 404) {
			return { details: null, reviews: [] };
		}
		throw e;
	}
}
