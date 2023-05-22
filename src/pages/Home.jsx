import { useState } from "react";

import { useFetchCharData } from "../hooks/useFetchCharData.jsx";

import CharactersList from "../components/CharactersList.jsx";
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

  return (
    <div>
      <InputField searchName={handleSearch} isAlive={handleCheck} />

      {!isLoading && <CharactersList characters={data.results} />}

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
