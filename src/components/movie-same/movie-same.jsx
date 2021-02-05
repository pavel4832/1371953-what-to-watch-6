import React from 'react';
import PropTypes from 'prop-types';
import MovieList from '../movie-list/movie-list';
import Footer from '../footer/footer';

const MovieSame = (props) => {
  const {cardsCount} = props;

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <MovieList cardsCount={cardsCount} />
      </section>

      <Footer />
    </div>
  );
};

MovieSame.propTypes = {
  cardsCount: PropTypes.number.isRequired,
};

export default MovieSame;
