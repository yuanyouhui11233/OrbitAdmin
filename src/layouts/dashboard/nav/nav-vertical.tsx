import { Layout, Menu } from "antd";
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const { Sider } = Layout;
import { NAV_WIDTH } from "../config";
const NavVertical = () => {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<Sider
			width={NAV_WIDTH}
			trigger={null}
			theme={"light"}
			collapsible
			collapsed={collapsed}
			className="!fixed left-0 top-0 h-screen z-50"
			style={{
				borderRight: "1px dashed rgba(217, 217, 217, 0.6)",
			}}
		>
			<Menu
				theme="light"
				mode="inline"
				defaultSelectedKeys={["1"]}
				items={[
					{
						key: "1",
						icon: <UserOutlined />,
						label: "nav 1",
					},
					{
						key: "2",
						icon: <VideoCameraOutlined />,
						label: "nav 2",
					},
					{
						key: "3",
						icon: <UploadOutlined />,
						label: "nav 3",
					},
				]}
			/>
		</Sider>
	);
};

export default NavVertical;
