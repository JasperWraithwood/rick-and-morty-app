import { useState } from "react";

import { useFetchCharData } from "../hooks/useFetchCharData.jsx";

import Header from "../components/Header.jsx";
import CharacterCard from "../components/CharacterCard.jsx";
import InputField from "../components/InputField.jsx";
import PaginationButtons from "../components/PaginationButtons.jsx";

function Characters() {
  const [inputName, setInputName] = useState(null);
  const [isAlive, setIsAlive] = useState(null);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useFetchCharData(page, inputName, isAlive);

  if (isLoading) return "Loading";

  function handleSearch(input) {
    setInputName(input);
    setPage(1);
  }

  function handleCheck(checked) {
    checked && setIsAlive("alive");
  }

  function defaultPage() {
    setPage(1);
    setInputName(null);
  }

  return (
    <div>
      <Header defaultPage={defaultPage} />
      <InputField searchName={handleSearch} isAlive={handleCheck} />

      <div className="flex flex-wrap">
        {data.results.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            img={character.image}
            name={character.name}
            status={character.status}
          />
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <PaginationButtons
          num={page}
          setNum={setPage}
          totalPages={data.info.pages}
        />
      </div>
    </div>
  );
}

export default Characters;
