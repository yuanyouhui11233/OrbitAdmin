import { lazy } from "react";
import {
	type RouteObject,
	Navigate,
	createHashRouter,
	RouterProvider,
} from "react-router";
import type { AppRouteObject } from "#/router";
import Dashboard from "@/layouts/dashboard";
import { ErrorRoutes } from "./routes/error-routes";

const PAGE_NOT_FOUND: AppRouteObject = {
	path: "*",
	element: <Navigate to="/404" replace />,
};

const LoginRouter: AppRouteObject = {
	path: "/login",
	Component: lazy(() => import("@/pages/sys/login/Login")),
};
export default function Router() {
	const asyncRoutes: AppRouteObject = {
		path: "/",
		element: <Dashboard />,
	};
	const routes = [LoginRouter, asyncRoutes, PAGE_NOT_FOUND, ErrorRoutes];

	const router = createHashRouter(routes as RouteObject[]);
	return <RouterProvider router={router} />;
}
