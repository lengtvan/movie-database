import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import apiService from "../app/APIservice";
import useMov from "../hooks/useMov";
import { Chip } from "@mui/material";
function DetailPage() {
  let params = useParams();
  let movieID = params.movieID;
  const { movie, setMovie, api_key } = useMov();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get(
          `movie/${movieID}?api_key=${api_key}`
        );
        console.log(response);
        setMovie(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [api_key, movieID]);
  return (
    <div>
      <Card
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          mr: "auto",
          ml: "auto",
          mt: "5%",
          display: "flex",
          justifyContent: "center",
          flexGrow: 1,
          p: "16px",
        }}
      >
        <CardMedia
          component="img"
          height="100%"
          image={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie?.overview}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>
              <b>
                <em>Average vote: </em>{" "}
              </b>
            </span>
            {movie?.vote_average}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>
              <b>
                <em>Release date: </em>{" "}
              </b>
            </span>
            {movie?.release_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>
              <b>
                <em>Available in: </em>{" "}
              </b>
            </span>
            {movie?.spoken_languages.map((language) => (
              <Chip label={language.name} />
            ))}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>
              <b>
                <em>Tagline: </em>{" "}
              </b>
            </span>
            {movie?.tagline}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </div>
  );
}

export default DetailPage;
