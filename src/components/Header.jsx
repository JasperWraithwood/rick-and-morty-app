import React from "react";

import { Link } from "react-router-dom";

import { EntryPageButton } from "./EntryPageButton";

function Header() {
  return (
    <div className="p-5 text-black rounded-lg text-center ">
      <Link to="/">
        <h1 className="text-neongreen font-600 drop-shadow-xl mt-5 font-header text-5xl hover:text-squidblue">
          The Rick and Morty App
        </h1>
      </Link>
      <div className="pl-48">
        <EntryPageButton moveToPage="Characters" />
        <EntryPageButton moveToPage="Locations" />
        <EntryPageButton moveToPage="Episodes" />
      </div>
    </div>
  );
}

export default Header;
