import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieFull from '../movie-full/movie-full';
import MovieSame from '../movie-same/movie-same';
import {moviesProp} from '../../utils/valid-props';
import {getMovieById} from '../../utils/utils';
import {fetchComments} from "../../store/api-actions";

const MovieScreen = (props) => {
  const {movies, id, getComments, isCommentsLoaded, onCardClick} = props;
  const activeMovie = getMovieById(movies, id);

  useEffect(() => {
    if (!isCommentsLoaded) {
      getComments(id);
    }
  }, [isCommentsLoaded]);

  return <React.Fragment>
    <MovieFull
      movie={activeMovie}
    />

    <MovieSame
      onCardClick={onCardClick}
    />
  </React.Fragment>;
};

MovieScreen.propTypes = {
  movies: PropTypes.arrayOf(moviesProp).isRequired,
  id: PropTypes.number.isRequired,
  getComments: PropTypes.func.isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  isCommentsLoaded: state.isCommentsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getComments(id) {
    dispatch(fetchComments(id));
  },
});

export {MovieScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);
