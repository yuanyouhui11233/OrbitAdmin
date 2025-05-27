import { Icon } from "@iconify/react";
import styled from "styled-components";
import type { IconProps } from "@iconify/react";

interface IconifyProps extends Omit<IconProps, "width" | "height"> {
	size?: IconProps["width"];
}

export default function Iconify({
	icon,
	size = "1em",
	className = "",
	...other
}: IconifyProps) {
	return (
		<StyledIconify className="anticon">
			<Icon
				icon={icon}
				width={size}
				height={size}
				className={`m-auto ${className}`}
				{...other}
			/>
		</StyledIconify>
	);
}
const StyledIconify = styled.div`
	display:inline-flex;
	veritical-align: middle;
	svg {
		display:inline-block;
	}
`;
