import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/common/Header";
import AddItems from "./pages/AddItems";
import Layout from "./components/style/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/items" element={<ProductList />}></Route>
          <Route path="/additem" element={<AddItems />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
