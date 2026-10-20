import cn from "classnames";
import { HeartIcon } from "@components/Icons/HeartIcon/HeartIcon";
import { Paragraph } from "@components/Paragraph/Paragraph";
import { Title } from "@components/Title/Title";
import { useAuth } from "@context/auth-context";
import type { Movie } from "@data/movies.data";
import type { MovieDetails as MovieDetailsData } from "@data/movie-details.data";
import styles from "./MovieDetails.module.css";

interface MovieDetailsProps {
	movie: Movie;
	details: MovieDetailsData;
	className?: string;
}

export function MovieDetails({ movie, details, className = "" }: MovieDetailsProps) {
	const { user } = useAuth();

	const info = [
		{ label: "Тип", value: details.type },
		{
			label: "Дата выхода",
			value: new Date(details.releaseDate).toLocaleDateString("ru-RU")
		},
		{ label: "Длительность", value: `${details.duration} мин` },
		{ label: "Жанр", value: details.genres.join(", ") }
	];

	return (
		<section className={cn(styles["movie-details"], className)}>
			<img src={movie.poster} alt={movie.title} className={styles.poster} />

			<div className={styles.body}>
				<div className={styles.head}>
					<Title as="h1" size="lg">
						{movie.title}
					</Title>
					{user && (
						<span className={cn(styles.favorite, movie.isFavorite && styles["is-active"])}>
							<HeartIcon filled={movie.isFavorite} />
							{movie.isFavorite ? "В избранном" : "Не в избранном"}
						</span>
					)}
				</div>

				<span className={styles.rating}>★ {movie.rating}</span>

				<Paragraph>{details.description}</Paragraph>

				<dl className={styles.info}>
					{info.map(({ label, value }) => (
						<div key={label} className={styles.row}>
							<dt className={styles.label}>{label}</dt>
							<dd className={styles.value}>{value}</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}
