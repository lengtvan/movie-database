import React from "react";
import TopRated from "../components/TopRatedList";
import Trending from "../components/TrendingList";

function Homepage() {
  return (
    <>
      <div>
        <Trending />
        <TopRated />
      </div>
      ;
    </>
  );
}

export default Homepage;
