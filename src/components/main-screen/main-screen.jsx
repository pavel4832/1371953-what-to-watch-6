import React from 'react';
import MovieScreen from '../movie-screen/movie-screen';
import MovieList from '../movie-list/movie-list';

const MainScreen = (props) => {
  const {cardsCount, movieTitle, movieGenre, movieYear} = props;

  return <React.Fragment>
    <MovieScreen
      movieTitle={movieTitle}
      movieGenre={movieGenre}
      movieYear={movieYear}
    />

    <MovieList cardsCount={cardsCount} />
  </React.Fragment>;
};

export default MainScreen;
