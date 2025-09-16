import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import MainPage from "./pages/MainPage/MainPage";
import MainLayout from "./Layouts/MainLayout";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <MainPage></MainPage>
            </MainLayout>
          }
        ></Route>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <MainPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/items"
          element={
            <DefaultLayout>
              <ItemsPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/additem"
          element={
            <DefaultLayout>
              <AddItemPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/items/:productId"
          element={
            <DefaultLayout>
              <ItemDetailPage />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
