import { HEADER_HEIGHT, OFFSET_HEADER_HEIGHT } from "./config";
const Header = () => {
	return (
		<header>
			<div
				style={{
					height: HEADER_HEIGHT,
					transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
				}}
				className="flex flex-grow items-center justify-between px-4 text-gray backdrop-blur xl:px-6 2xl:px-10"
			>
				<div>1</div>
				<div>2</div>
			</div>
		</header>
	);
};
export default Header;
