import React from "react";
import { Outlet } from "react-router-dom";
import Genre from "../components/GenreList";

function Layout() {
  return (
    <div>
      <Genre />
      <Outlet />
    </div>
  );
}

export default Layout;
