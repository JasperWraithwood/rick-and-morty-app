import React from "react";

import { CharacterCard } from "./";

function CharactersList({ characters }) {
  return (
    <div className="flex flex-wrap">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          id={character.id}
          img={character.image}
          name={character.name}
          status={character.status}
        />
      ))}
    </div>
  );
}

export default CharactersList;
