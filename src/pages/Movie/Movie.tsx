import { useParams } from "react-router";
import { MovieDetails } from "@components/MovieDetails/MovieDetails";
import { ReviewCard } from "@components/ReviewCard/ReviewCard";
import { Paragraph } from "@components/Paragraph/Paragraph";
import { Title } from "@components/Title/Title";
import { movies } from "@data/movies.data";
import { movieDetails, reviews } from "@data/movie-details.data";
import styles from "./Movie.module.css";

export default function Movie() {
	const { id } = useParams();
	const movieId = Number(id);
	const movie = movies.find((m) => m.id === movieId);
	const details = movieDetails[movieId];

	if (!movie || !details) {
		return <Paragraph muted>Фильм не найден</Paragraph>;
	}

	return (
		<div className={styles.page}>
			<MovieDetails movie={movie} details={details} />

			<section className="stack">
				<Title size="md">Отзывы</Title>
				<div className={styles.reviews}>
					{reviews.map((review) => (
						<ReviewCard key={review.id} review={review} />
					))}
				</div>
			</section>
		</div>
	);
}
