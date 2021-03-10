import React from 'react';
import {incrementStep} from '../../store/action';
import {useSelector, useDispatch} from 'react-redux';


const LoadMoreButton = () => {
  const {filteredMovies, renderedMovieCount} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  if (filteredMovies.length > renderedMovieCount) {
    return (
      <div className="catalog__more">
        <button
          className="catalog__button"
          type="button"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(incrementStep());
          }}
        >
          Show more</button>
      </div>
    );
  } else {
    return ``;
  }
};

export default LoadMoreButton;
