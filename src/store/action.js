import {createAction} from '@reduxjs/toolkit';
import {COUNT_CARD} from '/src/const';

export const ActionType = {
  LOAD_MOVIES: `data/loadMovies`,
  LOAD_PROMO_MOVIE: `data/loadPromoMovie`,
  LOAD_ACTIVE_MOVIE: `data/loadActiveMovie`,
  LOAD_COMMENTS: `data/loadComments`,
  SET_DATA: `data/setData`,
  SET_ACTIVE: `data/setActive`,
  CHANGE_GENRE: `movies/changeGenre`,
  GET_MOVIES: `movies/getMovies`,
  GET_MY_MOVIES: `movies/getMyMovies`,
  RESET_APP: `movies/reset`,
  RESET_ACTIVE_MOVIE: `movies/resetActiveMovie`,
  CHANGE_CONTENT: `movies/changeContent`,
  INCREMENT_STEP: `movies/incrementStep`,
  REDIRECT_TO_ROUTE: `movies/redirectToRoute`,
  SET_CONTENT_REVIEW: `movies/setContentReview`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_LOGIN_ERROR: `user/setLoginError`,
};

export const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => {
  return {
    payload: genre,
  };
});

export const getMovies = createAction(ActionType.GET_MOVIES);

export const getMyMoviesList = createAction(ActionType.GET_MY_MOVIES);

export const resetApp = createAction(ActionType.RESET_APP);

export const resetActiveMovie = createAction(ActionType.RESET_ACTIVE_MOVIE);

export const changeContent = createAction(ActionType.CHANGE_CONTENT, (newContent) => {
  return {
    payload: newContent,
  };
});

export const incrementStep = createAction(ActionType.INCREMENT_STEP, () => {
  return {
    payload: COUNT_CARD.MAIN_PER_STEP,
  };
});

export const loadMovies = createAction(ActionType.LOAD_MOVIES, (movies) => {
  return {
    payload: movies,
  };
});

export const loadPromoMovie = createAction(ActionType.LOAD_PROMO_MOVIE, (movie) => {
  return {
    payload: movie,
  };
});

export const loadActiveMovie = createAction(ActionType.LOAD_ACTIVE_MOVIE, (movie) => {
  return {
    payload: movie,
  };
});

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => {
  return {
    payload: comments,
  };
});

export const setData = createAction(ActionType.SET_DATA);

export const setActive = createAction(ActionType.SET_ACTIVE);

export const setContentReview = createAction(ActionType.SET_CONTENT_REVIEW);

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});

export const setLoginError = createAction(ActionType.SET_LOGIN_ERROR);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});
