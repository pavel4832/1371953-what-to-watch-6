import React, {useState} from 'react';
import {moviesProp} from "../../utils/valid-props";
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {POSTER_SIZE} from '/src/const';

const MovieCard = (props) => {
  const [isPlay, setIsPlay] = useState(false);
  const {movie} = props;
  const {name} = movie;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
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
  movie: moviesProp,
};

export default MovieCard;
