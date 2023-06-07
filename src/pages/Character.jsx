import React from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useFetchSinglecharData } from "../hooks/useFetchSinglecharData";

function Character() {
  const { id } = useParams();

  const { data, isLoading } = useFetchSinglecharData(id);

  if (isLoading) return "Loading";

  const locationID = data.location.url.slice(41);

  return (
    <div>
      <div className="hero h-full bg-base bg-opacity-50 backdrop-blur-xl">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={data.image}
            alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <p>Name: {data.name}</p>
            <p>Status: {data.status}</p>
            <p>Species: {data.species}</p>
            {data.type !== "" && <p>Type: {data.type}</p>}
            <p>Gender: {data.gender}</p>
            <p>Origin: {data.origin.name} </p>
            <Link
              to={`/location/${locationID}`}
              className="text-squidblue hover:underline"
            >
              <p>Location: {data.location.name} </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
