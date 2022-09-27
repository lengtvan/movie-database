import React from "react";
import TopRated from "../components/TopRatedList";
import Trending from "../components/TrendingList";

import { Outlet } from "react-router-dom";
import Genre from "../components/GenreList";

function Layout() {
  return (
    <div>
      <Outlet />
      <Genre />
     
      
      
    </div>
  );
}

export default Layout;
