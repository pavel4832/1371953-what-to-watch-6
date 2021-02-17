import React from 'react';
import PropTypes from 'prop-types';
import MovieList from '../movie-list/movie-list';
import Footer from '../footer/footer';
import {moviesProp} from "../../utils/valid";

const MovieSame = (props) => {
  const {movies, moviesIndex} = props;

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <MovieList
          movies={movies}
          moviesIndex={moviesIndex}
        />
      </section>

      <Footer />
    </div>
  );
};

MovieSame.propTypes = {
  movies: PropTypes.arrayOf(moviesProp).isRequired,
  moviesIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

export default MovieSame;
