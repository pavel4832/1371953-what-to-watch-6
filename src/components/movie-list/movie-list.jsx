import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import {MOVIES_PROP} from "../../utils/valid";

const MovieList = (props) => {
  const [{}, setActiveMovie] = useState({});
  const {movies, moviesIndex} = props;
  let moviesInList = [];

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
          onActive={(movie) => {
            setActiveMovie(movie);
          }}/>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP)).isRequired,
  moviesIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

export default MovieList;
