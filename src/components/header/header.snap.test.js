import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Header from './header';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from "../../const";

const mockStore = configureStore({});

it(`Should Header render correctly`, () => {
  const store = mockStore({
    USER: {authorizationStatus: AuthorizationStatus.AUTH}
  });
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
