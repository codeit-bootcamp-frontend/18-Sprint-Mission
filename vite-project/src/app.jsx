import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/home-layout";
import OnboardingLayout from "./layouts/onboarding-layout";
import AddItemPage from "./pages/add-item-page";
import ItemDetailPage from "./pages/item-detail-page";
import ItemsPage from "./pages/items-page";
import LoginPage from "./pages/login-page";
import NotFoundPage from "./pages/not-found-page";
import OnboardingPage from "./pages/onboarding-page";
import SignUpPage from "./pages/signup-page";
import "./styles/global.css";
import "./styles/palette.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <OnboardingLayout>
              <OnboardingPage />
            </OnboardingLayout>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
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
