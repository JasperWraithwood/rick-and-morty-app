import React from "react";

import { Link } from "react-router-dom";

export const EntryPageButton = ({ moveToPage }) => {
  return (
    <div className=" my-6 pr-48">
      <Link to={`/${moveToPage}`}>
        <button className="btn glass w-1/5 hover:animate-pulse">
          {moveToPage}
        </button>
      </Link>
    </div>
  );
};
