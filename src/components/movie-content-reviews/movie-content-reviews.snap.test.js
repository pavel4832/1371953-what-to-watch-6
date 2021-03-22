import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MovieContentReviews from './movie-content-reviews';
import configureStore from 'redux-mock-store';
import MOCK_STORE from '../../mock/mock-store';

const mockStore = configureStore({});

it(`Should MovieContentReviews render correctly`, () => {
  const store = mockStore(MOCK_STORE);
  const history = createMemoryHistory();

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <MovieContentReviews />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
