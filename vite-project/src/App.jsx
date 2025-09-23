import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import MainPage from "./pages/MainPage/MainPage";
import MainLayout from "./Layouts/MainLayout";
import DefaultLayout from "./Layouts/DefaultLayout";
import LoginPage from "./pages/MainPage/LoginPage";
import SignupPage from "./pages/MainPage/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/"
          element={
            <MainLayout>
              <MainPage />
            </MainLayout>
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
