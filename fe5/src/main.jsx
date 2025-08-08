import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ 추가
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		{" "}
		{/* ✅ 라우터로 App 감싸기 */}
		<App />
	</BrowserRouter>
);
