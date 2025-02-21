import { type RouteObject, Navigate, createHashRouter } from "react-router";
import { RouterProvider } from "react-router";
import type { AppRouteObject } from "#/router";

const PAGE_NOT_FOUND: AppRouteObject = {
	path: "*",
	element: <Navigate to="/404" replace />,
};

export default function Router() {
	const routes = [PAGE_NOT_FOUND];

	const router = createHashRouter(routes as RouteObject[]);
	return <RouterProvider router={router} />;
}
