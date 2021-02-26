import React from 'react';
import MovieList from '../movie-list/movie-list';
import Footer from '../footer/footer';
import PropTypes from 'prop-types';


const MovieSame = (props) => {
  const {onCardClick} = props;

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <MovieList
          isSame={true}
          onCardClick={onCardClick}
        />
      </section>

      <Footer />
    </div>
  );
};

MovieSame.propTypes = {
  onCardClick: PropTypes.func.isRequired,
};

export default MovieSame;
