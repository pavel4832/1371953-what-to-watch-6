import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';
import MOCK_STORE from '../../mock/mock-store';

const mockStore = configureStore({});
const store = mockStore(MOCK_STORE);

const mockDispatch = jest.fn();
jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: () => mockDispatch,
}));

jest.mock(`../../components/video-player/video-player`, () => {
  const mockVideoPlayer = () => <>This is mock VideoPlayer</>;
  mockVideoPlayer.displayName = `MockVideoPlayer`;
  return {
    __esModule: true,
    default: () => {
      return mockVideoPlayer();
    }
  };
});

window.HTMLMediaElement.prototype.play = () => {};
window.HTMLMediaElement.prototype.pause = () => {};

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);

  it(`Render 'MainScreen' when user navigate to '/' url`, () => {
    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/ALL genre/i)).toBeInTheDocument();
  });

  it(`Render 'SingInScreen' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    history.push(`/login`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`Render 'MyListScreen' when user navigate to '/mylist' url`, () => {
    const history = createMemoryHistory();
    history.push(`/mylist`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });

  it(`Render 'MovieScreen' when user navigate to '/films/:id' url`, () => {
    const history = createMemoryHistory();
    history.push(`/films/1`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it(`Render 'AddReviewScreen' when user navigate to '/films/:id/review' url`, () => {
    const history = createMemoryHistory();
    history.push(`/films/1/review`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Post/i)).toBeInTheDocument();
  });

  it(`Render 'PlayerScreen' when user navigate to '/player/:id' url`, () => {
    const history = createMemoryHistory();
    history.push(`/player/1`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });

  it(`Render 'ErrorScreen' when user navigate to non-existent route`, () => {
    const history = createMemoryHistory();
    history.push(`/non-existent-route`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`404. Page not found`)).toBeInTheDocument();
    expect(screen.getByText(`Вернуться на главную`)).toBeInTheDocument();
  });
});
