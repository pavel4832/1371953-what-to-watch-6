import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieMain from '../movie-main/movie-main';
import MovieBoard from '../movie-board/movie-board';

const MainScreen = (props) => {
  const {onCardClick} = props;

  return <React.Fragment>
    <MovieMain />

    <MovieBoard onCardClick={onCardClick} />
  </React.Fragment>;
};

MainScreen.propTypes = {
  onCardClick: PropTypes.func.isRequired,
};

export {MainScreen};
export default connect(null, null)(MainScreen);
