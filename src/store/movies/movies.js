import {ActionType} from '../action';
import {getMoviesByGenre, getMyMovies} from '../../utils/utils';
import {CONTENT_TYPE, COUNT_CARD, FILTER_TYPE} from '../../const';

const initialState = {
  genre: FILTER_TYPE.ALL_GENRE,
  filteredMovies: [],
  myMovieList: [],
  contentType: CONTENT_TYPE.OVERVIEW,
  renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
};

const movies = (state = initialState, action) => {
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

    case ActionType.SET_CONTENT_REVIEW:
      return {
        ...state,
        contentType: CONTENT_TYPE.REVIEWS,
      };
  }

  return state;
};

export {movies};
