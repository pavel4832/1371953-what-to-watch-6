import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieFull from '../movie-full/movie-full';
import MovieSame from '../movie-same/movie-same';
import {commentsProp, moviesProp} from '../../utils/valid-props';
import {getMovieById} from '../../utils/utils';

const MovieScreen = (props) => {
  const {movies, comments, isLogin, cardsCount, contentType, id} = props;
  const activeMovie = getMovieById(movies, id);
  let sameListMovies = movies.filter((movie) => movie.genre === activeMovie.genre);

  if (sameListMovies.length > cardsCount) {
    sameListMovies = sameListMovies.slice(0, cardsCount);
  }

  return <React.Fragment>
    <MovieFull
      movie={activeMovie}
      isLogin={isLogin}
      comments={comments}
      contentType={contentType}
    />

    <MovieSame
      movies={sameListMovies}
      moviesIndex={-1}
    />
  </React.Fragment>;
};

MovieScreen.propTypes = {
  movies: PropTypes.arrayOf(moviesProp).isRequired,
  comments: PropTypes.arrayOf(commentsProp).isRequired,
  isLogin: PropTypes.bool.isRequired,
  cardsCount: PropTypes.number.isRequired,
  contentType: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  comments: state.comments,
  isLogin: state.isLogin,
  cardsCount: state.sameCard,
});

export {MovieScreen};
export default connect(mapStateToProps, null)(MovieScreen);
