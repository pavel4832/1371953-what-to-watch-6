import {
  getMovies,
  loadActiveMovie,
  loadComments,
  loadMovies,
  loadMyMovieList,
  loadPromoMovie,
  setActive,
  setContentReview,
  setData,
  setLoginError,
  setMyMoviesLoaded,
  redirectToRoute,
  resetApp,
  resetActiveMovie,
  requireAuthorization,
} from './action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const';

export const fetchData = () => (dispatch, _getState, api) => {
  Promise.all([
    api.get(APIRoute.FILMS)
      .then(({data}) => dispatch(loadMovies(data))),
    api.get(APIRoute.PROMO)
      .then(({data}) => dispatch(loadPromoMovie(data))),
  ])
    .then(() => dispatch(getMovies()))
    .then(() => dispatch(setData()))
    .catch(() => dispatch(redirectToRoute(APIRoute.ERROR)));
};

export const fetchMovieData = (id) => (dispatch, _getState, api) => {
  Promise.all([
    api.get(`${APIRoute.FILMS}/${id}`)
      .then(({data}) => dispatch(loadActiveMovie(data))),
    api.get(`${APIRoute.COMMENTS}/${id}`)
      .then(({data}) => dispatch(loadComments(data)))
  ])
    .then(() => dispatch(setActive()))
    .catch(() => dispatch(redirectToRoute(APIRoute.ERROR)));
};

export const fetchMyMovieList = () => (dispatch, _getState, api) => {
  api.get(APIRoute.MY_LIST)
    .then(({data}) => dispatch(loadMyMovieList(data)))
    .then(() => dispatch(setMyMoviesLoaded()))
    .catch(() => dispatch(redirectToRoute(APIRoute.ERROR)));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch(() => {
      dispatch(setLoginError());
      dispatch(redirectToRoute(AppRoute.LOGIN));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOG_OUT)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);

export const postComment = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
    .then(() => dispatch(resetActiveMovie()))
    .then(() => dispatch(setContentReview()))
    .then(() => dispatch(redirectToRoute(`${AppRoute.FILMS}/${id}`)))
);

export const addToMyList = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.MY_LIST}/${id}/${status}`)
    .then(() => dispatch(resetApp()))
    .then(() => dispatch(setContentReview()))
);
