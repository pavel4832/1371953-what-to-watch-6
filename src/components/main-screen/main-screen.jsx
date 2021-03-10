import React from 'react';
import MovieMain from '../movie-main/movie-main';
import MovieBoard from '../movie-board/movie-board';

const MainScreen = () => {

  return <React.Fragment>
    <MovieMain />

    <MovieBoard />
  </React.Fragment>;
};

export default MainScreen;
