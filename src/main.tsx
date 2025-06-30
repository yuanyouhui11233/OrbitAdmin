import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// tailwind css
import "./theme/index.css";
// svg icons
import "virtual:svg-icons-register";

// global css
import "./global.css";

// antd React19兼容包 https://ant.design/docs/react/v5-for-19-cn
import "@ant-design/v5-patch-for-react-19";
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
