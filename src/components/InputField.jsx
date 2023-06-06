import React, { useState } from "react";

function InputField({ status, setStatus, handleSearchClick }) {
  const [searchName, setSearchName] = useState(null);

  const handleSearchChange = (event) => {
    const name = event.target.value;
    setSearchName(name);
  };

  const handleStatusChange = (event) => {
    let status = event.target.value;
    setStatus((status = status === "All" ? null : status));
  };

  return (
    <div className="w-full flex justify-center my-5 ">
      <form className="w-1/2 flex justify-between border p-2 rounded-md bg-white">
        <input
          className="flex-grow mr-2 outline-none"
          onChange={handleSearchChange}
          type="text"
          placeholder="Search for name"
          value={searchName || ""}
        />
        <select
          className="mr-2 outline-none text-center border-l-2"
          onChange={handleStatusChange}
          value={status}
        >
          <option disabled selected>
            Select Character Status
          </option>
          <option>All</option>
          <option>Alive</option>
          <option>Dead</option>
          <option>Unknown</option>
        </select>
        <button
          className="bg-squidblue hover:bg-maximumblue text-white font-bold py-2 px-4 rounded"
          onClick={() => handleSearchClick(searchName)}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default InputField;
