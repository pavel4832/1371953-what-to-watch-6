import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {getMovieById, formatTime} from '../../utils/utils';
import {redirectToRoute} from '../../store/action';
import {AppRoute, FULL_SCREEN_SIZE, SMALL_SCREEN_SIZE} from '../../const';
import PlayerButtonPlay from '../player-button-play/player-button-play';
import ProgressTogglerTimer from '../progress-toggler-timer/progress-toggler-timer';

let hasFullScreen = false;

const PlayerScreen = (props) => {
  const {id} = props;
  const {movies} = useSelector((state) => state.DATA);
  const movieIsPlay = getMovieById(movies, id);
  const {videoLink, backgroundImage, name} = movieIsPlay;
  const isMuted = false;
  const gap = 130;

  const [isPlay, setIsPlay] = useState(false);
  const [inProgress, setProgress] = useState(0);
  const [inTime, setTimer] = useState(formatTime(0, false));
  const [inSize, setSize] = useState(SMALL_SCREEN_SIZE);

  const videoRef = useRef();

  const dispatch = useDispatch();

  let hasHours = false;

  const VideoClass = (hasFullScreen) ? `player__video` : ``;

  useEffect(() => {
    if (isPlay) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlay]);

  const onCanPlayHandler = () => {
    hasHours = (videoRef.current.duration / 3600) >= 1.0;
    setTimer(formatTime(videoRef.current.currentTime, hasHours));
  };

  const onTimeUpdateHandler = () => {
    const progress = (Math.floor(videoRef.current.currentTime) / Math.floor(videoRef.current.duration)) * 100;

    setTimer(formatTime(videoRef.current.currentTime, hasHours));
    setProgress(Math.floor(progress));
  };

  const onPlayButtonClickHandler = () => {
    setIsPlay(!isPlay);
  };

  const onProgressClickHandler = (evt) => {
    const posX = evt.clientX - 25;
    const timePos = (posX * 100) / (window.screen.availWidth - gap);

    setProgress(Math.floor(timePos));
    videoRef.current.currentTime = (timePos * Math.round(videoRef.current.duration)) / 100;
    setTimer(formatTime(videoRef.current.currentTime, hasHours));
  };

  const onEndVideoHandler = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlay(!isPlay);
  };

  const onFullButtonClickHandler = () => {
    if (!hasFullScreen) {
      setSize(FULL_SCREEN_SIZE);
      hasFullScreen = true;
    } else {
      setSize(SMALL_SCREEN_SIZE);
      hasFullScreen = false;
    }
  };

  return (
    <div className="player">
      <video
        src={videoLink}
        ref={videoRef}
        className={`${VideoClass}`}
        muted={isMuted}
        poster={backgroundImage}
        width={inSize.WIDTH}
        height={inSize.HEIGHT}
        onCanPlay={onCanPlayHandler}
        onTimeUpdate={onTimeUpdateHandler}
        onClick={onPlayButtonClickHandler}
        onEnded={onEndVideoHandler}
      />

      <button
        type="button"
        className="player__exit"
        onClick={() => {
          dispatch(redirectToRoute(`${AppRoute.FILMS}/${id}`));
        }}>
        Exit
      </button>

      <div className="player__controls">
        <ProgressTogglerTimer
          progress={inProgress}
          timer={inTime}
          onProgressClickHandler={onProgressClickHandler}
        />

        <div className="player__controls-row">
          <PlayerButtonPlay
            isPlay={isPlay}
            onButtonClick={onPlayButtonClickHandler}
          />

          <div className="player__name">{name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullButtonClickHandler}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

PlayerScreen.propTypes = {
  id: PropTypes.number.isRequired,
};

export default PlayerScreen;
