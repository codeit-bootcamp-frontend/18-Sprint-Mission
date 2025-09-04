import { useEffect, useState } from "react";
import AllItems from "../components/AllItems";
import BestItems from "../components/BestItems";
import TestItems from "../components/TestItems";
import { getLists } from "../api/api";

const UsedMarketPage = () => {
  const [order, setOrder] = useState("");
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const LIMIT = 6;

  const sortedItems = items.sort((a, b) => {
    if (order === "createdAt") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return b[order] - a[order];
  });
  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("favoriteCount");

  const handleLoad = async (options) => {
    const { list } = await getLists(options);
    if (options.offset === 0) {
      setItems(list);
    } else {
      setItems([...items, ...list]);
    }
    setOffset(options.offset + list.length);
  };

  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);
  return (
    <>
      <main>
        <BestItems />
        <AllItems />
        <TestItems items={sortedItems} />
        <div>
          <button onClick={handleNewestClick}>최신순</button>
          <button onClick={handleBestClick}>좋아요순</button>
          <button onClick={handleLoad}>불러오기</button>
          <button onClick={handleLoadMore}>더보기</button>
        </div>
      </main>
    </>
  );
};

export default UsedMarketPage;
