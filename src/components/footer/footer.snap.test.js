import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Footer from './footer';
import configureStore from 'redux-mock-store';

const mockStore = configureStore({});

it(`Should Footer render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Footer />
        </Router>
      </Provider>
  );
  expect(container).toMatchSnapshot();
});
