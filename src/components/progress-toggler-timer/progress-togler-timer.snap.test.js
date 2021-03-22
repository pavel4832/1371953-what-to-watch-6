import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import ProgressTogglerTimer from './progress-toggler-timer';
import configureStore from "redux-mock-store";
import {createMemoryHistory} from "history";

const mockStore = configureStore({});

it(`Should ProgressTogglerTimer render correctly`, () => {
  const history = createMemoryHistory();
  const progress = 0;
  const timer = `01:01`;

  const {container} = render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <ProgressTogglerTimer
            progress={progress}
            timer={timer}
            onProgressClickHandler={jest.fn()} />
        </Router>
      </Provider>
  );
  expect(container).toMatchSnapshot();
});
