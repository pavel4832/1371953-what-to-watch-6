import React, {useEffect} from 'react';
import Header from '../header/header';
import MyListButton from '../my-list-button/my-list-button';
import {useSelector, useDispatch} from 'react-redux';
import {AppRoute} from '../../const';
import {redirectToRoute} from '../../store/action';
import {fetchPromoMovie} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';

const MovieMain = () => {
  const {promoMovie, isPromoMovieLoaded} = useSelector((state) => state.DATA);
  const {id, name, posterImage, backgroundImage, genre, released} = promoMovie;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isPromoMovieLoaded) {
      dispatch(fetchPromoMovie());
    }
  }, [isPromoMovieLoaded]);

  if (!isPromoMovieLoaded) {
    return (
      <LoadingScreen />
    );
  }

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
                onClick={() => {
                  dispatch(redirectToRoute(`${AppRoute.PLAYER}/${id}`));
                }}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>

              <MyListButton movie={promoMovie} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieMain;
