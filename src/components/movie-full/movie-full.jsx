import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import MovieContentOverview from '../movie-content-overview/movie-content-overview';
import MovieContentDetails from '../movie-content-details/movie-content-details';
import MovieContentReviews from '../movie-content-reviews/movie-content-reviews';
import {Link} from 'react-router-dom';
import {COMMENTS_PROP, MOVIES_PROP} from '../../utils/valid';

const MovieFull = (props) => {
  const {movie, comments, isLogin} = props;
  const {name, posterImage, backgroundImage, genre, released} = movie;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          isLogin={isLogin}
          headerTitle={``}
          isReview={false}
          pageType={``}
        />

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <Link to="/films/:id/review" href="add-review.html" className="btn movie-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className="movie-nav__item movie-nav__item--active">
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <MovieContentOverview movie={movie} />
          </div>
        </div>
      </div>
    </section>
  );
};

MovieFull.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  movie: PropTypes.shape(MOVIES_PROP).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(COMMENTS_PROP)).isRequired,
};

export default MovieFull;
