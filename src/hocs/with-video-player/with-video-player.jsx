import React from 'react';
import VideoPlayer from '../../components/video-player/video-player';

const withActivePlayer = (Component) => {
  return function WrappedWithPlayer(props) {
    return <Component
      {...props}
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
  };
};

export default withActivePlayer;
