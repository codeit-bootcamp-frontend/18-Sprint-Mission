import { Routes, Route } from "react-router-dom";
import PageLayout from "@/components/Layout/PageLayout";
import ItemsPage from "@/pages/ItemsPage";
import AddItemPage from "@/pages/ItemsPage/AddItemPage";

function App() {
  return (
    <>
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
