import films from '../mock/films';
import {FILTER_TYPE} from "../const";
import {ActionType} from './action';
import {adaptMoviesToApp} from '../utils/adaptor';
import {isMovieInGenre} from '../utils/utils';

const MOVIES = films.map(adaptMoviesToApp);

const initialState = {
  genre: FILTER_TYPE.ALL_GENRE,
  movies: MOVIES,
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
        movies: MOVIES.filter((movie) => isMovieInGenre(movie, action.payload)),
      };
  }

  return state;
};


export {reducer};
