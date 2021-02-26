import {CONTENT_TYPE, FILTER_TYPE, AuthorizationStatus} from "../const";
import {ActionType} from './action';
import {adaptCommentToApp, adaptMoviesToApp} from '../utils/adaptor';
import {getMoviesByGenre} from '../utils/utils';
import {COUNT_CARD} from '/src/const';

const initialState = {
  genre: FILTER_TYPE.ALL_GENRE,
  movies: [],
  filteredMovies: [],
  comments: [],
  activeMovie: {},
  myCard: COUNT_CARD.MY_LIST,
  contentType: CONTENT_TYPE.OVERVIEW,
  renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  isCommentsLoaded: false,
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

    case ActionType.ACTIVE_MOVIE:
      return {
        ...state,
        activeMovie: action.payload,
        isCommentsLoaded: false,
      };

    case ActionType.RESET_APP:
      return {
        ...state,
        genre: FILTER_TYPE.ALL_GENRE,
        filteredMovies: [],
        comments: [],
        activeMovie: {},
        myCard: COUNT_CARD.MY_LIST,
        contentType: CONTENT_TYPE.OVERVIEW,
        renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
        isDataLoaded: false,
        isCommentsLoaded: false,
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
        isDataLoaded: true,
      };
    case ActionType.LOAD_PROMO_MOVIE:
      return {
        ...state,
        activeMovie: adaptMoviesToApp(action.payload),
        isDataLoaded: true,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload.map(adaptCommentToApp),
        isCommentsLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
  }

  return state;
};

export {reducer};
