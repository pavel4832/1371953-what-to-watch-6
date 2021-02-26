import {ActionCreator} from './action';
import {AuthorizationStatus} from '../const';

export const fetchData = () => (dispatch, _getState, api) => {
  Promise.all([
    api.get(`/films`)
      .then(({data}) => dispatch(ActionCreator.loadMovies(data))),
    api.get(`/films/promo`)
    .then(({data}) => dispatch(ActionCreator.loadPromoMovie(data))),
  ])
    .then(() => dispatch(ActionCreator.getMovies()))
    .then(() => dispatch(ActionCreator.setData()));
};

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);
