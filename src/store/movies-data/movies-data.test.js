import {moviesData} from './movies-data';
import {
  ActionType,
  getMovies,
  changeContent,
  changeGenre,
  incrementStep,
  resetApp,
  resetActiveMovie,
  resetStepCount,
  setData,
  setActive,
  setContentOverview,
  setContentReview,
  setMyMoviesLoaded,
} from '../action';
import {CONTENT_TYPE, COUNT_CARD, FILTER_TYPE} from '../../const';
import MOVIES from '../../mock/movies';
import MOVIE from '../../mock/movie';
import COMMENTS from '../../mock/comments';
import {getMoviesByGenre} from '../../utils/utils';
import {adaptCommentToApp, adaptMoviesToApp} from "../../utils/adaptor";

const state = {
  movies: MOVIES,
  filteredMovies: MOVIES,
  myMovieList: MOVIES,
  comments: COMMENTS,
  activeMovie: MOVIE,
  promoMovie: MOVIE,
  genre: FILTER_TYPE.ALL_GENRE,
  contentType: CONTENT_TYPE.OVERVIEW,
  renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
  isDataLoaded: false,
  isActiveMovieLoaded: false,
  isMyMoviesLoaded: false
};

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(moviesData(undefined, {}))
      .toEqual({
        movies: [],
        filteredMovies: [],
        myMovieList: [],
        comments: [],
        activeMovie: {},
        promoMovie: {},
        genre: FILTER_TYPE.ALL_GENRE,
        contentType: CONTENT_TYPE.OVERVIEW,
        renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
        isDataLoaded: false,
        isActiveMovieLoaded: false,
        isMyMoviesLoaded: false,
      });
  });

  it(`Reducer should change current content type by a given value`, () => {
    expect(moviesData(state, changeContent(CONTENT_TYPE.REVIEWS)))
      .toEqual({
        ...state,
        contentType: CONTENT_TYPE.REVIEWS
      });
  });

  it(`Reducer should change current genre by a given value`, () => {
    expect(moviesData(state, changeGenre(FILTER_TYPE.COMEDIES)))
      .toEqual({
        ...state,
        genre: FILTER_TYPE.COMEDIES
      });
  });

  it(`Reducer should change current filtered movies by a given genre value`, () => {
    expect(moviesData(state, getMovies()))
      .toEqual({
        ...state,
        filteredMovies: getMoviesByGenre(state.movies, state.genre),
      });
  });

  it(`Reducer should increment current step by a given value`, () => {
    expect(moviesData(state, incrementStep()))
      .toEqual({
        ...state,
        renderedMovieCount: COUNT_CARD.MAIN_PER_STEP + COUNT_CARD.MAIN_PER_STEP
      });

    const nonIncrementStepAction = {
      type: ActionType.INCREMENT_STEP,
      payload: 0,
    };

    expect(moviesData(state, nonIncrementStepAction))
      .toEqual({
        ...state,
        renderedMovieCount: COUNT_CARD.MAIN_PER_STEP
      });
  });

  it(`Reducer should update movies by load movies`, () => {
    const loadMovies = {
      type: ActionType.LOAD_MOVIES,
      payload: MOVIES
    };

    expect(moviesData(state, loadMovies))
      .toEqual({
        ...state,
        movies: MOVIES.map(adaptMoviesToApp),
      });
  });

  it(`Reducer should update promo movie by load movie`, () => {
    const loadPromoMovie = {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: MOVIE
    };

    expect(moviesData(state, loadPromoMovie))
      .toEqual({
        ...state,
        promoMovie: adaptMoviesToApp(MOVIE),
        activeMovie: adaptMoviesToApp(MOVIE),
      });
  });

  it(`Reducer should update active movie by load movie`, () => {
    const loadActiveMovie = {
      type: ActionType.LOAD_ACTIVE_MOVIE,
      payload: MOVIE
    };

    expect(moviesData(state, loadActiveMovie))
      .toEqual({
        ...state,
        activeMovie: adaptMoviesToApp(MOVIE),
      });
  });

  it(`Reducer should update comments by load data`, () => {
    const loadComments = {
      type: ActionType.LOAD_COMMENTS,
      payload: COMMENTS
    };

    expect(moviesData(state, loadComments))
      .toEqual({
        ...state,
        comments: COMMENTS.map(adaptCommentToApp),
      });
  });

  it(`Reducer should update favorite list by load data`, () => {
    const loadMyMovieList = {
      type: ActionType.LOAD_MY_MOVIES,
      payload: MOVIES
    };

    expect(moviesData(state, loadMyMovieList))
      .toEqual({
        ...state,
        myMovieList: MOVIES.map(adaptMoviesToApp),
      });
  });

  it(`Reducer should return false for flag active movie loaded`, () => {
    expect(moviesData(state, resetActiveMovie))
      .toEqual({
        ...state,
        isActiveMovieLoaded: false,
      });
  });

  it(`Reducer should return true for flag active movie loaded`, () => {
    expect(moviesData(state, setActive))
      .toEqual({
        ...state,
        isActiveMovieLoaded: true,
      });
  });

  it(`Reducer should return default`, () => {
    expect(moviesData({
      movies: MOVIES,
      filteredMovies: MOVIES,
      myMovieList: MOVIES,
      comments: COMMENTS,
      activeMovie: MOVIE,
      promoMovie: MOVIE,
      genre: FILTER_TYPE.COMEDIES,
      contentType: CONTENT_TYPE.REVIEWS,
      renderedMovieCount: 24,
      isDataLoaded: true,
      isActiveMovieLoaded: true,
      isMyMoviesLoaded: true
    }, resetApp))
      .toEqual({
        ...state,
        genre: FILTER_TYPE.ALL_GENRE,
        activeMovie: state.promoMovie,
        contentType: CONTENT_TYPE.OVERVIEW,
        renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
        isDataLoaded: false,
        isActiveMovieLoaded: false,
        isMyMoviesLoaded: false
      });
  });

  it(`Reducer should return default for step counter`, () => {
    expect(moviesData(state, resetStepCount))
      .toEqual({
        ...state,
        renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
      });
  });

  it(`Reducer should return default for content type`, () => {
    expect(moviesData(state, setContentOverview))
      .toEqual({
        ...state,
        contentType: CONTENT_TYPE.OVERVIEW,
      });
  });

  it(`Reducer should return review type for content type`, () => {
    expect(moviesData(state, setContentReview))
      .toEqual({
        ...state,
        contentType: CONTENT_TYPE.REVIEWS,
      });
  });

  it(`Reducer should return true for flag movies data loaded`, () => {
    expect(moviesData(state, setData))
      .toEqual({
        ...state,
        isDataLoaded: true,
      });
  });

  it(`Reducer should return true for flag favorite movies list loaded`, () => {
    expect(moviesData(state, setMyMoviesLoaded))
      .toEqual({
        ...state,
        isMyMoviesLoaded: true,
      });
  });
});
