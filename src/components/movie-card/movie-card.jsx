import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {moviesProp} from "../../utils/valid-props";
import {Link, useHistory} from 'react-router-dom';
import {TIMEOUT_PREVIEW} from '/src/const';

const MovieCard = (props) => {
  const [isPlay, setIsPlay] = useState(false);
  const {movie, renderPlayer} = props;
  const {name} = movie;

  const history = useHistory();

  let timer;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        clearTimeout(timer);
        timer = setTimeout(() => setIsPlay(true), TIMEOUT_PREVIEW);
      }}
      onMouseLeave={() => {
        clearTimeout(timer);
        setIsPlay(false);
      }}
      onClick={() => history.push(`/films/${movie.id}`)}>

      {renderPlayer(movie, isPlay)}

      <h3 className="small-movie-card__title">
        <Link to={`/films/${movie.id}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: moviesProp,
  renderPlayer: PropTypes.func.isRequired,
};

export default MovieCard;
