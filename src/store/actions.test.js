import * as actions from './actions';
import {CONTENT_TYPE, COUNT_CARD, FILTER_TYPE, AuthorizationStatus} from '../const';
import MOVIES from '../mock/movies';
import MOVIE from '../mock/movie';
import COMMENTS from '../mock/comments';
import USER from '../mock/user';

describe(`Action creators work correctly`, () => {
  it(`Action creator for getMovies returns action with undefined payload`, () => {
    const expectedAction = {
      type: actions.ActionType.GET_MOVIES,
    };

    expect(actions.getMovies()).toEqual(expectedAction);
  });

  it(`Action creator for changeContent returns action with content payload`, () => {
    const expectedAction = {
      type: actions.ActionType.CHANGE_CONTENT,
      payload: CONTENT_TYPE.OVERVIEW,
    };

    const content = CONTENT_TYPE.OVERVIEW;

    expect(actions.changeContent(content)).toEqual(expectedAction);
  });

  it(`Action creator for changeGenre returns action with genre payload`, () => {
    const expectedAction = {
      type: actions.ActionType.CHANGE_GENRE,
      payload: FILTER_TYPE.ALL_GENRE,
    };

    const genre = FILTER_TYPE.ALL_GENRE;

    expect(actions.changeGenre(genre)).toEqual(expectedAction);
  });

  it(`Action creator for incrementStep returns action with step payload`, () => {
    const expectedAction = {
      type: actions.ActionType.INCREMENT_STEP,
      payload: COUNT_CARD.MAIN_PER_STEP,
    };

    expect(actions.incrementStep()).toEqual(expectedAction);
  });

  it(`Action creator for loadMovies returns action with movies payload`, () => {
    const expectedAction = {
      type: actions.ActionType.LOAD_MOVIES,
      payload: MOVIES,
    };

    expect(actions.loadMovies(MOVIES)).toEqual(expectedAction);
  });

  it(`Action creator for loadPromoMovie returns action with movie payload`, () => {
    const expectedAction = {
      type: actions.ActionType.LOAD_PROMO_MOVIE,
      payload: MOVIE,
    };

    expect(actions.loadPromoMovie(MOVIE)).toEqual(expectedAction);
  });

  it(`Action creator for loadActiveMovie returns action with movie payload`, () => {
    const expectedAction = {
      type: actions.ActionType.LOAD_ACTIVE_MOVIE,
      payload: MOVIE,
    };

    expect(actions.loadActiveMovie(MOVIE)).toEqual(expectedAction);
  });

  it(`Action creator for loadComments returns action with comments payload`, () => {
    const expectedAction = {
      type: actions.ActionType.LOAD_COMMENTS,
      payload: COMMENTS,
    };

    expect(actions.loadComments(COMMENTS)).toEqual(expectedAction);
  });

  it(`Action creator for loadMyMovieList returns action with movies payload`, () => {
    const expectedAction = {
      type: actions.ActionType.LOAD_MY_MOVIES,
      payload: MOVIES,
    };

    expect(actions.loadMyMovieList(MOVIES)).toEqual(expectedAction);
  });

  it(`Action creator for redirectToRoute returns action with url payload`, () => {
    const expectedAction = {
      type: actions.ActionType.REDIRECT_TO_ROUTE,
      payload: `/login`
    };

    const url = `/login`;

    expect(actions.redirectToRoute(url)).toEqual(expectedAction);
  });

  it(`Action creator for resetApp returns action with undefined payload`, () => {
    const expectedAction = {
      type: actions.ActionType.RESET_APP,
    };

    expect(actions.resetApp()).toEqual(expectedAction);
  });

  it(`Action creator for resetActiveMovie returns action with undefined payload`, () => {
    const expectedAction = {
      type: actions.ActionType.RESET_ACTIVE_MOVIE,
    };

    expect(actions.resetActiveMovie()).toEqual(expectedAction);
  });

  it(`Action creator for resetStepCount returns action with undefined payload`, () => {
    const expectedAction = {
      type: actions.ActionType.RESET_STEP_COUNT,
    };

    expect(actions.resetStepCount()).toEqual(expectedAction);
  });

  it(`Action creator for requireAuthorization returns action with status payload`, () => {
    const expectedAction = {
      type: actions.ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    };

    const status = AuthorizationStatus.NO_AUTH;

    expect(actions.requireAuthorization(status)).toEqual(expectedAction);
  });

  it(`Action creator for setData returns action with undefined payload`, () => {
    const expectedAction = {
      type: actions.ActionType.SET_DATA,
    };

    expect(actions.setData()).toEqual(expectedAction);
  });

  it(`Action creator for setActive returns action with undefined payload`, () => {
    const expectedAction = {
      type: actions.ActionType.SET_ACTIVE,
    };

    expect(actions.setActive()).toEqual(expectedAction);
  });

  it(`Action creator for setContentOverview returns action with undefined payload`, () => {
    const expectedAction = {
      type: actions.ActionType.SET_CONTENT_OVERVIEW,
    };

    expect(actions.setContentOverview()).toEqual(expectedAction);
  });

  it(`Action creator for setContentReview returns action with undefined payload`, () => {
    const expectedAction = {
      type: actions.ActionType.SET_CONTENT_REVIEW,
    };

    expect(actions.setContentReview()).toEqual(expectedAction);
  });

  it(`Action creator for setLoginError returns action with undefined payload`, () => {
    const expectedAction = {
      type: actions.ActionType.SET_LOGIN_ERROR,
    };

    expect(actions.setLoginError()).toEqual(expectedAction);
  });

  it(`Action creator for setLoginInfo returns action with movies payload`, () => {
    const expectedAction = {
      type: actions.ActionType.SET_LOGIN_INFO,
      payload: USER,
    };

    expect(actions.setLoginInfo(USER)).toEqual(expectedAction);
  });

  it(`Action creator for setMyMoviesLoaded returns action with undefined payload`, () => {
    const expectedAction = {
      type: actions.ActionType.SET_MY_MOVIES_LOADED,
    };

    expect(actions.setMyMoviesLoaded()).toEqual(expectedAction);
  });
});
