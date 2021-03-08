import {ActionType} from '../action';
import {adaptCommentToApp, adaptMoviesToApp} from '../../utils/adaptor';

const initialState = {
  movies: [],
  comments: [],
  activeMovie: {},
  promoMovie: {},
  isDataLoaded: false,
  isActiveMovieLoaded: false,
};

const moviesData = (state = initialState, action) => {
  switch (action.type) {
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
  }

  return state;
};

export {moviesData};
