import { useEffect, useState } from "react";
import AllItems from "../components/AllItems";
import BestItems from "../components/BestItems";
import PageItems from "../components/PageItems";
import { getLists } from "../api/api";
import useMediaQuery from "../hooks/mediaquery";
import "./UsedMarketPage.css";
import { Items, OrderBy, GetListsParams, GetListsResponse } from "../api/api";

const UsedMarketPage = () => {
  const LIMIT = 12;
  const [orderBy, setOrderBy] = useState<OrderBy>("recent");
  const [items, setItems] = useState<Items[]>([]);
  const [bestItems, setBestItems] = useState<Items[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  type DeviceMap = { [key: string]: number }; // 인덱스 시그니처

  const { device } = useMediaQuery();

  const deviceMap: DeviceMap = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  const pageSize = deviceMap[device];

  useEffect(() => {
    const fetchlist = async () => {
      const { list } = await getLists({
        page,
        pageSize: deviceMap[device],
        orderBy: "favorite",
      });
      setBestItems(list);
    };
    fetchlist();
  }, [pageSize]);

  const goPage = async (n: number) => {
    const { list } = await getLists({
      page: n,
      pageSize: LIMIT,
      orderBy,
      keyword: search,
    });
    setItems(list);
    setPage(n);
  };

  useEffect(() => {
    goPage(1);
  }, [orderBy, search]);

  const MAXPAGE = 5;

  return (
    <>
      <main className="main">
        <BestItems />
        <PageItems items={bestItems} />
        <AllItems
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          search={search}
          setSearch={setSearch}
        />
        <PageItems items={items} />
        <div>
          <div className="page_button">
            <button
              onClick={() => {
                const n = Math.max(1, page - 1);

                goPage(n);
              }}
            >
              ◁
            </button>
            <button id="page1" onClick={() => goPage(1)}>
              1
            </button>
            <button id="page2" onClick={() => goPage(2)}>
              2
            </button>
            <button id="page3" onClick={() => goPage(3)}>
              3
            </button>
            <button id="page4" onClick={() => goPage(4)}>
              4
            </button>
            <button id="page5" onClick={() => goPage(5)}>
              5
            </button>
            <button
              onClick={() => {
                const n = Math.min(MAXPAGE, page + 1);

                goPage(n);
              }}
            >
              ▷
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default UsedMarketPage;
