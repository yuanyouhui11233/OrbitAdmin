import { useMemo } from "react";
import { IconButton, SvgIcon } from "@/components/icon/index";
export default function SearchBar() {
	return (
		<div className="flex items-center">
			<IconButton className="h-8 rounded-xl bg-hover py-2 text-xs font-bold">
				<div className="flex">
					<SvgIcon icon="ic-search" size="20" />
					<span>Ctrl K</span>
				</div>
			</IconButton>
		</div>
	);
}
