import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import PlayerScreen from './player-screen';
import MOCK_STORE from '../../mock/mock-store';
import {Provider} from 'react-redux';

const mockStore = configureStore({});
const store = mockStore(MOCK_STORE);

const mockDispatch = jest.fn();

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: () => mockDispatch,
}));

jest.spyOn(redux, `useSelector`);

window.HTMLMediaElement.prototype.play = () => {};
window.HTMLMediaElement.prototype.pause = () => {};

it(`Should PlayerScreen render correctly`, () => {
  const history = createMemoryHistory();
  const id = 1;

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <PlayerScreen id={id}/>
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
