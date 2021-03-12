import {FILTER_TYPE} from '../const';

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

const getNumber = (number) => {
  if (number.toString().length === 1) {
    return number.toString().padStart(2, `0`);
  }

  return number.toString();
};

export const formatTime = (time, hours) => {
  if (hours) {
    const h = getNumber(Math.floor(time / 3600));
    time = time - h * 3600;

    const m = getNumber(Math.floor(time / 60));
    const s = getNumber(Math.floor(time % 60));

    return h + `:` + m + `:` + s;
  } else {
    const m = getNumber(Math.floor(time / 60));
    const s = getNumber(Math.floor(time % 60));

    return m + `:` + s;
  }
};
