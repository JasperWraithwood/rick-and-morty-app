import React from "react";

import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { useFetchSingleEpisodeData } from "../hooks/useFetchSingleEpisodeData";
import CharacterCard from "../components/CharacterCard";
import { InformationField } from "../components/InformationField";
import RickAndMortyWatchingTV from "../images/RickAndMortyWatchingTV.png";

async function fetchCharacter(url) {
  const response = await fetch(url);

  return response.json();
}

function Episode() {
  const { id } = useParams();

  const { data: episodeData, isLoading } = useFetchSingleEpisodeData(id);

  const { data: characters, isLoading: isCharactersLoading } = useQuery(
    ["characters", episodeData?.characters],
    () => Promise.all((episodeData?.characters || []).map(fetchCharacter)),
    {
      enabled: !!episodeData?.characters,
    }
  );

  if (isLoading || isCharactersLoading) return "Loading";

  const episodeField = [
    { title: "Name", value: episodeData.name },
    { title: "Air date", value: episodeData.air_date },
    { title: "Episode", value: episodeData.episode },
  ];

  return (
    <div>
      <div className="flex justify-center">
        <div className="hero bg-base bg-opacity-50 backdrop-blur-xl sm:w-full md:w-1/2 lg:w-1/2 mb-9">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={RickAndMortyWatchingTV}
              alt=""
              className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            />
            <div>
              {episodeField.map((field, index) => (
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

export default Episode;
