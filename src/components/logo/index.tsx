import { NavLink } from "react-router";

import { Iconify } from "@/components/icon";

function Logo() {
	return (
		<NavLink to="/">
			<Iconify />
		</NavLink>
	);
}

export default Logo;
