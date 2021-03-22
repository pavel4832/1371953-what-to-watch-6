import React from 'react';
import PropTypes from 'prop-types';

const ProgressTogglerTimer = (props) => {
  const {progress, timer, onProgressClickHandler} = props;

  const onTogglerMoveHandler = (evt) => {
    evt.preventDefault();

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();
      onProgressClickHandler(moveEvt);
    };

    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      onProgressClickHandler(upEvt);
      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  };

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress
          className="player__progress"
          value={`${progress}`}
          max="100"
          onClick={onProgressClickHandler}
        >
        </progress>
        <div
          className="player__toggler"
          style={{left: `${progress}` + `%`}}
          onMouseDown={onTogglerMoveHandler}
        >
          Toggler
        </div>
      </div>
      <div className="player__time-value">{timer}</div>
    </div>
  );
};

ProgressTogglerTimer.propTypes = {
  progress: PropTypes.number.isRequired,
  timer: PropTypes.string.isRequired,
  onProgressClickHandler: PropTypes.func.isRequired,
};

export default ProgressTogglerTimer;
