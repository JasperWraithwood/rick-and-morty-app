import React from "react";

import { Link } from "react-router-dom";

function CharacterCard({ img, name, status, id }) {
  return (
    <div className="h-full w-3/4 px-4 mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
      <div className="card w-full bg-base-100 shadow-xl bg-opacity-50 backdrop-blur-xl">
        <figure>
          <img src={img} alt="character" />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title text-center text-2xl h-14 overflow-hidden">
            {name}
          </h2>
          <p
            className={`text-xl ${
              status === "Alive"
                ? "text-green-600"
                : status === "Dead"
                ? "text-red-600"
                : "text-gray-600"
            }`}
          >
            {status}
          </p>
          <div className="card-actions justify-center">
            <Link to={`/character/${id}`}>
              <button className="btn border-none bg-squidblue hover:bg-maximumblue text-white">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
