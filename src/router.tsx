import { createBrowserRouter } from "react-router";
import { Layout } from "@components/Layout/Layout";
import { RequireAuth } from "@components/RequireAuth/RequireAuth";
import Home from "@pages/Home/Home";
import Login from "@pages/Login/Login";
import Movie from "@pages/Movie/Movie";
import { RouteError } from "@components/RouteError/RouteError";
import { movieLoader } from "@pages/Movie/movie.loader";
import { withAuth } from "@utils/with-auth";
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
					{ path: "login", element: <Login /> },
					{
						element: <RequireAuth />,
						children: [
							{ index: true, element: <Home /> },
							{ path: "movie/:id", element: <Movie />, loader: withAuth(movieLoader) },
							{ path: "favorites", element: <Favorites /> },
							{ path: "*", element: <NotFound /> }
						]
					}
				]
			}
		]
	}
]);
