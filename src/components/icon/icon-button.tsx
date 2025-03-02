import type { ReactNode, CSSProperties } from "react";
import type { ButtonProps } from "antd";

import { cn } from "@/utils";
type Props = {
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
} & ButtonProps;
/**
 * 传入一个图标，返回一个按钮
 * @param param
 * @returns
 */
export default function IconButton({
	children,
	className,
	style,
	onClick,
}: Props) {
	return (
		<button
			type="button"
			className={cn(
				"flex cursor-pointer items-center justify-center rounded-full p-2 hover:bg-hover",
				className,
			)}
			style={style}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
