import cn from "classnames";
import type { Review } from "@data/movie-details.data";
import styles from "./ReviewCard.module.css";

interface ReviewCardProps {
	review: Review;
	className?: string;
}

export function ReviewCard({ review, className = "" }: ReviewCardProps) {
	return (
		<article className={cn(styles["review-card"], className)}>
			<h3 className={styles.title}>{review.title}</h3>
			<p className={styles.text}>{review.text}</p>
			<time className={styles.date} dateTime={review.date}>
				{new Date(review.date).toLocaleDateString("ru-RU")}
			</time>
		</article>
	);
}
