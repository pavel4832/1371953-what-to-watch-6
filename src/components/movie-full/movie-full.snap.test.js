import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MovieFull from './movie-full';
import configureStore from 'redux-mock-store';
import MOCK_STORE from '../../mock/mock-store';

const mockStore = configureStore({});

it(`Should MovieFull render correctly`, () => {
  const store = mockStore(MOCK_STORE);
  const history = createMemoryHistory();

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <MovieFull />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
