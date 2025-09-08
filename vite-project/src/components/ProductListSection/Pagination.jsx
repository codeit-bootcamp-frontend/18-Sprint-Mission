const Pagination = ({ currentPage, setCurrentPage, pages, totalPages }) => {
  return (
    <div className="flex gap-2 my-20">
      <button
        className={`flex items-center justify-center w-10 h-10 p-3 text-gray-500 border border-gray-200 rounded-full ${
          currentPage === 1 ? "bg-slate-600" : ""
        }`}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
      >
        &lt;
      </button>
      {pages.map((pageNumber) => (
        <button
          className={`flex items-center justify-center w-10 h-10 p-3 border border-gray-200 rounded-full text-gray-500 ${
            currentPage === pageNumber ? " bg-blue-500 text-white" : ""
          } `}
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className={`flex items-center justify-center w-10 h-10 p-3 text-gray-500 border border-gray-200 rounded-full ${
          currentPage === totalPages ? "bg-slate-600" : ""
        }`}
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
