import { useState } from "react";
import "./App.css";
import Items from "./components/items";
// import "./css/global.css";
// import "./css/home.css";
// import "./css/items.css";
function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Items />
		</div>
	);
}

export default App;
