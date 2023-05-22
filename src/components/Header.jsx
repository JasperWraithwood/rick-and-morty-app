import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-blue-500 p-5 text-white shadow-lg rounded-lg text-center">
      <Link to="/" className="text-white hover:text-blue-700">
        <h1 className="text-3xl">Rick and Morty App</h1>
      </Link>
      <div className="flex justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6">
        <Link to="/locations" className="text-white hover:text-blue-700">
          <h2 className="text-lg mr-3">Locations</h2>
        </Link>
        <h2 className="text-lg">
          <Link to="/episodes" className="text-white hover:text-blue-700">
            Episodes
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default Header;
