import {CONTENT_TYPE, FILTER_TYPE, AuthorizationStatus} from "../const";
import {ActionType} from './action';
import {adaptCommentToApp, adaptMoviesToApp} from '../utils/adaptor';
import {getMoviesByGenre} from '../utils/utils';
import comments from "../mock/comment";
import {COUNT_CARD} from '/src/const';

const COMMENTS = comments.map(adaptCommentToApp);

const initialState = {
  genre: FILTER_TYPE.ALL_GENRE,
  movies: [],
  filteredMovies: [],
  comments: COMMENTS,
  activeMovie: [],
  isLogin: false,
  activeCard: COUNT_CARD.ACTIVE,
  myCard: COUNT_CARD.MY_LIST,
  contentType: CONTENT_TYPE.OVERVIEW,
  renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
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
        filteredMovies: getMoviesByGenre(state.movies, action.payload),
      };

    case ActionType.ACTIVE_MOVIE:
      return {
        ...state,
        activeMovie: action.payload,
      };

    case ActionType.RESET_APP:
      return {
        ...initialState
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
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
  }

  return state;
};

export {reducer};
