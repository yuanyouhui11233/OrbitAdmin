import { useState } from "react";

import { HEADER_HEIGHT, OFFSET_HEADER_HEIGHT } from "./config";
import IconButton from "@/components/icon/icon-button";
import Logo from "@/components/logo";
const Header = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	return (
		<header>
			<div
				style={{
					height: HEADER_HEIGHT,
					transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
				}}
				className="flex flex-grow items-center justify-between px-4 text-gray backdrop-blur xl:px-6 2xl:px-10"
			>
				<div>
					<IconButton
						className="h-10 w-10 md:hidden"
						onClick={() => setDrawerOpen(true)}
					>
						<Logo />
					</IconButton>
				</div>
				<div className="flex">
					<div>1</div>
					<div>1</div>
					<div>1</div>
					<div>1</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
