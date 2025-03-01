import { Layout, Menu } from "antd";
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const { Sider } = Layout;
const NavVertical = () => {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={collapsed}
			className="!fixed left-0 top-0 h-screen z-50"
		>
			<Menu
				theme="dark"
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
