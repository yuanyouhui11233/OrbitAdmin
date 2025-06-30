import SimpleBar, { type Props as SimpleBarProps } from "simplebar-react";
import { cn } from "@/utils";
import styled from "styled-components";
export type ScrollbarProps = SimpleBarProps & {
	fillContainer?: boolean;
	ref?: React.Ref<HTMLElement>;
};
const scrollbar = ({
	children,
	className,
	fillContainer = true,
	ref,
	...other
}: ScrollbarProps) => {
	return (
		<StyledSimpleBar
			fillContainer={fillContainer}
			scrollableNodeProps={{ ref }}
			clickOnTrack={false}
			className={cn("", className)}
			{...other}
		>
			{children}
		</StyledSimpleBar>
	);
};

export default scrollbar;

const StyledSimpleBar = styled(SimpleBar)`
  .simplebar-track {
    width: 6px !important;
  }
`;
