import React from "react";

import { Link } from "react-router-dom";

export const InformationField = ({ title, value, isLink, link }) => {
  if (isLink && value.toLowerCase() === "unknown") return null;

  return (
    <>
      <h2 className="text-xl mb-2 font-bold text-squidblue dark:text-squidblue">
        {title}:
      </h2>
      {isLink ? (
        <Link to={link} className="text-maximumblue hover:underline">
          <p className="mb-4 font-semibold">{value}</p>
        </Link>
      ) : (
        <p className="mb-4 font-semibold">{value}</p>
      )}
      <br />
    </>
  );
};
