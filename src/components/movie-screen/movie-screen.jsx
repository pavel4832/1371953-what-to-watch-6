import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieFull from '../movie-full/movie-full';
import MovieSame from '../movie-same/movie-same';
import {commentsProp, moviesProp} from '../../utils/valid-props';
import {getMovieById} from '../../utils/utils';
import {fetchComments} from "../../store/api-actions";

const MovieScreen = (props) => {
  const {movies, comments, isLogin, id, getComments, isCommentsLoaded} = props;
  const activeMovie = getMovieById(movies, id);

  useEffect(() => {
    if (!isCommentsLoaded) {
      getComments(id);
    }
  }, [isCommentsLoaded]);

  return <React.Fragment>
    <MovieFull
      movie={activeMovie}
      isLogin={isLogin}
      comments={comments}
    />

    <MovieSame />
  </React.Fragment>;
};

MovieScreen.propTypes = {
  movies: PropTypes.arrayOf(moviesProp).isRequired,
  comments: PropTypes.arrayOf(commentsProp).isRequired,
  isLogin: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  getComments: PropTypes.func.isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  comments: state.comments,
  isLogin: state.isLogin,
  isCommentsLoaded: state.isCommentsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getComments(id) {
    dispatch(fetchComments(id));
  },
});

export {MovieScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);
