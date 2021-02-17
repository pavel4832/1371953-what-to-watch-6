import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {moviesProp} from "../../utils/valid-props";
import {Link} from 'react-router-dom';

const MovieCard = (props) => {
  const [isPlay, setIsPlay] = useState(false);
  const {movie, renderPlayer} = props;
  const {name} = movie;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        setIsPlay(true);
      }}
      onMouseLeave={() => {
        setIsPlay(false);
      }}>

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
