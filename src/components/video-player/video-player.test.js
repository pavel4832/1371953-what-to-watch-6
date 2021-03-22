import React from 'react';
import {act} from 'react-dom/test-utils';
import {fireEvent, render} from '@testing-library/react';
import VideoPlayer from './video-player';
import {POSTER_SIZE} from '../../const';

window.HTMLMediaElement.prototype.play = () => {};
window.HTMLMediaElement.prototype.pause = () => {};

describe(`Test VideoPlayer`, () => {
  it(`VideoPlayer should be render correctly`, () => {
    const mockPath = `mock-path`;
    const {container} = render(
        <VideoPlayer
          isPlaying={true}
          src={mockPath}
          isMuted={true}
          poster={mockPath}
          width={POSTER_SIZE.WIDTH}
          height={POSTER_SIZE.HEIGHT}
        />
    );

    expect(container.querySelector(`video`)).toBeInTheDocument();
  });

  it(`VideoPlayer should play movie when data is loaded`, () => {
    const mockPath = `mock-path`;
    const {container} = render(
        <VideoPlayer
          isPlaying={true}
          src={mockPath}
          isMuted={true}
          poster={mockPath}
          width={POSTER_SIZE.WIDTH}
          height={POSTER_SIZE.HEIGHT}
        />
    );

    const videoElement = container.querySelector(`video`);

    act(() => {
      fireEvent(videoElement, new Event(`canplaythrough`));
    });
  });
});
