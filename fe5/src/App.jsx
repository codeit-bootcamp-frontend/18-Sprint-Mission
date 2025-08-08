import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Additem from "./components/addItem";
import Items from "./components/items";
// import "./css/global.css";
// import "./css/home.css";
// import "./css/items.css";
function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Routes>
				<Route path="/items" element={<Items />} />
				<Route path="/additem" element={<Additem />} />
			</Routes>
		</div>
	);
}

export default App;
