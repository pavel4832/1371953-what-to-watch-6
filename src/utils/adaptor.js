const adaptToApp = (movie) => {
  const adaptedMovie = Object.assign(
      {},
      movie,
      {
        posterImage: movie.poster_image,
        previewImage: movie.preview_image,
        backgroundImage: movie.background_image,
        backgroundColor: movie.background_color,
        videoLink: movie.video_link,
        previewVideoLink: movie.preview_video_link,
        scoresCount: movie.scores_count,
        runTime: movie.run_time,
        isFavorite: movie.is_favorite
      }
  );

  delete adaptedMovie.poster_image;
  delete adaptedMovie.preview_image;
  delete adaptedMovie.background_image;
  delete adaptedMovie.background_color;
  delete adaptedMovie.video_link;
  delete adaptedMovie.preview_video_link;
  delete adaptedMovie.scores_count;
  delete adaptedMovie.run_time;
  delete adaptedMovie.is_favorite;

  return adaptedMovie;
};

export default adaptToApp;
