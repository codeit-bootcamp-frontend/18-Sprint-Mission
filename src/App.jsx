import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { getProducts } from "./api";
import PandaAddItem from "./pages/pandaadditem/PandaAddItem";
import PandaItems from "./pages/pandaitems/PandaItems";
import "./reset.css";

function App() {
  const [order, setOrder] = useState("updatedAt");
  const [bestorder] = useState("");
  const [items, setItems] = useState([]);
  const [bestitems, setBestItems] = useState([]);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  const bestedItems = [...bestitems].sort((a, b) => b[bestorder] - a[bestorder]);

  const handleNewestClick = () => setOrder("updatedAt");
  const handleLikeClick = () => setOrder("favoriteCount");

  useEffect(() => {
    const handleLoad = async () => {
      const { list } = await getProducts({});
      setItems(list);
      const { list : best } = await getProducts({orderBy: 'favorite'});
      setBestItems(best);
    };
    handleLoad();
  }, [order]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/items"
          element={
            <PandaItems
              items={sortedItems}
              bestitems={bestedItems}
              onClickNew={handleNewestClick}
              onClickLike={handleLikeClick}
            />
          }
        />
        <Route path="/additem" element={<PandaAddItem /> } />
        <Route path="/" element={<Navigate to="/items" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
