import React, { useMemo } from "react";

function PaginationButtons({ num, setNum, totalPages }) {
  const pages = useMemo(
    () =>
      [
        { page: num },
        { page: num + 1 <= totalPages ? num + 1 : null },
        { page: num + 2 <= totalPages ? num + 2 : null },
        { page: num + 3 <= totalPages ? num + 3 : null },
      ].filter((pg) => pg.page !== null),
    [num, totalPages]
  );

  const next = () => num < totalPages && setNum(++num);

  const back = () => num > 1 && setNum(--num);

  const isNextButtonDisabled = num === totalPages;

  return (
    <div className="flex bg-white rounded-lg font-[Poppins]">
      <button
        onClick={back}
        disabled={num === 1}
        className="h-12 border-2 border-r-0 border-indigo-600
               px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white"
      >
        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
      {pages.map(({ page }) => (
        <button
          key={page}
          onClick={() => setNum(page)}
          className={`h-12 border-2 border-r-0 border-indigo-600
          w-12 ${num === page && "bg-indigo-600 text-white"}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={next}
        disabled={isNextButtonDisabled}
        className="h-12 border-2  border-indigo-600
               px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white"
      >
        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default PaginationButtons;
