import {COUNT_CARD} from '/src/const';

export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  GET_MOVIES: `films/getMovies`,
  GET_MY_MOVIES: `films/getMyMovies`,
  RESET_APP: `films/reset`,
  RESET_ACTIVE_MOVIE: `films/resetActiveMovie`,
  CHANGE_CONTENT: `films/changeContent`,
  INCREMENT_STEP: `films/incrementStep`,
  REDIRECT_TO_ROUTE: `films/redirectToRoute`,
  LOAD_MOVIES: `data/loadMovies`,
  LOAD_PROMO_MOVIE: `data/loadPromoMovie`,
  LOAD_ACTIVE_MOVIE: `films/loadActiveMovie`,
  LOAD_COMMENTS: `data/loadComments`,
  SET_DATA: `data/setData`,
  SET_ACTIVE: `data/setActive`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getMovies: () => ({
    type: ActionType.GET_MOVIES,
  }),
  getMyMovies: () => ({
    type: ActionType.GET_MY_MOVIES,
  }),
  resetApp: () => ({
    type: ActionType.RESET_APP,
  }),
  resetActiveMovie: () => ({
    type: ActionType.RESET_ACTIVE_MOVIE
  }),
  changeContent: (newContent) => ({
    type: ActionType.CHANGE_CONTENT,
    payload: newContent,
  }),
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: COUNT_CARD.MAIN_PER_STEP,
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),
  loadPromoMovie: (movie) => ({
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: movie,
  }),
  loadActiveMovie: (movie) => ({
    type: ActionType.LOAD_ACTIVE_MOVIE,
    payload: movie,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  setData: () => ({
    type: ActionType.SET_DATA,
  }),
  setActive: () => ({
    type: ActionType.SET_ACTIVE,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
