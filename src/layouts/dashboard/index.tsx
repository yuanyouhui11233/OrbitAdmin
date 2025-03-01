import { type CSSProperties, Suspense } from "react";

import styled from "styled-components";
import { Layout } from "antd";

import Header from "./header";
import Main from "./main";
import Nav from "./nav";
import { CircleLoading } from "@/components/loading";

import { NAV_WIDTH } from "./config";
export default function Dashboard() {
	return (
		<ScrollbarStyleWrapper>
			<Layout>
				<Suspense fallback={<CircleLoading />}>
					<Layout style={secondLayoutStyle}>
						<Nav />
						<Header />
						<Main />
					</Layout>
				</Suspense>
			</Layout>
		</ScrollbarStyleWrapper>
	);
}

/**
 * 待做
 * 通过屏幕宽度 来决定是 垂直布局 还是 水平布局
 * 垂直布局 左侧导航栏 宽度为 0
 * 水平布局 左侧导航栏 宽度为 240px
 * 修改 paddingLeft的值
 */
const secondLayoutStyle: CSSProperties = {
	display: "flex",
	flexDirection: "column",
	transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
	paddingLeft: NAV_WIDTH,
};

const ScrollbarStyleWrapper = styled.div`
  ::-webkit-scrollbar {
    width: 8px;
    top: 32px;
  }

`;
