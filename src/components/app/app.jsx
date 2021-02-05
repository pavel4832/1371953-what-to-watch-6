import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';

const App = (props) => {
  const {cardsCount, movieTitle, movieGenre, movieYear, isLogin} = props;

  return (
    <MainScreen
      cardsCount={cardsCount}
      movieTitle={movieTitle}
      movieGenre={movieGenre}
      movieYear={movieYear}
      isLogin={isLogin}
    />
  );
};

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.string.isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default App;
