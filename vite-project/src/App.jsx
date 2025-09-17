import { Routes, Route } from "react-router-dom";
import BaseStyle from "@/styles/BaseStyle";
import PageLayout from "@/components/Layout/PageLayout";
import ItemsPage from "@/pages/ItemsPage";
import AddItemPage from "@/pages/AddItemPage";

function App() {
  return (
    <>
      <BaseStyle />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/additem" element={<AddItemPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
