import React from 'react';
import {useSelector} from 'react-redux';
import {RATING_LEVEL} from '../../const';

const MovieContentOverview = () => {
  const {activeMovie} = useSelector((state) => state.DATA);
  const {rating, scoresCount, description, director, starring} = activeMovie;

  let ratingLevel = ``;

  if (rating >= 0 && rating < 3) {
    ratingLevel = RATING_LEVEL.BAD;
  } else if (rating >= 3 && rating < 5) {
    ratingLevel = RATING_LEVEL.NORMAL;
  } else if (rating >= 5 && rating < 8) {
    ratingLevel = RATING_LEVEL.GOOD;
  } else if (rating >= 8 && rating < 10) {
    ratingLevel = RATING_LEVEL.VERY_GOOD;
  } else {
    ratingLevel = RATING_LEVEL.AWESOME;
  }

  return <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{ratingLevel}</span>
        <span className="movie-rating__count">{scoresCount} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{description}</p>

      <p className="movie-card__director"><strong>Director: {director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
    </div>
  </React.Fragment>;
};

export default MovieContentOverview;
