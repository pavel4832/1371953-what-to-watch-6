import React from 'react';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MovieMain from './movie-main';
import configureStore from 'redux-mock-store';
import MOCK_STORE from '../../mock/mock-store';
import {AppRoute} from "../../const";
import userEvent from "@testing-library/user-event";

const mockStore = configureStore({});

it(`When user click 'Play Button' should be redirect`, () => {
  const store = mockStore(MOCK_STORE);
  const history = createMemoryHistory();
  const playButtonClickHandle = jest.fn();
  const id = 3;

  playButtonClickHandle.mockImplementation(
      () => history.push(`${AppRoute.PLAYER}/${id}`)
  );

  render(
      <Provider store={store}>
        <Router history={history}>
          <MovieMain
            onPlayButtonClick={playButtonClickHandle}
          />
        </Router>
      </Provider>
  );

  userEvent.click(screen.getByTestId(`play-button`));

  expect(playButtonClickHandle).toBeCalled();
});
