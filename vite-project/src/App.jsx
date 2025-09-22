import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/globalStyle";
import theme from "@/styles/theme";
import PageLayout from "@/components/Layout/PageLayout";
import HomePage from "@/pages/HomePage";
import ItemsPage from "@/pages/ItemsPage";
import AddItemPage from "@/pages/AddItemPage";
import LoginPage from "@/pages/LoginPage";
import BoardsPage from "@/pages/BoardsPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route element={<PageLayout template="main" />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route element={<PageLayout template="sub" />}>
            <Route path="/boards" element={<BoardsPage />} />
            <Route path="/items" element={<ItemsPage />} />
            <Route path="/additem" element={<AddItemPage />} />
          </Route>
          <Route element={<PageLayout template="auth" />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
