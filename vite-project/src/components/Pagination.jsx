const PAGE_GROUP_SIZE = 5;

function Pagination({
  page,
  setPage,
  totalCount,
  totalCountPerPage,
  pageGroup,
  setPageGroup,
}) {
  const totalPages = Math.ceil(totalCount / totalCountPerPage);
  const startPage = pageGroup * PAGE_GROUP_SIZE + 1;
  const endPage = Math.min(startPage + PAGE_GROUP_SIZE - 1, totalPages);
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <div className="pagination">
      <button
        onClick={() => setPageGroup((prev) => Math.max(prev - 1, 0))}
        disabled={pageGroup === 0}
      >
        &lt;
      </button>
      {pageNumbers.map((num) => (
        <button
          key={num}
          className={page === num ? "active" : ""}
          onClick={() => setPage(num)}
        >
          {num}
        </button>
      ))}
      <button
        onClick={() =>
          setPageGroup((prev) =>
            (prev + 1) * PAGE_GROUP_SIZE < totalPages ? prev + 1 : prev
          )
        }
        disabled={(pageGroup + 1) * PAGE_GROUP_SIZE >= totalPages}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
