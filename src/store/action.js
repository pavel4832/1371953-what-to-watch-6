export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  GET_MOVIES: `films/getMovies`,
  ACTIVE_MOVIE: `films/activeMovie`,
  RESET_APP: `films/reset`,
  CHANGE_CONTENT: `films/changeContent`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getMovies: (genre) => ({
    type: ActionType.GET_MOVIES,
    payload: genre,
  }),
  setActiveMovie: (movie) => ({
    type: ActionType.ACTIVE_MOVIE,
    payload: movie,
  }),
  resetApp: () => ({
    type: ActionType.RESET_APP,
  }),
  changeContent: (newContent) => ({
    type: ActionType.CHANGE_CONTENT,
    payload: newContent,
  })
};
