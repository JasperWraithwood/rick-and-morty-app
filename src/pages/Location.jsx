import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { useFetchSingleLocationData } from "../hooks/useFetchSingleLocationData";
import CharacterCard from "../components/CharacterCard";
import Header from "../components/Header";

async function fetchCharacter(url) {
  const response = await fetch(url);
  return response.json();
}

function Location() {
  const { id } = useParams();
  const { data: locationData, isLoading } = useFetchSingleLocationData(id);

  const { data: characters, isLoading: isCharactersLoading } = useQuery(
    ["characters", locationData?.residents],
    () => Promise.all((locationData?.residents || []).map(fetchCharacter)),
    {
      enabled: !!locationData?.residents,
    }
  );

  if (isLoading || isCharactersLoading) return "Loading";

  return (
    <div>
      <Header />
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-full lg:max-w-full">
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>Name: {isLoading ? "Loading..." : locationData.name}</p>
              <p>Type: {isLoading ? "Loading..." : locationData.type}</p>
              <p>
                Dimension: {isLoading ? "Loading..." : locationData.dimension}
              </p>
              <br />
              <p>Characters on location:</p>
              <br />
              <div className="flex flex-wrap ">
                {characters &&
                  characters.map((character) => (
                    <CharacterCard
                      key={character.id}
                      img={character.image}
                      name={character.name}
                      status={character.status}
                      id={character.id}
                    />
                  ))}
              </div>
            </blockquote>
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Location;
