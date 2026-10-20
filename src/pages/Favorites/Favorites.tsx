import { Title } from "@components/Title/Title.tsx";
import { MoviesGrid } from "@components/MoviesGrid/MoviesGrid.tsx";
import { type Movie, movies } from "@data/movies.data.ts";

const myFav = movies.filter((movie: Movie) => movie.isFavorite);

export default function Favorites() {
	return (
		<>
			<div className="stack">
				<Title size="lg">Избранное</Title>
			</div>

			<MoviesGrid movies={myFav} onToggleFavorite={(id) => console.log("toggle favorite", id)} />
		</>
	);
}
