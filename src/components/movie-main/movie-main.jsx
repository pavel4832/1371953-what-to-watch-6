import React from 'react';
import Header from '../header/header';
import {moviesProp} from "/src/utils/valid-props";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AppRoute} from "../../const";

const MovieMain = (props) => {
  const {movie, onCardClick} = props;
  const {id, name, posterImage, backgroundImage, genre, released} = movie;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header
        headerTitle={``}
        isReview={false}
        pageType={``}
      />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div
            className="movie-card__poster"
            onClick={() => {
              onCardClick(`${AppRoute.FILMS}/${id}`);
            }}>
            <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
          </div>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MovieMain.propTypes = {
  movie: moviesProp,
  onCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  movie: DATA.promoMovie,
});

export {MovieMain};
export default connect(mapStateToProps, null)(MovieMain);
