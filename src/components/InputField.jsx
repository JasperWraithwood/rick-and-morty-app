import React, { useState } from "react";

function InputField(props) {
  const [input, setInput] = useState(null);
  const [checked, setChecked] = useState(false);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function checkboxChange(e) {
    setChecked(e.target.checked);
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 space-y-2 sm:space-y-0 my-5">
      <input
        className="border border-gray-400 rounded p-2"
        onChange={handleInput}
        type="text"
        placeholder="Search for name"
        value={input}
      />
      <label className="flex items-center">
        <input
          className="form-checkbox h-5 w-5 text-blue-600"
          type="checkbox"
          onChange={checkboxChange}
          checked={checked}
        />
        <span>Character Is Alive</span>
      </label>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          props.searchName(input);
          props.isAlive(checked);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default InputField;
