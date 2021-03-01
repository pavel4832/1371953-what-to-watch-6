import {CONTENT_TYPE, FILTER_TYPE, AuthorizationStatus} from "../const";
import {ActionType} from './action';
import {adaptCommentToApp, adaptMoviesToApp} from '../utils/adaptor';
import {getMoviesByGenre, getMyMovies} from '../utils/utils';
import {COUNT_CARD} from '/src/const';

const initialState = {
  genre: FILTER_TYPE.ALL_GENRE,
  movies: [],
  filteredMovies: [],
  myMovieList: [],
  comments: [],
  activeMovie: {},
  promoMovie: {},
  contentType: CONTENT_TYPE.OVERVIEW,
  renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  isActiveMovieLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };

    case ActionType.GET_MOVIES:
      return {
        ...state,
        filteredMovies: getMoviesByGenre(state.movies, state.genre),
      };

    case ActionType.GET_MY_MOVIES:
      return {
        ...state,
        myMovieList: getMyMovies(state.movies),
      };

    case ActionType.RESET_APP:
      return {
        ...state,
        genre: FILTER_TYPE.ALL_GENRE,
        filteredMovies: [],
        comments: [],
        activeMovie: state.promoMovie,
        contentType: CONTENT_TYPE.OVERVIEW,
        renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
        isActiveMovieLoaded: false,
      };

    case ActionType.RESET_ACTIVE_MOVIE:
      return {
        ...state,
        isActiveMovieLoaded: false,
      };

    case ActionType.CHANGE_CONTENT:
      return {
        ...state,
        contentType: action.payload,
      };

    case ActionType.INCREMENT_STEP:
      return {
        ...state,
        renderedMovieCount: state.renderedMovieCount + action.payload,
      };

    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload.map(adaptMoviesToApp),
      };

    case ActionType.LOAD_PROMO_MOVIE:
      return {
        ...state,
        promoMovie: adaptMoviesToApp(action.payload),
        activeMovie: adaptMoviesToApp(action.payload),
      };

    case ActionType.LOAD_ACTIVE_MOVIE:
      return {
        ...state,
        activeMovie: adaptMoviesToApp(action.payload),
      };

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload.map(adaptCommentToApp),
      };

    case ActionType.SET_DATA:
      return {
        ...state,
        isDataLoaded: true,
      };

    case ActionType.SET_ACTIVE:
      return {
        ...state,
        isActiveMovieLoaded: true,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.SET_CONTENT_REVIEW:
      return {
        ...state,
        contentType: CONTENT_TYPE.REVIEWS,
      };
  }

  return state;
};

export {reducer};
