import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsedMarketPage from "./pages/UsedMarketPage";
import AddItemPage from "./pages/AddItemPage";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/items" element={<UsedMarketPage />} />
        <Route path="/additem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
