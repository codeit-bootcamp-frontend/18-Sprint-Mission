import React from "react";
import "./PaginationStyle.css";
import { Link } from "react-router-dom";

const Pagination = ({ page, setPage, pageSize }) => {
  // TODO: 페이지네이션 구현, router 방식 구현

  const totalPages = Math.ceil(pageSize / pageSize);

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
    Link(`/items?page=${pageNumber}`);
  };

  const handlePrevNext = (direction) => {
    const newPage = direction === "prev" ? page - 1 : page + 1;
    if (newPage > 0 && newPage <= totalPages) {
      handlePageClick(newPage);
    }
  };

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => handlePrevNext("prev")}>
        <img
          src="/icons/arrow-left.svg"
          alt="이전 페이지 버튼"
          aria-label="이전 페이지 버튼"
        />
      </button>
      <button className="pagination-button" onClick={() => handlePageClick(1)}>
        1
      </button>
      <button className="pagination-button" onClick={() => handlePageClick(2)}>
        2
      </button>
      <button className="pagination-button" onClick={() => handlePageClick(3)}>
        3
      </button>
      <button className="pagination-button" onClick={() => handlePageClick(4)}>
        4
      </button>
      <button className="pagination-button" onClick={() => handlePageClick(5)}>
        5
      </button>
      <button
        className="pagination-button"
        onClick={() => handlePrevNext("next")}>
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
