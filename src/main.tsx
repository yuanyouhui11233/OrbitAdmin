import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// tailwind css
import "./theme/index.css";
// svg icons
import "virtual:svg-icons-register";
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
