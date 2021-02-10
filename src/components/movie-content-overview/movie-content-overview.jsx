import React from 'react';
import PropTypes from "prop-types";
import {MOVIES_PROP} from "../../utils/valid";

const MovieContentOverview = (props) => {
  const {movie} = props;
  const {rating, scoresCount, description, director, starring} = movie;
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

MovieContentOverview.propTypes = {
  movie: PropTypes.shape(MOVIES_PROP).isRequired,
};

export default MovieContentOverview;
