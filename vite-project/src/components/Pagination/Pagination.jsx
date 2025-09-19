// components/Pagination/Pagination.jsx
const Pagination = ({
  currentPage,
  totalCount,
  pageSize = 10,
  onPageChange,
}) => {
  // 총 페이지 수 계산
  const totalPages = Math.ceil(totalCount / pageSize);

  // 표시할 페이지 번호들 계산 (현재 페이지 기준으로 앞뒤 2개씩)
  const getVisiblePages = () => {
    const delta = 2; // 현재 페이지 앞뒤로 보여줄 페이지 수
    const start = Math.max(1, currentPage - delta);
    const end = Math.min(totalPages, currentPage + delta);

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const visiblePages = getVisiblePages();

  // 페이지가 1개 이하면 페이지네이션 숨기기
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-2 mt-8 mb-4">
      {/* 이전 버튼 */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* 첫 번째 페이지 (현재 페이지가 4 이상일 때) */}
      {currentPage > 3 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors font-medium"
          >
            1
          </button>
          {currentPage > 4 && <span className="text-gray-400 px-2">...</span>}
        </>
      )}

      {/* 페이지 번호들 */}
      {visiblePages.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
            pageNum === currentPage
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {pageNum}
        </button>
      ))}

      {/* 마지막 페이지 (현재 페이지가 끝에서 3번째 이전일 때) */}
      {currentPage < totalPages - 2 && (
        <>
          {currentPage < totalPages - 3 && (
            <span className="text-gray-400 px-2">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors font-medium"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* 다음 버튼 */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
