import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import "modern-normalize";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
