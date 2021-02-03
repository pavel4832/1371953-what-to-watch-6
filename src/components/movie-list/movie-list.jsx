import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import {generateCard} from '/src/mock/card';

const MovieList = (props) => {
  const {cardsCount} = props;
  const cards = new Array(cardsCount).fill().map(generateCard);

  return (
    <div className="catalog__movies-list">
      {cards.map((card) => <MovieCard key={card.id} movieTitle={card.name} />)}
    </div>
  );
};

MovieList.propTypes = {
  cardsCount: PropTypes.number.isRequired,
};

export default MovieList;
