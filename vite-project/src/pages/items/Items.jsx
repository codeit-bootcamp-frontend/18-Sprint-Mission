import React, { useState } from "react";
import BestProductSection from "../../components/features/items/BestProductSection/BestProductSection";
import AllProductSection from "../../components/features/items/AllProductSection/AllProductSection";
import Pagination from "../../components/features/items/pagination/Pagination";
import useGetProductData from "../../hooks/useGetProductData";
import useGetBestProductData from "../../hooks/useGetBestProductData";
import "./ItemsStyle.css";

// TODO: 반응형, 페이지네이션

const Items = () => {
  const [page, setPage] = useState("1");
  const [orderBy, setOrderBy] = useState("recent");

  const handleOrderByChange = (koreanValue) => {
    const orderByMap = {
      최신순: "recent",
      좋아요순: "favorite",
    };
    setOrderBy(orderByMap[koreanValue] || "recent");
  };

  // 베스트 상품 데이터
  const {
    products: bestProducts,
    isLoading: bestProductsLoading,
    isError: bestProductsError,
  } = useGetBestProductData({ pageSize: "4" });

  // 전체 상품 데이터
  const {
    products: allProducts,
    isLoading: allProductsLoading,
    isError: allProductsError,
  } = useGetProductData({
    page,
    pageSize: "10",
    orderBy,
    keyword: "",
  });

  return (
    <>
      <main className="products">
        <BestProductSection
          products={bestProducts}
          isLoading={bestProductsLoading}
          isError={bestProductsError}
        />
        <AllProductSection
          products={allProducts}
          onOrderByChange={handleOrderByChange}
          isLoading={allProductsLoading}
          isError={allProductsError}
        />
      </main>

      {/* 페이지네이션 */}
      <div className="pagination">
        <Pagination
          page={page}
          setPage={setPage}
          pageSize={allProducts?.totalCount}
        />
      </div>
    </>
  );
};

export default Items;
