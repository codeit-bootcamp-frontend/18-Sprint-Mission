import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import ItemsPage from "./components/ItemsPage";
import AddItemPage from "./components/AddItemPage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/items" />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/additem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
