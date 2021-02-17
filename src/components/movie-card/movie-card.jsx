import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {moviesProp} from "../../utils/valid-props";
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {POSTER_SIZE} from '/src/const';

const MovieCard = (props) => {
  const [isPlay, setIsPlay] = useState(false);
  const {onActive, movie} = props;
  const {name} = movie;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        onActive(movie);
        setIsPlay(true);
      }}
      onMouseLeave={() => {
        setIsPlay(false);
      }}>

      <VideoPlayer
        isPlaying={isPlay}
        src={movie.previewVideoLink}
        poster={movie.posterImage}
        isMuted={true}
        width={POSTER_SIZE.WIDTH}
        height={POSTER_SIZE.HEIGHT}
      />

      <h3 className="small-movie-card__title">
        <Link to={`/films/${movie.id}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  onActive: PropTypes.func.isRequired,
  movie: moviesProp,
};

export default MovieCard;
