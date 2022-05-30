import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import apiService from "../app/APIservice";
import useMov from "../hooks/useMov";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MovCard from "./MovieCard";
import { Grid } from "@mui/material";

function SearchMoviesByKeyword() {
  const { movies, setMovies, setError, setLoading, api_key, keyword } =
    useMov();
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  console.log(keyword);
  let q = searchParams.get("q");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiService.get(
          `keyword/${q}/movies?api_key=${api_key}&language=en-US&include_adult=false`
        );
        console.log(response.data);
        setMovies(response.data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [api_key, q, setError, setLoading, setMovies]);
  const [page, setPage] = useState(1);
  let limit = 4;
  const movLength = movies?.length;
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
    <div>
      <Typography variant="h2" mt={4} p="16px" ml={8}>
        {keyword.toUpperCase()}
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
              <Grid key={movie.id} item xs={4} md={3} lg={2}>
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
    </div>
  );
}

export default SearchMoviesByKeyword;
