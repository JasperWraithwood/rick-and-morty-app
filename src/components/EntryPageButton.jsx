import React from "react";

import { Link } from "react-router-dom";

export const EntryPageButton = ({ moveToPage }) => {
  return (
    <div className=" my-6 pr-48">
      <Link to={`/${moveToPage}`}>
        <button className="btn glass md:w-1/4 sm:w-1/2 lg:w-1/5 hover:animate-pulse">
          {moveToPage}
        </button>
      </Link>
    </div>
  );
};
