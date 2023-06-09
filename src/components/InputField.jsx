import React, { useState } from "react";

function InputField({ status, setStatus, handleSearchClick, charactersCount }) {
  const [searchName, setSearchName] = useState(null);
  const [showBubble, setShowBubble] = useState(false);

  const handleSearchChange = (event) => {
    const name = event.target.value;
    setSearchName(name);
  };

  const handleStatusChange = (event) => {
    let status = event.target.value;
    setStatus((status = status === "All" ? null : status));
  };

  return (
    <div className="relative w-full flex justify-center my-5 ">
      <form className="w-full h-32 flex justify-between p-2 rounded-md bg-white flex-col md:flex-row md:h-14 md:w-1/3">
        <div className="relative">
          <input
            className="flex-grow mr-2 outline-none"
            onChange={handleSearchChange}
            onMouseEnter={() => setShowBubble(true)}
            onMouseLeave={() => setShowBubble(false)}
            type="text"
            placeholder="Search for name"
            value={searchName || ""}
          />
          {showBubble && (
            <div className="absolute bottom-full mb-2 chat chat-start">
              <div className="chat-bubble">
                There is {charactersCount} characters
              </div>
            </div>
          )}
        </div>
        <select
          className="mr-2 outline-none text-center border-l-2 h-10"
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
