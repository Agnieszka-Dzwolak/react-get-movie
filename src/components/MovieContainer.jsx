import PropTypes from "prop-types";
import getMovies from "../apis/getMovies";

import SearchContext from "../context/SearchContext";

import { useState, useEffect, useContext } from "react";

import Loading from "./Loading";
import Movie from "./Movie";

import { Typography, Box, Grid, Container } from "@mui/material";

const MovieContainer = () => {
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { searchText } = useContext(SearchContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovies(searchText);
        setMovies(data.Search);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchText]);
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {loading && <Loading />}
      {error && (
        <Typography variant="body1" color="error" gutterBottom>
          {error}
        </Typography>
      )}
      <Grid container spacing={2} justifyContent="center">
        {movies.length > 0 &&
          movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
              <Movie movie={movie} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

MovieContainer.propTypes = {
  searchText: PropTypes.string.isRequired,
};
export default MovieContainer;
