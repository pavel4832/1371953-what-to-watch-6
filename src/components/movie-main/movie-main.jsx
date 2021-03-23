import React from 'react';
import Header from '../header/header';
import MyListButton from '../my-list-button/my-list-button';
import {useSelector, useDispatch} from 'react-redux';
import {AppRoute, FAVORITE_STATUS} from '../../const';
import {redirectToRoute} from '../../store/actions';
import {addToMyList} from '../../store/api-actions';
import PropTypes from 'prop-types';

const MovieMain = (props) => {
  const {onPlayButtonClick} = props;
  const {promoMovie} = useSelector((state) => state.DATA);
  const {id, name, posterImage, backgroundImage, genre, released, isFavorite} = promoMovie;

  const dispatch = useDispatch();

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
              dispatch(redirectToRoute(`${AppRoute.FILMS}/${id}`));
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
              <button
                className="btn btn--play movie-card__button"
                type="button"
                onClick={onPlayButtonClick}
                data-testid="play-button"
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>

              <MyListButton
                movie={promoMovie}
                onMyButtonClickHandler = {() => {
                  const status = (isFavorite) ? FAVORITE_STATUS.NO_ADD : FAVORITE_STATUS.ADD_TO;
                  dispatch(addToMyList(id, status));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MovieMain.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default MovieMain;
