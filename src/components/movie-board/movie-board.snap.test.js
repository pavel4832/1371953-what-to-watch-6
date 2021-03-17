import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MovieBoard from './movie-board';
import configureStore from 'redux-mock-store';
import MOCK_STORE from '../../mock/mock-store';

const mockStore = configureStore({});

it(`Should MovieBoard render correctly`, () => {
  const store = mockStore(MOCK_STORE);
  const history = createMemoryHistory();
  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <MovieBoard />
        </Router>
      </Provider>
  );
  expect(container).toMatchSnapshot();
});
