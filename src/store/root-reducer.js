import {combineReducers} from 'redux';
import {moviesData} from './movies-data/movies-data';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: moviesData,
  [NameSpace.USER]: user,
});
