import {ActionType} from '../action';
import {adaptCommentToApp, adaptMoviesToApp} from '../../utils/adaptor';
import {CONTENT_TYPE, COUNT_CARD, FILTER_TYPE} from '../../const';
import {getMoviesByGenre, getMyMovies} from '../../utils/utils';

const initialState = {
  movies: [],
  filteredMovies: [],
  myMovieList: [],
  comments: [],
  activeMovie: {},
  promoMovie: {},
  genre: FILTER_TYPE.ALL_GENRE,
  contentType: CONTENT_TYPE.OVERVIEW,
  renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
  isDataLoaded: false,
  isActiveMovieLoaded: false,
};

const moviesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CONTENT:
      return {
        ...state,
        contentType: action.payload,
      };

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

    case ActionType.RESET_ACTIVE_MOVIE:
      return {
        ...state,
        isActiveMovieLoaded: false,
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

    case ActionType.SET_ACTIVE:
      return {
        ...state,
        isActiveMovieLoaded: true,
      };

    case ActionType.SET_CONTENT_REVIEW:
      return {
        ...state,
        contentType: CONTENT_TYPE.REVIEWS,
      };

    case ActionType.SET_DATA:
      return {
        ...state,
        isDataLoaded: true,
      };
  }

  return state;
};

export {moviesData};
