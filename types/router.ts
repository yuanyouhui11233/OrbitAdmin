import type { RouteObject, Params } from "react-router";
export interface IRouteMeta {
	/**
	 * dynamic route params
	 * @example /user/:id
	 */
	params?: Params<string>;
}

export type AppRouteObject = {
	order?: number;
	meta?: IRouteMeta;
	children?: AppRouteObject[];
} & Omit<RouteObject, "children">;
