import { useState } from "react";

import { useFetchCharData } from "../hooks/useFetchCharData.jsx";
import useUrlQuery from "../hooks/useUrlQuery.js";

import CharactersList from "../components/CharactersList.jsx";
import InputField from "../components/InputField.jsx";
import PaginationButtons from "../components/PaginationButtons.jsx";

function Characters() {
  const { query, updateQueryParam } = useUrlQuery();

  const [searchName, setSearchName] = useState(query.get("name") || null);
  const [status, setStatus] = useState(query.get("status") || null);
  const [page, setPage] = useState(Number(query.get("page")) || 1);

  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const { data, isLoading, isError, error } = useFetchCharData(
    page,
    searchButtonClicked ? searchName : null,
    status
  );

  if (isLoading) return "Loading";

  const handleStatusChange = (status) => {
    setStatus(status);
    setPage(1);
    updateQueryParam("status", status);
  };

  const handleSearchClick = (searchName) => {
    setSearchButtonClicked(true);
    setSearchName(searchName);
    setPage(1);
    updateQueryParam("name", searchName);
  };

  return (
    <div>
      <InputField
        status={status}
        setStatus={handleStatusChange}
        handleSearchClick={handleSearchClick}
      />
      {isError && <p>An error has occurred: {error.message}</p>}
      {!isLoading && !error && <CharactersList characters={data.results} />}

      <div className="flex justify-center mb-4">
        <PaginationButtons
          num={page}
          setNum={setPage}
          totalPages={data?.info?.pages}
          updateQueryParam={updateQueryParam}
        />
      </div>
    </div>
  );
}

export default Characters;
