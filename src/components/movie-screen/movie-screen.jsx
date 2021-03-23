import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import MovieFull from '../movie-full/movie-full';
import MovieSame from '../movie-same/movie-same';
import {fetchMovieData} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import {redirectToRoute} from '../../store/actions';
import {AppRoute} from '../../const';

const MovieScreen = (props) => {
  const {id} = props;
  const {isActiveMovieLoaded} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isActiveMovieLoaded) {
      dispatch(fetchMovieData(id));
    }
  }, [isActiveMovieLoaded]);

  if (!isActiveMovieLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return <React.Fragment>
    <MovieFull
      onPlayButtonClick={() => {
        dispatch(redirectToRoute(`${AppRoute.PLAYER}/${id}`));
      }}
    />

    <MovieSame />
  </React.Fragment>;
};

MovieScreen.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MovieScreen;
