import { createBrowserRouter } from "react-router";
import { Layout } from "@components/Layout/Layout";
import { RequireAuth } from "@components/RequireAuth/RequireAuth";
import Home from "@pages/Home/Home";
import Login from "@pages/Login/Login";
import Movie from "@pages/Movie/Movie";
import { RouteError } from "@components/RouteError/RouteError";
import { movieLoader } from "@pages/Movie/movie.loader";
import NotFound from "@pages/NotFound/NotFound";
import Favorites from "@pages/Favorites/Favorites";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				errorElement: <RouteError />,
				children: [
					{ index: true, element: <Home /> },
					{ path: "login", element: <Login /> },
					{ path: "movie/:id", element: <Movie />, loader: movieLoader },
					{
						path: "favorites",
						element: (
							<RequireAuth>
								<Favorites />
							</RequireAuth>
						)
					},
					{ path: "*", element: <NotFound /> }
				]
			}
		]
	}
]);
