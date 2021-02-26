import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';
import {moviesProp} from "../../utils/valid-props";
import {COUNT_CARD} from "../../const";

const MovieCardWrapped = withVideoPlayer(MovieCard);

const MovieList = (props) => {
  const {movies, isSame, activeMovie, renderedMovieCount, onCardClick} = props;

  let moviesInList = movies.slice(0, renderedMovieCount + 1).filter((movie) => movie.id !== activeMovie.id);

  if (isSame) {
    moviesInList = moviesInList.slice(0, COUNT_CARD.SAME);
  }

  return (
    <div className="catalog__movies-list">
      {moviesInList.map((card) => (
        <MovieCardWrapped
          key={card.id}
          movie={card}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(moviesProp).isRequired,
  activeMovie: moviesProp,
  isSame: PropTypes.bool.isRequired,
  renderedMovieCount: PropTypes.number.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.filteredMovies,
  activeMovie: state.activeMovie,
  renderedMovieCount: state.renderedMovieCount,
});

export {MovieList};
export default connect(mapStateToProps, null)(MovieList);
