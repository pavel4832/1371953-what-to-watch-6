import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import {Link} from "react-router-dom";

const MovieMain = (props) => {
  const {movieTitle, movieGenre, movieYear, isLogin} = props;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header
        isLogin={isLogin}
        headerTitle={``}
        isReview={false}
        pageType={``}
      />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{movieTitle}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{movieGenre}</span>
              <span className="movie-card__year">{movieYear}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <Link to="/mylist" className="btn btn--list movie-card__button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MovieMain.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.string.isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default MovieMain;
