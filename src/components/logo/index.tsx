import { NavLink } from "react-router";

import { Iconify } from "@/components/icon/index";

interface LogoProps {
	size?: number | string;
}
function Logo({ size = 50 }: LogoProps) {
	return (
		<NavLink to="/">
			<Iconify icon="logos:codersrank-icon" size={size} />
		</NavLink>
	);
}

export default Logo;
