import React from 'react';
import PropTypes from 'prop-types';
import MovieMain from '../movie-main/movie-main';
import MovieBoard from '../movie-board/movie-board';
import moviesProp from "/src/utils/valid";

const MainScreen = (props) => {
  const {movies, isLogin} = props;
  const MOVIE_MAIN = movies[0];

  return <React.Fragment>
    <MovieMain
      movie={MOVIE_MAIN}
      isLogin={isLogin}
    />

    <MovieBoard movies={movies} />
  </React.Fragment>;
};

MainScreen.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(moviesProp)).isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default MainScreen;
