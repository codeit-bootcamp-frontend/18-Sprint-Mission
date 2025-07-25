import React from "react";
import "./PaginationStyle.css";

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="pagination-button">
        <img
          src="/icons/arrow-left.svg"
          alt="이전 페이지 버튼"
          aria-label="이전 페이지 버튼"
        />
      </button>
      <button className="pagination-button">1</button>
      <button className="pagination-button">2</button>
      <button className="pagination-button">3</button>
      <button className="pagination-button">4</button>
      <button className="pagination-button">5</button>
      <button className="pagination-button">
        <img
          src="/icons/arrow-right.svg"
          alt="다음 페이지 버튼"
          aria-label="다음 페이지 버튼"
        />
      </button>
    </div>
  );
};

export default Pagination;
