import React from "react";
import { usePagination } from "../../../../hooks/pagination/usePagination";
import "./PaginationStyle.css";

const Pagination = ({ page, setPage, pageSize }) => {
  const {
    currentPage,
    visiblePages,
    goToPage,
    goToPrevPage,
    goToNextPage,
    canGoPrev,
    canGoNext,
  } = usePagination(page, pageSize);

  const handlePageClick = (pageNumber) => {
    setPage(String(pageNumber));
    goToPage(pageNumber);
  };

  const handlePrev = () => {
    setPage(String(currentPage - 1));
    goToPrevPage();
  };

  const handleNext = () => {
    setPage(String(currentPage + 1));
    goToNextPage();
  };

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={handlePrev}
        disabled={!canGoPrev}>
        <img
          src="/icons/arrow-left.svg"
          alt="이전 페이지 버튼"
          aria-label="이전 페이지 버튼"
        />
      </button>

      {visiblePages.map((pageNum) => (
        <button
          key={pageNum}
          className={`pagination-button ${
            currentPage === pageNum ? "active" : ""
          }`}
          onClick={() => handlePageClick(pageNum)}>
          {pageNum}
        </button>
      ))}

      <button
        className="pagination-button"
        onClick={handleNext}
        disabled={!canGoNext}>
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
