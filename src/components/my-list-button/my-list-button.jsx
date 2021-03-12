import React from 'react';
import {moviesProp} from '../../utils/valid-props';
import {useDispatch} from 'react-redux';
import {addToMyList} from '../../store/api-actions';

const MyListButton = (props) => {
  const {movie} = props;
  const {id, isFavorite} = movie;

  const dispatch = useDispatch();

  const buttonImage = () => {
    if (!isFavorite) {
      return (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
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

  const onMyButtonClickHandler = () => {
    const status = (isFavorite) ? 0 : 1;
    dispatch(addToMyList(id, status));
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
};

export default MyListButton;
