import {ActionCreator} from './action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const';

export const fetchData = () => (dispatch, _getState, api) => {
  Promise.all([
    api.get(APIRoute.FILMS)
      .then(({data}) => dispatch(ActionCreator.loadMovies(data))),
    api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(ActionCreator.loadPromoMovie(data))),
  ])
    .then(() => dispatch(ActionCreator.getMovies()))
    .then(() => dispatch(ActionCreator.getMyMovies()))
    .then(() => dispatch(ActionCreator.setData()));
};

export const fetchMovieData = (id) => (dispatch, _getState, api) => {
  Promise.all([
    api.get(`${APIRoute.FILMS}/${id}`)
      .then(({data}) => dispatch(ActionCreator.loadActiveMovie(data))),
    api.get(`${APIRoute.COMMENTS}/${id}`)
      .then(({data}) => dispatch(ActionCreator.loadComments(data)))
  ])
    .then(() => dispatch(ActionCreator.setActive()))
    .catch(() => dispatch(ActionCreator.redirectToRoute(APIRoute.ERROR)));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
    .catch(() => {
      dispatch(ActionCreator.setLoginError());
      dispatch(ActionCreator.redirectToRoute(AppRoute.LOGIN));
    })
);

export const postComment = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
    .then(() => dispatch(ActionCreator.resetActiveMovie()))
    .then(() => dispatch(ActionCreator.setContentReview()))
    .then(() => dispatch(ActionCreator.redirectToRoute(`${AppRoute.FILMS}/${id}`)))
);
