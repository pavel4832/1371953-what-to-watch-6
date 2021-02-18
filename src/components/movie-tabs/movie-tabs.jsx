import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {CONTENT_TYPE} from "../../const";
import {commentsProp, moviesProp} from "../../utils/valid-props";
import MovieContentOverview from "../movie-content-overview/movie-content-overview";
import MovieContentDetails from "../movie-content-details/movie-content-details";
import MovieContentReviews from "../movie-content-reviews/movie-content-reviews";

const MovieTabs = (props) => {
  const {movie, contentType, comments} = props;

  let overviewActiveLink = ``;
  let detailsActiveLink = ``;
  let reviewsActiveLink = ``;

  switch (contentType) {
    case CONTENT_TYPE.OVERVIEW:
      overviewActiveLink = `movie-nav__item--active`;
      detailsActiveLink = ``;
      reviewsActiveLink = ``;
      break;
    case CONTENT_TYPE.DETAILS:
      overviewActiveLink = ``;
      detailsActiveLink = `movie-nav__item--active`;
      reviewsActiveLink = ``;
      break;
    case CONTENT_TYPE.REVIEWS:
      overviewActiveLink = ``;
      detailsActiveLink = ``;
      reviewsActiveLink = `movie-nav__item--active`;
      break;
  }

  const MovieContent = () => {
    switch (contentType) {
      case CONTENT_TYPE.OVERVIEW:
        return (
          <MovieContentOverview movie={movie} />
        );
      case CONTENT_TYPE.DETAILS:
        return (
          <MovieContentDetails movie={movie} />
        );
      case CONTENT_TYPE.REVIEWS:
        return (
          <MovieContentReviews comments={comments} />
        );
    }

    return ``;
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${overviewActiveLink}`}>
            <Link to={`/films/${movie.id}`} className="movie-nav__link">Overview</Link>
          </li>
          <li className={`movie-nav__item ${detailsActiveLink}`}>
            <Link to={`/films/${movie.id}/details`} className="movie-nav__link">Details</Link>
          </li>
          <li className={`movie-nav__item ${reviewsActiveLink}`}>
            <Link to={`/films/${movie.id}/reviews`} className="movie-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>

      <MovieContent />
    </div>
  );
};

MovieTabs.propTypes = {
  movie: moviesProp,
  contentType: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(commentsProp).isRequired,
};

export default MovieTabs;
