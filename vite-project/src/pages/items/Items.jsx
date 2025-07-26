import React from "react";
import BestProductSection from "../../components/features/items/BestProductSection/BestProductSection";
import AllProductSection from "../../components/features/items/AllProductSection/AllProductSection";
import Pagination from "../../components/features/items/pagination/Pagination";
import "./ItemsStyle.css";

// TODO: 반응형, 페이지네이션, API 추가, 정렬, 검색 기능 추가, sanitize 추가, 목업 이미지 제거

const Items = () => {
  return (
    <>
      <main className="products">
        <BestProductSection />
        <AllProductSection />
      </main>

      {/* 페이지네이션 */}
      <div className="pagination">
        <Pagination />
      </div>
    </>
  );
};

export default Items;
