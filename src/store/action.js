export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  GET_MOVIES: `films/getMovies`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getMovies: (genre) => ({
    type: ActionType.GET_MOVIES,
    payload: genre,
  })
};
