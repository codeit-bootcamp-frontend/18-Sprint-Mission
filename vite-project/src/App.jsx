import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/globalStyle";
import theme from "@/styles/theme";
import MainLayout from "@/components/Layout/MainLayout";
import PageLayout from "@/components/Layout/PageLayout";
import AuthLayout from "@/components/Layout/AuthLayout";
import HomePage from "@/pages/HomePage";
import ItemsPage from "@/pages/ItemsPage";
import AddItemPage from "@/pages/AddItemPage";
import LoginPage from "@/pages/LoginPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route element={<PageLayout />}>
            <Route path="/items" element={<ItemsPage />} />
            <Route path="/additem" element={<AddItemPage />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
