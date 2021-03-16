import {
  ActionType,
  getMovies,
  changeContent,
  changeGenre,
  incrementStep,
  loadMovies,
  loadPromoMovie,
  loadActiveMovie,
  loadComments,
  loadMyMovieList,
  redirectToRoute,
  resetApp,
  resetActiveMovie,
  resetStepCount,
  requireAuthorization,
  setData,
  setActive,
  setContentOverview,
  setContentReview,
  setLoginError,
  setMyMoviesLoaded,
} from './action';
import {CONTENT_TYPE, COUNT_CARD, FILTER_TYPE, AuthorizationStatus} from '../const';
import MOVIES from '../mock/movies';
import MOVIE from '../mock/movie';
import COMMENTS from '../mock/comments';

describe(`Action creators work correctly`, () => {
  it(`Action creator for getMovies returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.GET_MOVIES,
    };

    expect(getMovies()).toEqual(expectedAction);
  });

  it(`Action creator for changeContent returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_CONTENT,
      payload: CONTENT_TYPE.OVERVIEW,
    };

    const content = CONTENT_TYPE.OVERVIEW;

    expect(changeContent(content)).toEqual(expectedAction);
  });

  it(`Action creator for changeGenre returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: FILTER_TYPE.ALL_GENRE,
    };

    const genre = FILTER_TYPE.ALL_GENRE;

    expect(changeGenre(genre)).toEqual(expectedAction);
  });

  it(`Action creator for incrementStep returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.INCREMENT_STEP,
      payload: COUNT_CARD.MAIN_PER_STEP,
    };

    expect(incrementStep()).toEqual(expectedAction);
  });

  it(`Action creator for loadMovies returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.LOAD_MOVIES,
      payload: MOVIES,
    };

    expect(loadMovies(MOVIES)).toEqual(expectedAction);
  });

  it(`Action creator for loadPromoMovie returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: MOVIE,
    };

    expect(loadPromoMovie(MOVIE)).toEqual(expectedAction);
  });

  it(`Action creator for loadActiveMovie returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.LOAD_ACTIVE_MOVIE,
      payload: MOVIE,
    };

    expect(loadActiveMovie(MOVIE)).toEqual(expectedAction);
  });

  it(`Action creator for loadComments returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: COMMENTS,
    };

    expect(loadComments(COMMENTS)).toEqual(expectedAction);
  });

  it(`Action creator for loadMyMovieList returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.LOAD_MY_MOVIES,
      payload: MOVIES,
    };

    expect(loadMyMovieList(MOVIES)).toEqual(expectedAction);
  });

  it(`Action creator for redirectToRoute returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/login`
    };

    const url = `/login`;

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it(`Action creator for resetApp returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.RESET_APP,
    };

    expect(resetApp()).toEqual(expectedAction);
  });

  it(`Action creator for resetActiveMovie returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.RESET_ACTIVE_MOVIE,
    };

    expect(resetActiveMovie()).toEqual(expectedAction);
  });

  it(`Action creator for resetStepCount returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.RESET_STEP_COUNT,
    };

    expect(resetStepCount()).toEqual(expectedAction);
  });

  it(`Action creator for requireAuthorization returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    };

    const status = AuthorizationStatus.NO_AUTH;

    expect(requireAuthorization(status)).toEqual(expectedAction);
  });

  it(`Action creator for setData returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.SET_DATA,
    };

    expect(setData()).toEqual(expectedAction);
  });

  it(`Action creator for setActive returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.SET_ACTIVE,
    };

    expect(setActive()).toEqual(expectedAction);
  });

  it(`Action creator for setContentOverview returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.SET_CONTENT_OVERVIEW,
    };

    expect(setContentOverview()).toEqual(expectedAction);
  });

  it(`Action creator for setContentReview returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.SET_CONTENT_REVIEW,
    };

    expect(setContentReview()).toEqual(expectedAction);
  });

  it(`Action creator for setLoginError returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.SET_LOGIN_ERROR,
    };

    expect(setLoginError()).toEqual(expectedAction);
  });

  it(`Action creator for setMyMoviesLoaded returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.SET_MY_MOVIES_LOADED,
    };

    expect(setMyMoviesLoaded()).toEqual(expectedAction);
  });
});
