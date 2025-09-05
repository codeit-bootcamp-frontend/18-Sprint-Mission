import { useEffect, useState } from "react";
import AllItems from "../components/AllItems";
import BestItems from "../components/BestItems";
import TestItems from "../components/TestItems";
import { getLists } from "../api/api";

const UsedMarketPage = () => {
  const [orderBy, setOrderBy] = useState("recent");
  const [items, setItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [page, setPage] = useState(1);
  const LIMIT = 10;

  const sortedItems = items.sort((a, b) => {
    return b[orderBy] - a[orderBy];
  });

  useEffect(() => {
    const bestlist = async () => {
      const { list } = await getLists({
        page,
        pageSize: 4,
        orderBy: "favorite",
      });
      setBestItems(list);
    };
    bestlist();
  }, []);

  const handleNewestClick = () => setOrderBy("recent");
  const handleBestClick = () => setOrderBy("favorite");

  const handleLoad = async () => {
    const { list } = await getLists({ page, pageSize: LIMIT, orderBy });
    if (page === 1) {
      setItems(list);
    } else {
      setItems([...items, ...list]);
    }
    setPage(page);
  };

  const goPage = async (n) => {
    const { list } = await getLists({ page: n, pageSize: LIMIT, orderBy });
    setItems(list);
    setPage(n);
  };

  const handleLoadMore = () => {
    handleLoad({ orderBy, page, pageSize: LIMIT });
  };

  useEffect(() => {
    handleLoad({ orderBy, page: 1, pageSize: LIMIT });
  }, [orderBy]);

  return (
    <>
      <main>
        <BestItems />
        <TestItems items={bestItems} />
        <AllItems />
        <TestItems items={sortedItems} />
        <div>
          <div>
            <button onClick={() => goPage(1)}>1</button>
            <button onClick={() => goPage(2)}>2</button>
            <button onClick={() => goPage(3)}>3</button>
            <button onClick={() => goPage(4)}>4</button>
            <button onClick={() => goPage(5)}>5</button>
          </div>
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
