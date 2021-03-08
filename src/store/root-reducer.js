import {combineReducers} from 'redux';
import {movies} from './movies/movies';
import {moviesData} from './movies-data/movies-data';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  MOVIES: `MOVIES`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: moviesData,
  [NameSpace.MOVIES]: movies,
  [NameSpace.USER]: user,
});
