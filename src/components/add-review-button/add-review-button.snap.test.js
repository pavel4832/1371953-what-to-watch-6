import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import AddReviewButton from './add-review-button';
import configureStore from 'redux-mock-store';
import MOCK_STORE from '../../mock/mock-store';

const mockStore = configureStore({});

it(`Should AddReviewButton render correctly`, () => {
  const store = mockStore(MOCK_STORE);
  const history = createMemoryHistory();

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <AddReviewButton />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
