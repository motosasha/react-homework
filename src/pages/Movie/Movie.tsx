import { useLoaderData } from "react-router";
import { MovieDetails } from "@components/MovieDetails/MovieDetails";
import { ReviewCard } from "@components/ReviewCard/ReviewCard";
import { Paragraph } from "@components/Paragraph/Paragraph";
import { Title } from "@components/Title/Title";
import type { MovieLoaderData } from "./movie.loader";
import styles from "./Movie.module.css";

export default function Movie() {
	const { details, reviews } = useLoaderData<MovieLoaderData>();

	if (!details) {
		return <Paragraph muted>Фильм не найден</Paragraph>;
	}

	return (
		<div className={styles.page}>
			<MovieDetails details={details} />

			<section className="stack">
				<Title size="md">Отзывы</Title>
				{reviews.length === 0 ? (
					<Paragraph muted>Отзывов пока нет</Paragraph>
				) : (
					<div className={styles.reviews}>
						{reviews.map((review) => (
							<ReviewCard key={review.id} review={review} />
						))}
					</div>
				)}
			</section>
		</div>
	);
}
