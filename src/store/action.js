import {COUNT_CARD} from '/src/const';

export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  GET_MOVIES: `films/getMovies`,
  ACTIVE_MOVIE: `films/activeMovie`,
  RESET_APP: `films/reset`,
  CHANGE_CONTENT: `films/changeContent`,
  INCREMENT_STEP: `films/incrementStep`,
  LOAD_MOVIES: `data/loadMovies`,
  LOAD_PROMO_MOVIE: `data/loadPromoMovie`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getMovies: (genre) => ({
    type: ActionType.GET_MOVIES,
    payload: genre,
  }),
  setActiveMovie: (movie) => ({
    type: ActionType.ACTIVE_MOVIE,
    payload: movie,
  }),
  resetApp: () => ({
    type: ActionType.RESET_APP,
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
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
};
