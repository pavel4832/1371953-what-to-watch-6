import {moviesData} from './movies-data';
import * as actions from '../actions';
import {APIRoute, AppRoute, CONTENT_TYPE, COUNT_CARD, FILTER_TYPE} from '../../const';
import MOVIES from '../../mock/movies';
import MOVIE from '../../mock/movie';
import COMMENTS from '../../mock/comments';
import {getMoviesByGenre} from '../../utils/utils';
import {adaptCommentToApp, adaptMoviesToApp} from '../../utils/adaptor';
import {createAPI} from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import {addToMyList, fetchData, fetchMovieData, fetchMyMovieList, postComment} from '../api-actions';

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

const api = createAPI(() => {});

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
    expect(moviesData(state, actions.changeContent(CONTENT_TYPE.REVIEWS)))
      .toEqual({
        ...state,
        contentType: CONTENT_TYPE.REVIEWS
      });
  });

  it(`Reducer should change current genre by a given value`, () => {
    expect(moviesData(state, actions.changeGenre(FILTER_TYPE.COMEDIES)))
      .toEqual({
        ...state,
        genre: FILTER_TYPE.COMEDIES
      });
  });

  it(`Reducer should change current filtered movies by a given genre value`, () => {
    expect(moviesData(state, actions.getMovies()))
      .toEqual({
        ...state,
        filteredMovies: getMoviesByGenre(state.movies, state.genre),
      });
  });

  it(`Reducer should increment current step by a given value`, () => {
    expect(moviesData(state, actions.incrementStep()))
      .toEqual({
        ...state,
        renderedMovieCount: COUNT_CARD.MAIN_PER_STEP + COUNT_CARD.MAIN_PER_STEP
      });

    const nonIncrementStepAction = {
      type: actions.ActionType.INCREMENT_STEP,
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
      type: actions.ActionType.LOAD_MOVIES,
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
      type: actions.ActionType.LOAD_PROMO_MOVIE,
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
      type: actions.ActionType.LOAD_ACTIVE_MOVIE,
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
      type: actions.ActionType.LOAD_COMMENTS,
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
      type: actions.ActionType.LOAD_MY_MOVIES,
      payload: MOVIES
    };

    expect(moviesData(state, loadMyMovieList))
      .toEqual({
        ...state,
        myMovieList: MOVIES.map(adaptMoviesToApp),
      });
  });

  it(`Reducer should return false for flag active movie loaded`, () => {
    expect(moviesData(state, actions.resetActiveMovie))
      .toEqual({
        ...state,
        isActiveMovieLoaded: false,
      });
  });

  it(`Reducer should return true for flag active movie loaded`, () => {
    expect(moviesData(state, actions.setActive))
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
    }, actions.resetApp))
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
    expect(moviesData(state, actions.resetStepCount))
      .toEqual({
        ...state,
        renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
      });
  });

  it(`Reducer should return default for content type`, () => {
    expect(moviesData(state, actions.setContentOverview))
      .toEqual({
        ...state,
        contentType: CONTENT_TYPE.OVERVIEW,
      });
  });

  it(`Reducer should return review type for content type`, () => {
    expect(moviesData(state, actions.setContentReview))
      .toEqual({
        ...state,
        contentType: CONTENT_TYPE.REVIEWS,
      });
  });

  it(`Reducer should return true for flag movies data loaded`, () => {
    expect(moviesData(state, actions.setData))
      .toEqual({
        ...state,
        isDataLoaded: true,
      });
  });

  it(`Reducer should return true for flag favorite movies list loaded`, () => {
    expect(moviesData(state, actions.setMyMoviesLoaded))
      .toEqual({
        ...state,
        isMyMoviesLoaded: true,
      });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films and /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = fetchData();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, [{fake: true}])
      .onGet(APIRoute.PROMO)
      .reply(200, [{fake: true}]);

    return dataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: actions.ActionType.LOAD_MOVIES,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actions.ActionType.LOAD_PROMO_MOVIE,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: actions.ActionType.GET_MOVIES,
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: actions.ActionType.SET_DATA,
        });
      });
  });

  it(`Should make a correct API call to /films/:id and /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 3;
    const movieLoader = fetchMovieData(id);

    apiMock
      .onGet(`${APIRoute.FILMS}/${id}`)
      .reply(200, [{fake: true}])
      .onGet(`${APIRoute.COMMENTS}/${id}`)
      .reply(200, [{fake: true}]);

    return movieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: actions.ActionType.LOAD_ACTIVE_MOVIE,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actions.ActionType.LOAD_COMMENTS,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: actions.ActionType.SET_ACTIVE,
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const myMoviesLoader = fetchMyMovieList();

    apiMock
      .onGet(APIRoute.MY_LIST)
      .reply(200, [{fake: true}]);

    return myMoviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: actions.ActionType.LOAD_MY_MOVIES,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actions.ActionType.SET_MY_MOVIES_LOADED,
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: actions.ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });

  it(`Should make a correct API call to /comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeComment = {rating: 8, comment: `123456`};
    const id = 3;
    const commentLoader = postComment(id, fakeComment);

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${id}`)
      .reply(200, [{fake: true}]);

    return commentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: actions.ActionType.RESET_ACTIVE_MOVIE,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actions.ActionType.SET_CONTENT_REVIEW,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: actions.ActionType.REDIRECT_TO_ROUTE,
          payload: `${AppRoute.FILMS}/${id}`,
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeStatus = 1;
    const id = 3;
    const favoriteLoader = addToMyList(id, fakeStatus);

    apiMock
      .onPost(`${APIRoute.MY_LIST}/${id}/${fakeStatus}`)
      .reply(200, [{fake: true}]);

    return favoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: actions.ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MY_LIST,
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: actions.ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MY_LIST,
        });
      });
  });
});
