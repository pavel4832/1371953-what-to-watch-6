import React from 'react';
import PropTypes from 'prop-types';
import MovieScreen from '../movie-screen/movie-screen';
import MovieBoard from '../movie-board/movie-board';

const MainScreen = (props) => {
  const {cardsCount, movieTitle, movieGenre, movieYear} = props;

  return <React.Fragment>
    <MovieScreen
      movieTitle={movieTitle}
      movieGenre={movieGenre}
      movieYear={movieYear}
    />

    <MovieBoard cardsCount={cardsCount} />
  </React.Fragment>;
};

MainScreen.propTypes = {
  cardsCount: PropTypes.number.isRequired,
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.string.isRequired,
};

export default MainScreen;
