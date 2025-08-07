import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/home-layout/home-layout";
import AddItemPage from "./pages/add-item/add-item-page";
import ItemDetailPage from "./pages/items/item-detail-page";
import ItemsPage from "./pages/items/items-page";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <HomeLayout>
        <Routes>
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/items/:id" element={<ItemDetailPage />} />
          <Route path="/additem" element={<AddItemPage />} />
          <Route path="*" element={<h1>NOT IMPLEMENTED</h1>} />
        </Routes>
      </HomeLayout>
    </BrowserRouter>
  );
}

export default App;
