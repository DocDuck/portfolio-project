export enum Route {
    ABOUT = 'about',
    HOME = 'home',
    NOT_FOUND = 'notFound'
}

export const routerPath: Record<Route, string> = {
	[Route.ABOUT]: '/about',
	[Route.HOME]: '/',
	[Route.NOT_FOUND]: '*'
};

export type RouterPath = typeof routerPath