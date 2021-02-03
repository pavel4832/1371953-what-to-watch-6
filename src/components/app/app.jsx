import React from 'react';
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

export default App;
