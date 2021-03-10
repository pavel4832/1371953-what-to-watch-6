import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';
import {COUNT_CARD} from '../../const';

const MovieCardWrapped = withVideoPlayer(MovieCard);

const MovieList = (props) => {
  const {myList, isSame} = props;
  const {filteredMovies, myMovieList, activeMovie, promoMovie, renderedMovieCount} = useSelector((state) => state.DATA);

  let moviesInList;

  if (isSame) {
    moviesInList = filteredMovies.slice(0, renderedMovieCount + 1).filter((movie) => movie.id !== activeMovie.id);
    moviesInList = moviesInList.slice(0, COUNT_CARD.SAME);
  } else {
    if (!myList) {
      moviesInList = filteredMovies.slice(0, renderedMovieCount + 1).filter((movie) => movie.id !== promoMovie.id);
    } else {
      moviesInList = myMovieList.slice();
    }
  }

  return (
    <div className="catalog__movies-list">
      {moviesInList.map((card) => (
        <MovieCardWrapped
          key={card.id}
          movie={card}
        />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  isSame: PropTypes.bool.isRequired,
  myList: PropTypes.bool.isRequired,
};

export default MovieList;
