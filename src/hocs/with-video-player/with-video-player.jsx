import React, {PureComponent} from 'react';
import VideoPlayer from '../../components/video-player/video-player';

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return <Component
        {...this.props}
        renderPlayer={(moviePoster, movieUrl, isPlay, width, height, isMuted) => {
          return (
            <VideoPlayer
              isPlaying={isPlay}
              src={movieUrl}
              poster={moviePoster}
              isMuted={isMuted}
              width={width}
              height={height}
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
