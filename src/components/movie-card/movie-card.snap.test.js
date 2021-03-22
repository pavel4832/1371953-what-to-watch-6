import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import MovieCard from './movie-card';
import {Provider} from "react-redux";
import MOVIE from '../../mock/movie';
import {adaptMoviesToApp} from '../../utils/adaptor';

const mockStore = configureStore({});

const mockDispatch = jest.fn();
jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: () => mockDispatch,
}));

jest.spyOn(redux, `useSelector`);

it(`Should MovieCard render correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <MovieCard
            movie={adaptMoviesToApp(MOVIE)}
            renderPlayer={jest.fn()}
          />
        </Router>
      </Provider>
  );
  expect(container).toMatchSnapshot();
});
