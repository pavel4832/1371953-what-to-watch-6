import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({isPlaying, src, poster, isMuted, width, height}) => {
  const videoRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.src = videoRef.current.src;
    videoRef.current.currentTime = 0;
  }, [isPlaying]);

  return (
    <video
      src={src}
      ref={videoRef}
      muted={isMuted}
      poster={poster}
      width={width}
      height={height}
    />
  );
};

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isMuted: PropTypes.bool.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default VideoPlayer;
