import { Chip } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import apiService from "../app/APIservice";
import useMov from "../hooks/useMov";

function SearchMovie() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  let q = searchParams.get("q");
  const { api_key, setError, keywords, setKeywords, setKeyword } = useMov();
  console.log(api_key);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get(
          `search/keyword?api_key=${api_key}&query=${q}&page=1`
        );
        setKeywords(response.data.results);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    };
    fetchData();
  });
  return (
    <>
      <div>
        <Typography variant="h2" mt={4} p="16px" ml={8}>
          You are looking for...
        </Typography>
        <Stack
          spacing={2}
          sx={{
            maxWidth: "20%",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            mt: "0",
            mb: "0",
            ml: "auto",
            mr: "auto",
          }}
        >
          {keywords?.map((keyword) => (
            <Chip
              onClick={() => {
                setKeyword(keyword.name);
                console.log(keyword.name);
                navigate(`/keyword?q=${keyword.id}`, {
                  state: { from: location },
                });
              }}
              label={keyword.name}
            />
          ))}
        </Stack>
      </div>
    </>
  );
}

export default SearchMovie;
