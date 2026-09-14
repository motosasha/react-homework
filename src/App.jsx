import { useState, useEffect } from "react";
import { getCurrentUser, logout } from "@utils/auth";
import { Layout } from "@components/Layout/Layout";
import { LoginForm } from "@components/LoginForm/LoginForm";
import { Title } from "@components/Title/Title";
import { Paragraph } from "@components/Paragraph/Paragraph";
import { Search } from "@components/Search/Search";
import { MoviesGrid } from "@components/MoviesGrid/MoviesGrid";
import { movies } from "@data/movies.js";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  function handleLoginSuccess(nextUser) {
    setUser(nextUser);
  }

  function handleLogout() {
    logout();
    setUser(null);
  }

  return (
    <Layout user={user} onLogout={handleLogout} moviesCount={3}>
      <div className={"stack"}>
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

      <LoginForm onSuccess={handleLoginSuccess} />
    </Layout>
  );
}
