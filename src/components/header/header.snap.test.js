import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Header from './header';
import configureStore from 'redux-mock-store';
import MOCK_STORE from '../../mock/mock-store';

const mockStore = configureStore({});

it(`Should Header render correctly`, () => {
  const store = mockStore(MOCK_STORE);
  const history = createMemoryHistory();

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Header isReview={false} pageType={`user`} headerTitle={``} />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
