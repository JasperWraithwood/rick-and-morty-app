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
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-100" src={data.image} alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>Name: {data.name}</p>
              <p>Status: {data.status}</p>
              <p>Species: {data.species}</p>
              {data.type !== "" && <p>Type: {data.type}</p>}
              <p>Gender: {data.gender}</p>
              <p>Origin: {data.origin.name} </p>
              <Link
                to={`/location/${locationID}`}
                className="text-blue-700 hover:underline"
              >
                <p>Location: {data.location.name} </p>
              </Link>
            </blockquote>
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Character;