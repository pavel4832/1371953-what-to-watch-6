import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import moviesProp from "../../utils/valid";

const MovieList = (props) => {
  const [activeMovie, setActiveMovie] = useState({});
  const {movies, moviesIndex} = props;
  const moviesInList = [...movies.slice(0, moviesIndex), ...movies.slice(moviesIndex + 1)];

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
  movies: PropTypes.arrayOf(PropTypes.shape(moviesProp)).isRequired,
  moviesIndex: PropTypes.number.isRequired,
};

export default MovieList;
