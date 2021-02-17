import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import {moviesProp} from "../../utils/valid-props";

const MovieList = (props) => {
  const {movies, moviesIndex} = props;
  let moviesInList;

  if (moviesIndex !== -1) {
    moviesInList = [...movies.slice(0, moviesIndex), ...movies.slice(moviesIndex + 1)];
  } else {
    moviesInList = movies.slice();
  }

  return (
    <div className="catalog__movies-list">
      {moviesInList.map((card) => (
        <MovieCard
          key={card.id}
          movie={card}
        />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(moviesProp).isRequired,
  moviesIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

export default MovieList;
