import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ensureValidApiBaseUrl } from "./lib/api";

const resolvedApiBaseUrl = ensureValidApiBaseUrl();
console.info(`[questify] Quiz API base URL: ${resolvedApiBaseUrl}`);

createRoot(document.getElementById("root")!).render(<App />);
