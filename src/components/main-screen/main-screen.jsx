import React from 'react';
import PropTypes from 'prop-types';
import MovieMain from '../movie-main/movie-main';
import MovieBoard from '../movie-board/movie-board';

const MainScreen = (props) => {
  const {cardsCount, movieTitle, movieGenre, movieYear, isLogin} = props;

  return <React.Fragment>
    <MovieMain
      movieTitle={movieTitle}
      movieGenre={movieGenre}
      movieYear={movieYear}
      isLogin={isLogin}
    />

    <MovieBoard cardsCount={cardsCount} />
  </React.Fragment>;
};

MainScreen.propTypes = {
  cardsCount: PropTypes.number.isRequired,
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.string.isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default MainScreen;
