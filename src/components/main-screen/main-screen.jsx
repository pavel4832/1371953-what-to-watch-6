import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieMain from '../movie-main/movie-main';
import MovieBoard from '../movie-board/movie-board';
import {moviesProp} from "/src/utils/valid-props";

const MainScreen = (props) => {
  const {movies, isLogin} = props;
  const MOVIE_MAIN = 0;

  return <React.Fragment>
    <MovieMain
      movies={movies}
      moviesIndex={MOVIE_MAIN}
      isLogin={isLogin}
    />

    <MovieBoard />
  </React.Fragment>;
};

MainScreen.propTypes = {
  movies: PropTypes.arrayOf(moviesProp).isRequired,
  isLogin: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  isLogin: state.isLogin,
});

export {MainScreen};
export default connect(mapStateToProps, null)(MainScreen);
