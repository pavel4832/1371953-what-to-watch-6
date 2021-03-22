import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import withVideoPlayer from './with-video-player';
import MovieCard from '../../components/movie-card/movie-card';
import MOVIE from '../../mock/movie';
import {adaptMoviesToApp} from "../../utils/adaptor";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

jest.mock(`../../components/video-player/video-player`, () => {
  const mockVideoPlayer = () => <>This is mock VideoPlayer</>;
  mockVideoPlayer.displayName = `MockVideoPlayer`;
  return {
    __esModule: true,
    default: () => {
      return mockVideoPlayer();
    }
  };
});

const mockStore = configureStore({});

describe(`Test HOC 'withVideoPlayer`, () => {
  it(`Base component should be correct rendering when use with HOC`, () => {
    const BaseComponent = () => <h1>withVideoPlayer</h1>;
    const BaseComponentWrapped = withVideoPlayer(BaseComponent);
    render(<BaseComponentWrapped />);
    expect(screen.getByText(/withVideoPlayer/i)).toBeInTheDocument();
  });

  it(`Base component should be correct rendering another component with render-prop when use with HOC`, () => {
    const history = createMemoryHistory();
    const BaseComponentWrapped = withVideoPlayer(MovieCard);
    render(
        <Provider store={mockStore({})}>
          <Router history={history}>
            <BaseComponentWrapped
              movie={adaptMoviesToApp(MOVIE)}
            />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/The Grand Budapest Hotel/i)).toBeInTheDocument();
    expect(screen.getByText(/This is mock VideoPlayer/i)).toBeInTheDocument();
  });
});
