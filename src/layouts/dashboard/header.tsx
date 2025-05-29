import { useState } from "react";

import { useSettings } from "@/store/settingStore";
import { HEADER_HEIGHT, OFFSET_HEADER_HEIGHT } from "./config";
import { IconButton, Iconify } from "@/components/icon/index";
import Logo from "@/components/logo";
import { ThemeLayout } from "#/enum";
const Header = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const { themeLayout } = useSettings();
	console.log("themeLayout", themeLayout);
	return (
		<header>
			<div
				style={{
					height: HEADER_HEIGHT,
					transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
				}}
				className="flex flex-grow items-center justify-between px-4 backdrop-blur xl:px-6 2xl:px-10"
			>
				<div className="flex items-baseline">
					{themeLayout === ThemeLayout.Horizontal ? (
						<IconButton
							className="h-10 w-10 md:hidden"
							onClick={() => setDrawerOpen(true)}
						>
							<Iconify icon="iconamoon:playlist-bold" size={24} />
						</IconButton>
					) : (
						<Logo />
					)}
					<div className="ml-4 hidden md:block">breadCrumb</div>
				</div>
				<div className="flex">
					{/* searchBar */}
					{/* 国际化 local */}

					<IconButton>
						<Iconify
							icon="mdi:github"
							size={24}
							onClick={() => window.open("https://github.com")}
						/>
					</IconButton>
					<IconButton>
						<Iconify icon="carbon:logo-discord" size={24} />
					</IconButton>
					{/* notice */}
					{/* setting */}
					{/* accountDropdown */}
				</div>
			</div>
		</header>
	);
};
export default Header;
