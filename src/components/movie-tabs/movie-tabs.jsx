import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CONTENT_TYPE} from '../../const';
import MovieContentOverview from '../movie-content-overview/movie-content-overview';
import MovieContentDetails from '../movie-content-details/movie-content-details';
import MovieContentReviews from '../movie-content-reviews/movie-content-reviews';
import {changeContent} from '../../store/actions';

const MovieTabs = () => {
  const {contentType} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

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
          <MovieContentOverview />
        );
      case CONTENT_TYPE.DETAILS:
        return (
          <MovieContentDetails />
        );
      case CONTENT_TYPE.REVIEWS:
        return (
          <MovieContentReviews />
        );
    }

    return ``;
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${overviewActiveLink}`}>
            <a
              href="#"
              className="movie-nav__link"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(changeContent(CONTENT_TYPE.OVERVIEW));
              }}
            >
              Overview</a>
          </li>
          <li className={`movie-nav__item ${detailsActiveLink}`}>
            <a
              href="#"
              className="movie-nav__link"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(changeContent(CONTENT_TYPE.DETAILS));
              }}
            >
              Details</a>
          </li>
          <li className={`movie-nav__item ${reviewsActiveLink}`}>
            <a
              href="#"
              className="movie-nav__link"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(changeContent(CONTENT_TYPE.REVIEWS));
              }}
            >
              Reviews</a>
          </li>
        </ul>
      </nav>

      <MovieContent />
    </div>
  );
};

export default MovieTabs;
