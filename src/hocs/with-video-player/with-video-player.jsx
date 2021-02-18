import React, {PureComponent} from 'react';
import VideoPlayer from '../../components/video-player/video-player';
import {POSTER_SIZE} from "../../const";

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return <Component
        {...this.props}
        renderPlayer={(movie, isPlay) => {
          return (
            <VideoPlayer
              isPlaying={isPlay}
              src={movie.previewVideoLink}
              poster={movie.posterImage}
              isMuted={true}
              width={POSTER_SIZE.WIDTH}
              height={POSTER_SIZE.HEIGHT}
            />
          );
        }}
      />;
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
