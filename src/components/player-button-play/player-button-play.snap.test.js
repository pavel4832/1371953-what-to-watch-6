import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PlayerButtonPlay from './player-button-play';
import configureStore from 'redux-mock-store';

const mockStore = configureStore({});

it(`Should PlayerButtonPlay render correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <PlayerButtonPlay isPlay={false} onButtonClick={jest.fn()} />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
