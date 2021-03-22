import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MyListButton from './my-list-button';
import configureStore from 'redux-mock-store';
import {adaptMoviesToApp} from '../../utils/adaptor';
import MOVIE from '../../mock/movie';

const mockStore = configureStore({});

it(`Should MyListButton render correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <MyListButton movie={adaptMoviesToApp(MOVIE)} onMyButtonClickHandler={jest.fn()} />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
