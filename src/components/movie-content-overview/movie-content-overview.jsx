import React from 'react';
import {useSelector} from 'react-redux';

const MovieContentOverview = () => {
  const {activeMovie} = useSelector((state) => state.DATA);
  const {rating, scoresCount, description, director, starring} = activeMovie;

  let ratingLevel = ``;

  if (rating >= 0 && rating < 3) {
    ratingLevel = `Bad`;
  } else if (rating >= 3 && rating < 5) {
    ratingLevel = `Normal`;
  } else if (rating >= 5 && rating < 8) {
    ratingLevel = `Good`;
  } else if (rating >= 8 && rating < 10) {
    ratingLevel = `Very good`;
  } else {
    ratingLevel = `Awesome`;
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
