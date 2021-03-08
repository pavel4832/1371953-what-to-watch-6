import React from 'react';
import PropTypes from 'prop-types';
import MovieMain from '../movie-main/movie-main';
import MovieBoard from '../movie-board/movie-board';

const MainScreen = (props) => {
  const {onCardClick} = props;

  return <React.Fragment>
    <MovieMain onCardClick={onCardClick} />

    <MovieBoard onCardClick={onCardClick} />
  </React.Fragment>;
};

MainScreen.propTypes = {
  onCardClick: PropTypes.func.isRequired,
};

export default MainScreen;
