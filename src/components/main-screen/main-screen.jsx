import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieMain from '../movie-main/movie-main';
import MovieBoard from '../movie-board/movie-board';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchMovieList, fetchPromoMovie} from "../../store/api-actions";

const MainScreen = (props) => {
  const {isDataLoaded, onLoadMovies, onLoadPromoMovie} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadMovies();
      onLoadPromoMovie();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return <React.Fragment>
    <MovieMain />

    <MovieBoard />
  </React.Fragment>;
};

MainScreen.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadMovies: PropTypes.func.isRequired,
  onLoadPromoMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadMovies() {
    dispatch(fetchMovieList());
  },
  onLoadPromoMovie() {
    dispatch(fetchPromoMovie());
  },
});


export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
