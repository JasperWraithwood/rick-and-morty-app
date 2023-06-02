import React from "react";

function InputField({ searchName, setSearchName, isAlive, setIsAlive }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 space-y-2 sm:space-y-0 my-5">
      <input
        className="border border-gray-400 rounded p-2"
        onChange={(event) => setSearchName(event.target.value)}
        type="text"
        placeholder="Search for name"
        value={searchName}
      />
      <label className="flex items-center">
        <input
          className="form-checkbox h-5 w-5 text-blue-600"
          type="checkbox"
          onChange={(event) => setIsAlive(event.target.checked)}
          checked={isAlive}
        />
        <span>Character Is Alive</span>
      </label>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Search
      </button>
    </div>
  );
}

export default InputField;
