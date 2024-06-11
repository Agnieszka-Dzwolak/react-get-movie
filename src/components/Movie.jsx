import PropTypes from "prop-types";

import noImage from "../assets/noImage.png";

import { Typography, Card, CardContent, CardMedia } from "@mui/material";

const Movie = ({ movie }) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          height: 500,
          my: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          image={movie.Poster === "N/A" ? noImage : movie.Poster}
          alt={movie.Title}
          sx={{ height: "70%", objectFit: "contain" }}
        />
        <CardContent
          sx={{
            height: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {movie.Title}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="textSecondary"
            paragraph
          >
            {movie.Year}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
  }),
};

export default Movie;
