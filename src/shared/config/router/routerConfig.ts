export enum Route {
    ABOUT = 'about',
    HOME = 'home'
}

export const routerPath: Record<Route, string> = {
    [Route.ABOUT]: './about',
    [Route.HOME]: './'
}