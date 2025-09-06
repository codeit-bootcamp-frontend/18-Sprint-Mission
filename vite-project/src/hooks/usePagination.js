import { useState } from "react";

export default function usePagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const getPageNumber = (totalProductCount) => {
    if (totalProductCount === 0)
      return {
        pages: [1],
        totalPages: 1,
      };

    const totalPages = Math.ceil(totalProductCount / pageSize);
    let start = Math.max(currentPage - 2, 1);
    let end = Math.min(start + 4, totalPages);

    if (end - start < 4) {
      start = Math.max(end - 4, 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return { pages, totalPages };
  };

  return { currentPage, setCurrentPage, getPageNumber };
}
