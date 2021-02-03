import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';

const App = (props) => {
  const {cardsCount, movieTitle, movieGenre, movieYear} = props;

  return (
    <MainScreen
      cardsCount={cardsCount}
      movieTitle={movieTitle}
      movieGenre={movieGenre}
      movieYear={movieYear} />
  );
};

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.string.isRequired,
};

export default App;
