// 전체 페이지 수 계산
export const calculateTotalPages = (totalItems, itemsPerPage = 10) => {
  return Math.ceil(totalItems / itemsPerPage);
};

// 현재 페이지 기준으로 보여주는 페이지 수 계산
export const getVisiblePageNumbers = (currentPage, totalPages, maxVisible = 5) => {
  let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let end = Math.min(totalPages, start + maxVisible - 1);

  start = Math.max(1, end - maxVisible + 1);

  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
};

// 이전 버튼 활성화 여부
export const canNavigatePrev = (currentPage) => currentPage > 1;

// 다음 버튼 활성화 여부
export const canNavigateNext = (currentPage, totalPages) => currentPage < totalPages;