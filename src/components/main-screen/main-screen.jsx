import React from 'react';
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

export default MainScreen;
