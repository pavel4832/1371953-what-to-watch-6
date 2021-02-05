import React from 'react';
import PropTypes from "prop-types";
import MovieFull from "../movie-full/movie-full";
import MovieSame from "../movie-same/movie-same";

const MovieScreen = (props) => {
  const {isLogin, cardsCount} = props;

  return <React.Fragment>
    <MovieFull
      isLogin={isLogin}
      headerTitle={``}
    />

    <MovieSame cardsCount={cardsCount} />
  </React.Fragment>;
};

MovieScreen.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  cardsCount: PropTypes.number.isRequired,
};

export default MovieScreen;
