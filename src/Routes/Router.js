import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchMoviesByKeyword from "../components/KeywordSearch";
import { MovProvider } from "../contexts/MovieContext";
import Homepage from "../pages/Homepage";
import Layout from "../pages/Layout";
import DetailPage from "../pages/MovieDetail";
import SortMoviesByGenre from "../pages/MoviesByGenre";
import NotFoundPage from "../pages/NotFoundPage";
import SearchMovie from "../pages/SearchMovie";

function MyRoute() {
  return (
    <>
      <MovProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="movie/:movieID" element={<DetailPage />} />
            <Route path="genre/:genreID" element={<SortMoviesByGenre />} />
            <Route path="search" element={<SearchMovie />} />
            <Route path="keyword" element={<SearchMoviesByKeyword />}></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </MovProvider>
    </>
  );
}

export default MyRoute;
