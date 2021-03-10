import {createAction} from '@reduxjs/toolkit';
import {COUNT_CARD} from '/src/const';

export const ActionType = {
  CHANGE_CONTENT: `movies/changeContent`,
  CHANGE_GENRE: `movies/changeGenre`,
  GET_MOVIES: `movies/getMovies`,
  GET_MY_MOVIES: `movies/getMyMovies`,
  INCREMENT_STEP: `movies/incrementStep`,
  LOAD_MOVIES: `data/loadMovies`,
  LOAD_PROMO_MOVIE: `data/loadPromoMovie`,
  LOAD_ACTIVE_MOVIE: `data/loadActiveMovie`,
  LOAD_COMMENTS: `data/loadComments`,
  REDIRECT_TO_ROUTE: `movies/redirectToRoute`,
  RESET_APP: `movies/reset`,
  RESET_ACTIVE_MOVIE: `movies/resetActiveMovie`,
  RESET_STEP_COUNT: `movies/resetStepCount`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_ACTIVE: `data/setActive`,
  SET_CONTENT_OVERVIEW: `movies/setContentOverview`,
  SET_CONTENT_REVIEW: `movies/setContentReview`,
  SET_DATA: `data/setData`,
  SET_LOGIN_ERROR: `user/setLoginError`,
};

export const getMovies = createAction(ActionType.GET_MOVIES);

export const getMyMoviesList = createAction(ActionType.GET_MY_MOVIES);

export const changeContent = createAction(ActionType.CHANGE_CONTENT, (newContent) => {
  return {
    payload: newContent,
  };
});

export const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => {
  return {
    payload: genre,
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

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});

export const resetApp = createAction(ActionType.RESET_APP);

export const resetActiveMovie = createAction(ActionType.RESET_ACTIVE_MOVIE);

export const resetStepCount = createAction(ActionType.RESET_STEP_COUNT);

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});

export const setData = createAction(ActionType.SET_DATA);

export const setActive = createAction(ActionType.SET_ACTIVE);

export const setContentOverview = createAction(ActionType.SET_CONTENT_OVERVIEW);

export const setContentReview = createAction(ActionType.SET_CONTENT_REVIEW);

export const setLoginError = createAction(ActionType.SET_LOGIN_ERROR);
