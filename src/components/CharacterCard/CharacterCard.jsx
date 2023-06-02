import React from "react";

import { Link } from "react-router-dom";

export const CharacterCard = ({ img, name, status, id }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4">
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="character" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{status}</p>
        <div className="card-actions justify-center">
          <Link to={`/character/${id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
