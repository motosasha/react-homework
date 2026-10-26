import { redirect, type LoaderFunction, type LoaderFunctionArgs } from "react-router";
import { getCurrentUser } from "@utils/auth";

export function withAuth<T>(loader: (args: LoaderFunctionArgs) => Promise<T> | T): LoaderFunction {
	return (args) => {
		if (!getCurrentUser()) {
			throw redirect("/login");
		}

		return loader(args);
	};
}
