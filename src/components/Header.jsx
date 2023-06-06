import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-5 text-black rounded-lg text-center ">
      <Link to="/">
        <h1 className="text-neongreen font-600 drop-shadow-xl mt-5 font-header text-5xl hover:text-squidblue">
          The Rick and Morty App
        </h1>
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
