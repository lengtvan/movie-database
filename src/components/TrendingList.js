import React from "react";
import { Grid } from "@mui/material";
import MovCard from "./MovieCard";
import { useEffect } from "react";
import useMov from "../hooks/useMov";
import apiService from "../app/APIservice";

import { Typography } from "@mui/material";
import { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Box } from "@mui/material";

export default function Trending() {
  const { movies, setMovies, setError, setLoading } = useMov();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiService.get(
          "trending/movie/day?api_key=3cc306d5e8c5f16471bd3b79122e0e60"
        );
        console.log(response.data);
        setMovies(response.data);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
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
      <Typography variant="h2" mt={8} p="16px" ml={8}>
        Trending
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

      {/* <ImageList sx={{ width: 500, height: 450 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">Trending</ListSubheader>
        </ImageListItem>
        {movies?.results.map((movie, index) => (
          <MovCard movie={movie} />
        ))}
      </ImageList> */}
    </>
  );
}
