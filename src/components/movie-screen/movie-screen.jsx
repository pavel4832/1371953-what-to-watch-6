import React from 'react';
import PropTypes from "prop-types";
import MovieFull from "../movie-full/movie-full";
import MovieSame from "../movie-same/movie-same";
import {MOVIES_PROP} from "../../utils/valid";

const MovieScreen = (props) => {
  const {movies, movieIndex, isLogin, cardsCount} = props;
  const sameListMovies = movies.slice(0, cardsCount);
  const activeMovie = movies[movieIndex];

  return <React.Fragment>
    <MovieFull
      movie={activeMovie}
      isLogin={isLogin}
      headerTitle={``}
    />

    <MovieSame
      movies={sameListMovies}
      moviesIndex={-1}
    />
  </React.Fragment>;
};

MovieScreen.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP)).isRequired,
  movieIndex: PropTypes.number.isRequired,
  isLogin: PropTypes.bool.isRequired,
  cardsCount: PropTypes.number.isRequired,
};

export default MovieScreen;
