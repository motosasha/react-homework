export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  poster: string;
  isFavorite: boolean;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    isFavorite: true,
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
    isFavorite: true,
  },
  {
    id: 4,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    isFavorite: false,
  },
  {
    id: 5,
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    isFavorite: true,
  },
  {
    id: 6,
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    isFavorite: false,
  },
  {
    id: 7,
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/Cw4hIUIAmSYfK9QfaUW5igp9La.jpg",
    isFavorite: false,
  },
  {
    id: 8,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    isFavorite: true,
  },
  {
    id: 9,
    title: "Gladiator",
    year: 2000,
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    isFavorite: false,
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    isFavorite: true,
  },
  {
    id: 11,
    title: "Avatar",
    year: 2009,
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    isFavorite: false,
  },
  {
    id: 12,
    title: "Dune",
    year: 2021,
    rating: 8.0,
    poster: "https://image.tmdb.org/t/p/w500/v1tRXZ4JtD2Iv6fjkPvT4GiwslV.jpg",
    isFavorite: true,
  },
  {
    id: 13,
    title: "Whiplash",
    year: 2014,
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    isFavorite: false,
  },
  {
    id: 14,
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    isFavorite: true,
  },
  {
    id: 15,
    title: "The Social Network",
    year: 2010,
    rating: 7.7,
    poster: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    isFavorite: false,
  },
];
