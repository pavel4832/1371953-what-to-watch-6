import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import AddReviewScreen from './add-review-screen';
import configureStore from 'redux-mock-store';
import MOCK_STORE from '../../mock/mock-store';

const mockStore = configureStore({});

it(`Should AddReviewScreen render correctly`, () => {
  const id = 1;
  const history = createMemoryHistory();
  const store = mockStore(MOCK_STORE);

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <AddReviewScreen id={id} />
        </Router>
      </Provider>
  );
  expect(container).toMatchSnapshot();
});
