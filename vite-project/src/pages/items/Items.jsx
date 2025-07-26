import React from "react";
import BestProductSection from "../../components/features/items/BestProductSection/BestProductSection";
import AllProductSection from "../../components/features/items/AllProductSection/AllProductSection";
import Pagination from "../../components/features/items/pagination/Pagination";
import useGetProductData from "../../hooks/useGetProductData";
import useGetBestProductData from "../../hooks/useGetBestProductData";
import "./ItemsStyle.css";

// TODO: 반응형, 페이지네이션, 정렬, 검색 기능 추가, sanitize 추가

const Items = () => {
  const { products } = useGetProductData(); // 전체 상품 데이터
  const { products: bestProducts } = useGetBestProductData(); // 베스트 상품 데이터

  return (
    <>
      <main className="products">
        <BestProductSection products={bestProducts} />
        <AllProductSection products={products} />
      </main>

      {/* 페이지네이션 */}
      <div className="pagination">
        <Pagination />
      </div>
    </>
  );
};

export default Items;
