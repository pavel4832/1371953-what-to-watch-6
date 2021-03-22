import React from 'react';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MyListButton from './my-list-button';
import configureStore from 'redux-mock-store';
import {adaptMoviesToApp} from "../../utils/adaptor";
import MOVIE from '../../mock/movie';
import userEvent from '@testing-library/user-event';
import {APIRoute} from '../../const';

const mockStore = configureStore({});

const mockDispatch = jest.fn();
jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: () => mockDispatch,
}));

it(`When user click 'My list Button' should be redirect`, () => {
  const history = createMemoryHistory();
  const onMyButtonClickHandler = jest.fn();
  const fakeStatus = 1;
  const id = 3;

  onMyButtonClickHandler.mockImplementation(
      () => history.push(`${APIRoute.MY_LIST}/${id}/${fakeStatus}`)
  );

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <MyListButton
            movie={adaptMoviesToApp(MOVIE)}
            onMyButtonClickHandler={onMyButtonClickHandler}
          />
        </Router>
      </Provider>
  );

  userEvent.click(screen.getByRole(`button`));

  expect(onMyButtonClickHandler).toBeCalled();
});
