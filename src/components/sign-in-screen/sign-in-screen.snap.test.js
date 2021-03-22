import React from 'react';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import SingInScreen from './sign-in-screen';
import configureStore from 'redux-mock-store';
import MOCK_STORE from '../../mock/mock-store';

const mockStore = configureStore({});

it(`Should SingInScreen render correctly`, () => {
  const store = mockStore(MOCK_STORE);
  const history = createMemoryHistory();

  history.push(`/login`);

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <SingInScreen />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();

  expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`login`), `keks@keks.ru`);
  userEvent.type(screen.getByTestId(`password`), `123456`);

  expect(screen.getByDisplayValue(/keks@keks.ru/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
});
