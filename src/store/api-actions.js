import * as actions from './actions';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const';

export const fetchData = () => (dispatch, _getState, api) => (
  Promise.all([
    api.get(APIRoute.FILMS)
      .then(({data}) => dispatch(actions.loadMovies(data))),
    api.get(APIRoute.PROMO)
      .then(({data}) => dispatch(actions.loadPromoMovie(data))),
  ])
    .then(() => dispatch(actions.getMovies()))
    .then(() => dispatch(actions.setData()))
    .catch(() => dispatch(actions.redirectToRoute(APIRoute.ERROR)))
);

export const fetchMovieData = (id) => (dispatch, _getState, api) => (
  Promise.all([
    api.get(`${APIRoute.FILMS}/${id}`)
      .then(({data}) => dispatch(actions.loadActiveMovie(data))),
    api.get(`${APIRoute.COMMENTS}/${id}`)
      .then(({data}) => dispatch(actions.loadComments(data)))
  ])
    .then(() => dispatch(actions.setActive()))
    .catch(() => dispatch(actions.redirectToRoute(APIRoute.ERROR)))
);

export const fetchMyMovieList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.MY_LIST)
    .then(({data}) => dispatch(actions.loadMyMovieList(data)))
    .then(() => dispatch(actions.setMyMoviesLoaded()))
    .catch(() => dispatch(actions.redirectToRoute(APIRoute.ERROR)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(actions.setLoginInfo(data)))
    .then(() => dispatch(actions.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(actions.setLoginInfo(data)))
    .then(() => dispatch(actions.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(actions.redirectToRoute(AppRoute.ROOT)))
    .catch(() => {
      dispatch(actions.setLoginError());
      dispatch(actions.redirectToRoute(AppRoute.LOGIN));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOG_OUT)
    .then(() => dispatch(actions.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const postComment = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
    .then(() => dispatch(actions.resetActiveMovie()))
    .then(() => dispatch(actions.setContentReview()))
    .then(() => dispatch(actions.redirectToRoute(`${AppRoute.FILMS}/${id}`)))
);

export const addToMyList = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.MY_LIST}/${id}/${status}`)
    .then(() => dispatch(actions.redirectToRoute(AppRoute.MY_LIST)))
    .catch(() => dispatch(actions.redirectToRoute(AppRoute.MY_LIST)))
);
