export const getTimeFromMins = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;

  return hours + `h ` + minutes + `m`;
};

export const getMovieById = (movies, id) => {
  return movies.find((movie) => movie.id === id);
};
