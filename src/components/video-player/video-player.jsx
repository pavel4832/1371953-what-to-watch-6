import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({defaultIsPlaying, src, poster, isMuted, width, height}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(defaultIsPlaying);

  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.oncanplaythrough = () => setIsLoading(false);
    videoRef.current.onplay = () => setIsPlaying(true);
    videoRef.current.onpause = () => setIsPlaying(false);

    return () => {
      videoRef.current.oncanplaythrough = null;
      videoRef.current.onplay = null;
      videoRef.current.onpause = null;
      videoRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    if (isPlaying) {
      setTimeout(videoRef.current.play(), 1000);
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  return (
    <div className="small-movie-card__image">
      <video src={src} ref={videoRef} muted={isMuted} poster={poster} width={width} height={height}/>
    </div>
  );
};

VideoPlayer.propTypes = {
  defaultIsPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isMuted: PropTypes.bool.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default VideoPlayer;
