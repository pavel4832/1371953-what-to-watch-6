import MOVIES from './movies';
import {adaptCommentToApp, adaptMoviesToApp} from '../utils/adaptor';
import COMMENT from './comments';
import MOVIE from './movie';
import {AuthorizationStatus, CONTENT_TYPE, COUNT_CARD, FILTER_TYPE} from '../const';

export default {
  DATA: {
    movies: MOVIES.map(adaptMoviesToApp),
    filteredMovies: MOVIES.map(adaptMoviesToApp),
    myMovieList: MOVIES.map(adaptMoviesToApp),
    comments: COMMENT.map(adaptCommentToApp),
    activeMovie: adaptMoviesToApp(MOVIE),
    promoMovie: adaptMoviesToApp(MOVIE),
    genre: FILTER_TYPE.ALL_GENRE,
    contentType: CONTENT_TYPE.OVERVIEW,
    renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
    isDataLoaded: true,
    isActiveMovieLoaded: true,
    isMyMoviesLoaded: true,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    isLoginError: true,
  }
};
