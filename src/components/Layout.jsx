import React from "react";

import { Outlet } from "react-router-dom";

import Header from "./Header";
import backgroundImage from "../images/Rick_enjoys.webp";

const Layout = () => {
  return (
    <div
      className="relative h-screen w-screen overflow-y-auto bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Header />
      <div className="flex justify-center pt-15 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
