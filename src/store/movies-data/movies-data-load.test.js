import MockAdapter from "axios-mock-adapter";
import {createAPI} from '../../services/api';
import {fetchData, fetchMyMovieList, postComment, addToMyList} from "../api-actions";
import {APIRoute, AppRoute} from "../../const";
import {ActionType} from "../action";

const api = createAPI(() => {});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMockFilms = new MockAdapter(api);
    const apiMockPromo = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = fetchData();

    apiMockFilms
      .onGet(APIRoute.FILMS)
      .reply(200, [{fake: true}]);

    apiMockPromo
      .onGet(APIRoute.PROMO)
      .reply(200, [{fake: true}]);

    return dataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_MOVIES,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_DATA,
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const myMoviesLoader = fetchMyMovieList();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return myMoviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MY_MOVIES,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_MY_MOVIES_LOADED,
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
          type: ActionType.RESET_ACTIVE_MOVIE,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_CONTENT_REVIEW,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
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
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.RESET_APP,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_CONTENT_REVIEW,
        });
      });
  });
});
