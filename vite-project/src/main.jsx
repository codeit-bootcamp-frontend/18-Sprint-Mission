import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import ItemsPage from "./pages/ItemsPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/items" element={<ItemsPage />} />
          <Route path="*" element={<h1>NOT IMPLEMENTED</h1>} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
