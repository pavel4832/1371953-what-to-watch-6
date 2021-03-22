import React from 'react';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import AddReviewForm from './add-review-form';
import configureStore from 'redux-mock-store';

const mockStore = configureStore({});

it(`Should AddReviewForm render correctly`, () => {
  const id = 1;
  const history = createMemoryHistory();

  const {container} = render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <AddReviewForm id={id} />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();

  userEvent.type(screen.getByTestId(`comment`), `HTML Academy`);

  expect(screen.getByDisplayValue(/HTML Academy/i)).toBeInTheDocument();
});
