import { useNavigate, useLocation } from "react-router-dom";
import { calculateTotalPages, getVisiblePageNumbers, canNavigatePrev, canNavigateNext } from "../../utils/pagination/paginationUtils";

// 페이지네이션 커스텀 훅
export const usePagination = (currentPage, totalItems, itemsPerPage = 10) => {
  const navigate = useNavigate();
  const location = useLocation();

  const totalPages = calculateTotalPages(totalItems, itemsPerPage);
  const pageNumber = Number(currentPage);

  const navigateToPage = (page) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", page);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      navigateToPage(page);
    }
  };

  const goToPrevPage = () => {
    if (canNavigatePrev(pageNumber)) {
      goToPage(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (canNavigateNext(pageNumber, totalPages)) {
      goToPage(pageNumber + 1);
    }
  };

  const visiblePages = getVisiblePageNumbers(pageNumber, totalPages);

  return {
    currentPage: pageNumber,
    totalPages,
    visiblePages,
    goToPage,
    goToPrevPage,
    goToNextPage,
    canGoPrev: canNavigatePrev(pageNumber),
    canGoNext: canNavigateNext(pageNumber, totalPages),
  };
};
