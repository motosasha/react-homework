import cn from "classnames";
import { HeartIcon } from "@components/Icons/HeartIcon/HeartIcon";
import { Paragraph } from "@components/Paragraph/Paragraph";
import { Title } from "@components/Title/Title";
import { useAuth } from "@context/auth-context";
import type { MovieDetails as MovieDetailsData } from "@api/tmdb";
import styles from "./MovieDetails.module.css";

interface MovieDetailsProps {
	details: MovieDetailsData;
	className?: string;
}

export function MovieDetails({ details, className = "" }: MovieDetailsProps) {
	const { user } = useAuth();
	const { movie } = details;

	const info = [
		{ label: "Оригинальное название", value: details.originalTitle },
		{
			label: "Дата выхода",
			value: details.releaseDate && new Date(details.releaseDate).toLocaleDateString("ru-RU")
		},
		{ label: "Длительность", value: details.duration > 0 && `${details.duration} мин` },
		{ label: "Страна", value: details.countries.join(", ") },
		{ label: "Жанр", value: details.genres.join(", ") }
	].filter((item) => item.value);

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

				{details.tagline && <Paragraph muted>{details.tagline}</Paragraph>}

				<Paragraph>{details.description || "Описание отсутствует"}</Paragraph>

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
