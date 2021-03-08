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

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const getMovies = () => ({
  type: ActionType.GET_MOVIES,
});

export const getMyMovies = () => ({
  type: ActionType.GET_MY_MOVIES,
});

export const resetApp = () => ({
  type: ActionType.RESET_APP,
});

export const resetActiveMovie = () => ({
  type: ActionType.RESET_ACTIVE_MOVIE
});

export const changeContent = (newContent) => ({
  type: ActionType.CHANGE_CONTENT,
  payload: newContent,
});

export const incrementStep = () => ({
  type: ActionType.INCREMENT_STEP,
  payload: COUNT_CARD.MAIN_PER_STEP,
});

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies,
});

export const loadPromoMovie = (movie) => ({
  type: ActionType.LOAD_PROMO_MOVIE,
  payload: movie,
});

export const loadActiveMovie = (movie) => ({
  type: ActionType.LOAD_ACTIVE_MOVIE,
  payload: movie,
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
});

export const setData = () => ({
  type: ActionType.SET_DATA,
});

export const setActive = () => ({
  type: ActionType.SET_ACTIVE,
});

export const setContentReview = () => ({
  type: ActionType.SET_CONTENT_REVIEW,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const setLoginError = () => ({
  type: ActionType.SET_LOGIN_ERROR,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
