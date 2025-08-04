import { useEffect, useState } from "react";
import { getProducts } from "../api";
import "./ItemsPage.css";
import { useResponsive } from "./Responsive";
import BestProducts from "../components/BestProducts";
import TotalProducts from "../components/TotalProducts";
import Pagination from "../components/Pagination";

function ItemsPage() {
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [bestProducts, setBestProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState(null);
  const [bestCount, totalCountPerPage] = useResponsive();
  const [keyword, setKeyword] = useState("");
  const [pageGroup, setPageGroup] = useState(0);

  useEffect(() => {
    async function fetchBestProducts() {
      try {
        const [list] = await getProducts({
          page: 1,
          pageSize: bestCount,
          orderBy: "favorite",
        });
        setBestProducts(list);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchBestProducts();
  }, [bestCount]);

  useEffect(() => {
    async function fetchTotalProducts() {
      try {
        const [list, count] = await getProducts({
          page,
          pageSize: totalCountPerPage,
          orderBy,
          keyword,
        });
        setTotalProducts(list);
        setTotalCount(count);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchTotalProducts();
  }, [page, orderBy, keyword, totalCountPerPage]);

  return (
    <div className="products-container">
      {error && <p>{error}</p>}

      <BestProducts bestProducts={bestProducts} />

      <TotalProducts
        totalProducts={totalProducts}
        orderBy={orderBy}
        onOrderChange={(e) => {
          setOrderBy(e.target.value);
          setPage(1);
        }}
        keyword={keyword}
        onKeywordChange={(e) => {
          setKeyword(e.target.value);
          setPage(1);
        }}
      />

      <Pagination
        page={page}
        setPage={setPage}
        totalCount={totalCount}
        totalCountPerPage={totalCountPerPage}
        pageGroup={pageGroup}
        setPageGroup={setPageGroup}
      />
    </div>
  );
}

export default ItemsPage;
