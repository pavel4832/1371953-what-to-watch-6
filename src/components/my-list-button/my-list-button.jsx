import React from 'react';
import {moviesProp} from '../../utils/valid-props';
import PropTypes from 'prop-types';

const MyListButton = (props) => {
  const {movie, onMyButtonClickHandler} = props;
  const {isFavorite} = movie;

  const buttonImage = () => {
    if (!isFavorite) {
      return (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add" data-testid="add"></use>
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      );
    }
  };

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={onMyButtonClickHandler}
    >
      {buttonImage()}
      <span>My list</span>
    </button>
  );
};

MyListButton.propTypes = {
  movie: moviesProp,
  onMyButtonClickHandler: PropTypes.func.isRequired,
};

export default MyListButton;
