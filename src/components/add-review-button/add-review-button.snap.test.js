import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import AddReviewButton from './add-review-button';
import configureStore from 'redux-mock-store';
import MOVIE from '../../mock/movie';
import {AuthorizationStatus} from "../../const";

const mockStore = configureStore({});

it(`Should NotFoundScreen render correctly`, () => {
  const store = mockStore({
    DATA: {activeMovie: MOVIE},
    USER: {authorizationStatus: AuthorizationStatus.AUTH}
  });
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
