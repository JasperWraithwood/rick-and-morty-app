import React from "react";

import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { useFetchSingleLocationData } from "../hooks/useFetchSingleLocationData";
import CharacterCard from "../components/CharacterCard";
import { InformationField } from "../components/InformationField";
import portal from "../images/portal.webp";

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

  const locationField = [
    { title: "Name", value: locationData.name },
    { title: "Type", value: locationData.type },
    { title: "Dimension", value: locationData.dimension },
  ];

  return (
    <div>
      <div className="flex justify-center">
        <div className="hero bg-base bg-opacity-50 backdrop-blur-xl sm:w-full md:w-1/3 mb-9">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={portal}
              alt=""
              className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            />
            <div>
              {locationField.map((field, index) => (
                <InformationField
                  key={index}
                  title={field.title}
                  value={isLoading ? "Loading..." : field.value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default Location;
