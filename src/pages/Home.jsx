import { useState } from "react";

import { useFetchCharData } from "../hooks/useFetchCharData.jsx";

import CharactersList from "../components/CharactersList.jsx";
import InputField from "../components/InputField.jsx";
import PaginationButtons from "../components/PaginationButtons.jsx";

function Characters() {
  const [searchName, setSearchName] = useState(null);

  const [isAlive, setIsAlive] = useState(false);

  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error, isFetching } = useFetchCharData(
    page,
    searchName,
    isAlive
  );

  if (isLoading) return "Loading";

  return (
    <div>
      <InputField
        searchName={searchName}
        setSearchName={setSearchName}
        isAlive={isAlive}
        setIsAlive={setIsAlive}
      />
      {isError && <p>An error has occurred: {error.message}</p>}}
      {!isLoading && !error && <CharactersList characters={data.results} />}
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
