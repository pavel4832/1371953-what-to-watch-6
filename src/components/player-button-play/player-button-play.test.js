import React from 'react';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PlayerButtonPlay from './player-button-play';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe(`Test PlayerButtonPlay`, () => {
  it(`Should PlayerButtonPlay render correctly`, () => {
    const isPlay = false;

    render(
        <Provider store={mockStore({})}>
          <Router history={history}>
            <PlayerButtonPlay isPlay={isPlay} onButtonClick={jest.fn()}/>
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
  });

  it(`Should PlayerButtonPlay render correctly`, () => {
    const isPlay = true;

    render(
        <Provider store={mockStore({})}>
          <Router history={history}>
            <PlayerButtonPlay isPlay={isPlay} onButtonClick={jest.fn()}/>
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Pause/i)).toBeInTheDocument();
  });

  it(`When user click 'PlayerButtonPlay' should be call handler`, () => {
    const onPlayButtonClickHandler = jest.fn();

    render(
        <Provider store={mockStore({})}>
          <Router history={history}>
            <PlayerButtonPlay
              isPlay={false}
              onButtonClick={onPlayButtonClickHandler}/>
          </Router>
        </Provider>
    );

    userEvent.click(screen.getByRole(`button`));

    expect(onPlayButtonClickHandler).toBeCalled();
  });
});
