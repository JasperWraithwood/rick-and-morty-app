import React, { useMemo } from "react";

function PaginationButtons({ num, setNum, totalPages, updateQueryParam }) {
  const pages = useMemo(
    () =>
      [
        { page: num - 1 > 1 ? num - 1 : null },
        { page: num - 2 > 2 ? num - 2 : null },
        { page: num },
        { page: num + 1 <= totalPages ? num + 1 : null },
        { page: num + 2 <= totalPages ? num + 2 : null },
      ].filter((pg) => pg.page !== null),
    [num, totalPages]
  );

  function lastPage() {
    setNum(totalPages);
    updateQueryParam("page", totalPages);
  }

  function firstPage() {
    setNum(1);
    updateQueryParam("page", 1);
  }

  function handlePageChange(pageNumber) {
    setNum(pageNumber);
    updateQueryParam("page", pageNumber);
  }

  return (
    <div className="flex bg-white rounded-lg font-[Poppins]">
      <button
        onClick={firstPage}
        disabled={num === 1}
        className="h-12 border-2 border-r-0 border-indigo-600
               px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white"
      >
        First page
      </button>
      {pages.map((pg, i) => (
        <button
          key={i}
          onClick={() => handlePageChange(pg.page)}
          className={`h-12 border-2 border-r-0 border-indigo-600
          w-12 ${num === pg.page && "bg-indigo-600 text-white"}`}
        >
          {pg.page}
        </button>
      ))}
      <button
        onClick={lastPage}
        disabled={num === totalPages}
        className="h-12 border-2  border-indigo-600
               px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white"
      >
        Last page
      </button>
    </div>
  );
}

export default PaginationButtons;
