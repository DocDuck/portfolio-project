import { RouteProps } from "react-router-dom";
import { About } from "pages/about/ui";
import { Home } from "pages/home/ui";
import { NotFound } from "pages/notFound/ui";
import { Route, routerPath } from "shared/config/router";

export const routes: Record<Route, RouteProps> = {
	[Route.ABOUT]: {
		path: routerPath.about,
		element: <About />
	},
	[Route.HOME]: {
		path: routerPath.home,
		element: <Home />
	},
	[Route.NOT_FOUND]: {
		path: routerPath.notFound,
		element: <NotFound />
	}
};