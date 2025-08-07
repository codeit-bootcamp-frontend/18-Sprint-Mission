import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import AddItemPage from "./pages/add-item/add-item-page";
import ItemDetailPage from "./pages/items/item-detail-page";
import ItemsPage from "./pages/items/items-page";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/items/:id" element={<ItemDetailPage />} />
          <Route path="/additem" element={<AddItemPage />} />
          <Route path="*" element={<h1>NOT IMPLEMENTED</h1>} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
