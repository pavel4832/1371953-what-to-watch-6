import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ErrorScreen from './error-screen';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import MOCK_STORE from '../../mock/mock-store';

const mockStore = configureStore({});

it(`Should ErrorScreen render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore(MOCK_STORE);

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <ErrorScreen />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
