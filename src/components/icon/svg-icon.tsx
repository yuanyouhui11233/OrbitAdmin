import { cn } from "@/utils";
import type { CSSProperties } from "react";

interface SvgIconProps {
	prefix?: string; // 前缀
	icon: string; // 图标名称
	color?: string; // 颜色
	size?: number | string; // 大小
	className?: string; // 类名
	style?: CSSProperties; // 样式
}
export default function SvgIcon({
	prefix = "icon",
	icon,
	color = "currentColor",
	size = "1em",
	className = "",
	style = {},
}: SvgIconProps) {
	const symbolId = `#${prefix}-${icon}`;
	const svgStyle: CSSProperties = {
		verticalAlign: "middle",
		width: size,
		height: size,
		color,
		...style,
	};
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			className={cn(
				"anticon fill-current inline-block h-[1em] w-[1em] overflow-hidden outline-none",
				className,
			)}
			style={svgStyle}
			aria-label={icon}
		>
			<title>{icon}</title>

			<use xlinkHref={symbolId} fill="currentColor" />
		</svg>
	);
}
