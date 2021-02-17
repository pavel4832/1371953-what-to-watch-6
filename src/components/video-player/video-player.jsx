import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({isPlaying, src, poster, isMuted, width, height}) => {
  const videoRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      setTimeout(videoRef.current.play(), 1000);
      return;
    }

    videoRef.current.pause();
    videoRef.current.src = videoRef.current.src;
    videoRef.current.currentTime = 0;
  }, [isPlaying]);

  return (
    <div className="small-movie-card__image">
      <video
        src={src}
        ref={videoRef}
        muted={isMuted}
        poster={poster}
        width={width}
        height={height}
      />
    </div>
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