import { Layout } from "@components/Layout/Layout";
import { LoginForm } from "@components/LoginForm/LoginForm";
import { Title } from "@components/Title/Title";
import { Paragraph } from "@components/Paragraph/Paragraph";
import { Search } from "@components/Search/Search";
import { MoviesGrid } from "@components/MoviesGrid/MoviesGrid";
import { movies } from "@data/movies.js";
import { AuthProvider } from "@context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Layout moviesCount={3}>
        <div className="stack">
          <Title size="lg">Поиск фильмов</Title>
          <Paragraph>
            Введите название фильма, сериала или мультфильма для поиска и
            добавления в избранное.
          </Paragraph>
          <Search onSearch={(query) => console.log(query)} />
        </div>

        <MoviesGrid
          movies={movies}
          onToggleFavorite={(id) => console.log("toggle favorite", id)}
        />

        <hr />

        <LoginForm />
      </Layout>
    </AuthProvider>
  );
}
