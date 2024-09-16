import { RouteProps } from 'react-router-dom';
import { About } from 'pages/about';
import { Home } from 'pages/home';
import { NotFound } from 'pages/notFound';
import { Route, routerPath } from 'shared/config/router';

export const routes: Record<Route, RouteProps> = {
	[Route.ABOUT]: {
		path: routerPath.about,
		element: <About />,
	},
	[Route.HOME]: {
		path: routerPath.home,
		element: <Home />,
	},
	[Route.NOT_FOUND]: {
		path: routerPath.notFound,
		element: <NotFound />,
	},
};
