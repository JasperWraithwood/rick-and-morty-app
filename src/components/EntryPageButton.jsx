import React from "react";

import { Link } from "react-router-dom";

export const EntryPageButton = ({ moveToPage }) => {
  return (
    <div className=" my-6 pr-44">
      <Link to={`/${moveToPage}`}>
        <button className="btn glass w-1/5">{moveToPage}</button>
      </Link>
    </div>
  );
};
