import React from 'react';
import PropTypes from 'prop-types';
import MovieMain from '../movie-main/movie-main';
import MovieBoard from '../movie-board/movie-board';
import {MOVIES_PROP} from "/src/utils/valid";

const MainScreen = (props) => {
  const {movies, isLogin} = props;
  const MOVIE_MAIN = 0;

  return <React.Fragment>
    <MovieMain
      movies={movies}
      moviesIndex={MOVIE_MAIN}
      isLogin={isLogin}
    />

    <MovieBoard
      movies={movies}
      moviesIndex={MOVIE_MAIN}
    />
  </React.Fragment>;
};

MainScreen.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP)).isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default MainScreen;
