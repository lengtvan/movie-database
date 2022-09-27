import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import apiService from "../app/APIservice";
import useMov from "../hooks/useMov";
import { Grid } from "@mui/material";
import MovCard from "../components/MovieCard";
import { Typography } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import TopRated from "../components/TopRatedList";
import Trending from "../components/TrendingList";

function SortMoviesByGenre() {
  let params = useParams();
  let genreID = params.genreID;
  const { movies, setMovies, api_key, setError, chosenGenre } = useMov();
  console.log(api_key);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get(
          `discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreID}&with_watch_monetization_types=flatrate`
        );
        console.log(genreID);
        console.log(response.data);
        setMovies(response.data);
        console.log(chosenGenre);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    };
    fetchData();
  }, [setMovies, genreID, api_key, chosenGenre, setError]);
  const [page, setPage] = useState(1);
  let limit = 5;
  const movLength = movies?.results.length;
  console.log(movLength);
  const turnNextPage = () => {
    if (limit * (page + 1) < movLength) {
      setPage(page + 1);
    }
  };
  const turnPrevPage = () => {
    if (limit * page > limit) {
      setPage(page - 1);
    }
  };
  return (
    <>
      <Typography variant="h2" mt={12} p="16px" ml={8}>
        {chosenGenre}
      </Typography>
      <Box>
        <Grid
          container
          spacing={2}
          mt={1}
          sx={{ display: "flex", flexWrap: "wrap" }}
        >
          <Grid item xs={1} md={1} lg={0.75} onClick={turnPrevPage}>
            <ArrowLeftIcon
              sx={{ height: "100%", width: "100%", cursor: "pointer" }}
            />
          </Grid>
          {movies?.results
            .slice(limit * (page - 1), limit * page)
            .map((movie, index) => (
              <Grid key={movie.id} item xs={1} sm={2} >
                <MovCard movie={movie} />
              </Grid>
            ))}
          <Grid item xs={1} md={1} lg={0.75} onClick={turnNextPage}>
            <ArrowRightIcon
              sx={{ height: "100%", width: "100%", cursor: "pointer" }}
            />
          </Grid>
        </Grid>
      </Box>
      ;
      <div>
        <Trending />
        <TopRated />
      </div>
    </>
  );
}

export default SortMoviesByGenre;
