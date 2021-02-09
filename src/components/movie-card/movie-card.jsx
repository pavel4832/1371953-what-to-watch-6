import React from 'react';
import PropTypes from 'prop-types';
import moviesProp from "../../utils/valid";

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
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  onActive: PropTypes.func.isRequired,
  movie: PropTypes.shape(moviesProp).isRequired,
};

export default MovieCard;
