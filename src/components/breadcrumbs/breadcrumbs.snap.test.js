import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Breadcrumbs from './breadcrumbs';
import configureStore from 'redux-mock-store';

const mockStore = configureStore({});

it(`Should Breadcrumbs render correctly`, () => {
  const isReview = true;
  const history = createMemoryHistory();
  const {container} = render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Breadcrumbs isReview={isReview} />
        </Router>
      </Provider>
  );
  expect(container).toMatchSnapshot();
});
