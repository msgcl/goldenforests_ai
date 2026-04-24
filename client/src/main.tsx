import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes";
import App from "./App";
import { initAnalytics } from "./analytics";
import "./index.css";

initAnalytics();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
    <App />
  </ThemeProvider>,
);
