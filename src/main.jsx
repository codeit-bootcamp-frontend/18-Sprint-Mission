import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./assets/scss/common.scss";
import App from "./App.jsx";
import Items from "./pages/Items.jsx";
import AddItem from "./pages/AddItem.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/items" element={<Items />}></Route>
          <Route path="/additem"element={<AddItem />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
);
