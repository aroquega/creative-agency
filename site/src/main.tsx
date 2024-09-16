import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import "@fontsource/commissioner/400.css";
import "@fontsource/commissioner/700.css";
import "@fontsource/commissioner/800.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
