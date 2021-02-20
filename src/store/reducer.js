import films from '../mock/films';
import {FILTER_TYPE} from "../const";
import {ActionType} from './action';
import {adaptCommentToApp, adaptMoviesToApp} from '../utils/adaptor';
import {getMoviesByGenre} from '../utils/utils';
import comments from "../mock/comment";
import {COUNT_CARD} from '/src/const';

const MOVIES = films.map(adaptMoviesToApp);
const COMMENTS = comments.map(adaptCommentToApp);

const initialState = {
  genre: FILTER_TYPE.ALL_GENRE,
  movies: MOVIES,
  comments: COMMENTS,
  isLogin: false,
  activeCard: COUNT_CARD.ACTIVE,
  myCard: COUNT_CARD.MY_LIST,
  sameCard: COUNT_CARD.SAME,
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
        movies: getMoviesByGenre(MOVIES, action.payload),
      };
  }

  return state;
};

export {reducer};
