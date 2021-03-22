import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import LoadMoreButton from './load-more-button';
import configureStore from 'redux-mock-store';
import MOVIES from '../../mock/movies';

const mockStore = configureStore({});

it(`Should LoadMoreButton render correctly`, () => {
  const store = mockStore({
    DATA: {filteredMovies: MOVIES, renderedMovieCount: 8},
  });
  const history = createMemoryHistory();

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <LoadMoreButton />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
