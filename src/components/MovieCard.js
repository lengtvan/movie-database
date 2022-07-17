import * as React from "react";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useLocation } from "react-router-dom";

function MovCard({ movie }) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Card
      sx={{ p:"16px"}}
      onClick={() =>
        navigate(`/movie/${movie.id}`, { state: { from: location } })
      }
    >
      <ImageListItem key={movie.id} sx={{ maxHeight: "30%" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={movie.title}
          subtitle={movie.overview}
          // actionIcon={
          //   <IconButton
          //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
          //     aria-label={`info about ${item.title}`}
          //   >
          //     <InfoIcon />
          //   </IconButton>
          // }
        />
      </ImageListItem>

      {/* <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div" noWrap>
            {movie.title}
          </Typography>
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Typography variant="subtitle1">{}</Typography>
          </Stack>
        </CardContent>
      </CardActionArea> */}
    </Card>
  );
}

export default MovCard;
