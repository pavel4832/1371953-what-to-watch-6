import React from 'react';
import PropTypes from 'prop-types';
import {MOVIES_PROP} from "../../utils/valid";
import {Link} from 'react-router-dom';

const MovieCard = (props) => {
  const {onActive, movie} = props;
  const {name, previewImage} = movie;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        onActive(movie);
      }}>
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${movie.id}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  onActive: PropTypes.func.isRequired,
  movie: PropTypes.shape(MOVIES_PROP).isRequired,
};

export default MovieCard;
