import React from "react";
import BestProductSection from "../../components/features/items/BestProductSection/BestProductSection";
import AllProductSection from "../../components/features/items/AllProductSection/AllProductSection";
import Pagination from "../../components/features/items/pagination/Pagination";
import "./ItemsStyle.css";

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
