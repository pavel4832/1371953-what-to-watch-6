import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilterList from './filter-list';
import configureStore from 'redux-mock-store';
import MOVIES from '../../mock/movies';
import {FILTER_TYPE} from '../../const';

const mockStore = configureStore({});

it(`Should FilterList render correctly`, () => {
  const store = mockStore({
    DATA: {movies: MOVIES, genre: FILTER_TYPE.ALL_GENRE},
  });
  const history = createMemoryHistory();

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <FilterList />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
