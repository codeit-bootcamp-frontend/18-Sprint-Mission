import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/home-layout/home-layout";
import AddItemPage from "./pages/add-item/add-item-page";
import ItemDetailPage from "./pages/items/item-detail-page";
import ItemsPage from "./pages/items/items-page";
import NotFoundPage from "./pages/not-found-page";
import "./styles/global.css";
import "./styles/palette.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/items"
          element={
            <HomeLayout>
              <ItemsPage />
            </HomeLayout>
          }
        />
        <Route
          path="/items/:id"
          element={
            <HomeLayout>
              <ItemDetailPage />
            </HomeLayout>
          }
        />
        <Route
          path="/additem"
          element={
            <HomeLayout>
              <AddItemPage />
            </HomeLayout>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
