import React from 'react';
import Header from '../header/header';
import MovieTabs from '../movie-tabs/movie-tabs';
import AddReviewButton from '../add-review-button/add-review-button';
import {useDispatch, useSelector} from "react-redux";
import {redirectToRoute} from '../../store/action';
import {AppRoute} from '../../const';
import MyListButton from "../my-list-button/my-list-button";

const MovieFull = () => {
  const {activeMovie} = useSelector((state) => state.DATA);
  const {id, name, posterImage, backgroundImage, genre, released} = activeMovie;

  const dispatch = useDispatch();

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
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
              <MyListButton movie={activeMovie} />
              <AddReviewButton />
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
          </div>

          <MovieTabs />
        </div>
      </div>
    </section>
  );
};

export default MovieFull;
