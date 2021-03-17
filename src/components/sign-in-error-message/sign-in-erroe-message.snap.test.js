import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import SignInErrorMessage from './sign-in-error-message';
import configureStore from 'redux-mock-store';
import MOCK_STORE from '../../mock/mock-store';

const mockStore = configureStore({});

it(`Should SignInErrorMessage render correctly`, () => {
  const store = mockStore(MOCK_STORE);
  const history = createMemoryHistory();
  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <SignInErrorMessage isValidEmail={true}/>
        </Router>
      </Provider>
  );
  expect(container).toMatchSnapshot();
});
