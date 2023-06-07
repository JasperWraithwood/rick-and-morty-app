import React from "react";

import { EntryPageButton } from "../components/EntryPageButton";
import backgroundImage from "../images/Rick_enjoys.webp";

export const EntryPage = () => {
  return (
    <div
      className="relative h-screen w-screen overflow-y-auto bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="text-center pt-5">
        <h1 className="text-neongreen font-600 drop-shadow-xl mt-5 font-header text-9xl hover:text-squidblue">
          The Rick and Morty App
        </h1>
      </div>
      <div className="flex-1 text-center pt-32">
        <EntryPageButton moveToPage="Characters" />
        <EntryPageButton moveToPage="Locations" />
        <EntryPageButton moveToPage="Episodes" />
      </div>
    </div>
  );
};
