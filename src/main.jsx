import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./assets/css/common.css";
import App from "./App.jsx";
import Items from "./pages/Items.jsx";
import AddItems from "./pages/AddItems.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/items" element={<Items />}></Route>
          <Route path="/additem" element={<AddItems />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
);
