import { createBrowserRouter } from "react-router";
import { Layout } from "@components/Layout/Layout";
import { RequireAuth } from "@components/RequireAuth/RequireAuth";
import Home from "@pages/Home/Home";
import Login from "@pages/Login/Login";
import Movie from "@pages/Movie/Movie";
import NotFound from "@pages/NotFound/NotFound";
import Favorites from "@pages/Favorites/Favorites";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "login", element: <Login /> },
			{ path: "movie/:id", element: <Movie /> },
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
]);
