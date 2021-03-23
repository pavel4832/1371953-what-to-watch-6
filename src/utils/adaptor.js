export const adaptMoviesToApp = (movie) => {
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

export const adaptCommentToApp = (comment) => {
  const adaptedComment = Object.assign(
      {},
      comment,
      {
        commentText: comment.comment
      }
  );

  delete adaptedComment.comment;

  return adaptedComment;
};

export const adaptUserToApp = (data) => {
  const adaptedUser = Object.assign(
      {},
      data,
      {
        avatarUrl: data.avatar_url
      }
  );

  delete adaptedUser.avatar_url;

  return adaptedUser;
};
