import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// tailwind css
import "./theme/index.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
