import React from "react";
import { Grid } from "@mui/material";
import MovCard from "./MovieCard";
import { useEffect } from "react";
import useMov from "../hooks/useMov";
import apiService from "../app/APIservice";
import { Typography } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";
import { Box } from "@mui/material";

export default function TopRated() {
  const { topRated, setTopRated, setError, setLoading, api_key } = useMov();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiService.get(
          `movie/top_rated?api_key=${api_key}&language=en-US&page=1`
        );
        console.log(response.data);
        setTopRated(response.data);
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
  const movLength = topRated?.results.length;
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
      <Typography variant="h2" mt={4} p="16px" ml={8}>
        Top-Rated
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
          {topRated?.results
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
    </>
  );
}
