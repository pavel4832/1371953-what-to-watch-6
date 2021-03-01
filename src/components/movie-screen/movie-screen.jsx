import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieFull from '../movie-full/movie-full';
import MovieSame from '../movie-same/movie-same';
import {fetchMovieData} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';

const MovieScreen = (props) => {
  const {id, getActiveMovie, isActiveMovieLoaded, onCardClick} = props;

  useEffect(() => {
    if (!isActiveMovieLoaded) {
      getActiveMovie(id);
    }
  }, [isActiveMovieLoaded]);

  if (!isActiveMovieLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return <React.Fragment>
    <MovieFull />

    <MovieSame
      onCardClick={onCardClick}
    />
  </React.Fragment>;
};

MovieScreen.propTypes = {
  id: PropTypes.number.isRequired,
  getActiveMovie: PropTypes.func.isRequired,
  isActiveMovieLoaded: PropTypes.bool.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isActiveMovieLoaded: state.isActiveMovieLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getActiveMovie(id) {
    dispatch(fetchMovieData(id));
  },
});

export {MovieScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);
