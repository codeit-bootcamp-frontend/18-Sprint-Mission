import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Items from "./pages/items/Items";
import Board from "./pages/board/Board";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/board" element={<Board />} />
      <Route path="/items" element={<Items />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
