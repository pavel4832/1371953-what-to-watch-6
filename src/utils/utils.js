import {FILTER_TYPE, EMAIL_REGEXP} from '../const';

export const getTimeFromMins = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;

  return hours + `h ` + minutes + `m`;
};

export const getMovieById = (movies, id) => {
  return movies.find((movie) => movie.id === id);
};

export const getMoviesByGenre = (movies, genre) => {
  if (genre === FILTER_TYPE.ALL_GENRE) {
    return movies;
  }
  return movies.filter((movie) => movie.genre === genre);
};

export const getMyMovies = (movies) => {
  return movies.filter((movie) => movie.isFavorite === true);
};

export const validateEmail = (value) => {
  return EMAIL_REGEXP.test(value);
};
