import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PandaAddItem from "./pages/pandaadditem/PandaAddItem";
import PandaItems from "./pages/pandaitems/PandaItems";
import "./reset.css";
import PandaItem from "./pages/pandaitem/PandaItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/items" element={<PandaItems />} />
        <Route path="/additem" element={<PandaAddItem />} />
        <Route path="/item/:id" element={<PandaItem />} />
        <Route path="/" element={<Navigate to="/items" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
