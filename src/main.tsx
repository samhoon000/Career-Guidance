import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QUIZ_API_FALLBACK } from "@/api/endpoints";

console.info(`[questify] Quiz API base URL: ${QUIZ_API_FALLBACK}`);

createRoot(document.getElementById("root")!).render(<App />);
