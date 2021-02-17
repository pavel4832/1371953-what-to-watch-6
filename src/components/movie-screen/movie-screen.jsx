import React from 'react';
import PropTypes from 'prop-types';
import MovieFull from '../movie-full/movie-full';
import MovieSame from '../movie-same/movie-same';
import {commentsProp, moviesProp} from '../../utils/valid';
import {getMovieById} from '../../utils/utils';

const MovieScreen = (props) => {
  const {movies, comments, isLogin, cardsCount, contentType, id} = props;
  const sameListMovies = movies.slice(0, cardsCount);
  const activeMovie = getMovieById(movies, id);

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

export default MovieScreen;
