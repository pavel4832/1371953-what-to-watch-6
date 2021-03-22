import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import MovieScreen from './movie-screen';
import MOCK_STORE from '../../mock/mock-store';
import {Provider} from "react-redux";

const mockStore = configureStore({});
const store = mockStore(MOCK_STORE);

const mockDispatch = jest.fn();
jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: () => mockDispatch,
}));

jest.spyOn(redux, `useSelector`);

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

it(`Should MovieScreen render correctly`, () => {
  const history = createMemoryHistory();
  const id = 1;

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <MovieScreen id={id} />
        </Router>
      </Provider>
  );
  expect(container).toMatchSnapshot();
});
