import { lazy, Suspense } from "react";
import { Outlet } from "react-router";
import type { AppRouteObject } from "#/router";
import { CircleLoading } from "@/components/loading";

const Page403 = lazy(() => import("@/pages/sys/error/Page403"));
const Page404 = lazy(() => import("@/pages/sys/error/Page404"));
const Page500 = lazy(() => import("@/pages/sys/error/Page500"));
/**
 * error routes
 * 403 404 500
 */
export const ErrorRoutes: AppRouteObject = {
	element: (
		<Suspense fallback={<CircleLoading />}>
			<Outlet />
		</Suspense>
	),
	children: [
		{ path: "403", element: <Page403 /> },
		{ path: "404", element: <Page404 /> },
		{ path: "500", element: <Page500 /> },
	],
};
