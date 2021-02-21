import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';
import {moviesProp} from "../../utils/valid-props";
import {COUNT_CARD} from "../../const";

const MovieCardWrapped = withVideoPlayer(MovieCard);

const MovieList = (props) => {
  const {movies, isSame, activeMovie} = props;

  let moviesInList = movies.slice().filter((movie) => movie.id !== activeMovie.id);

  if (isSame) {
    moviesInList = moviesInList.slice(0, COUNT_CARD.SAME);
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
  movies: PropTypes.arrayOf(moviesProp).isRequired,
  activeMovie: moviesProp,
  moviesIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  isSame: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.filteredMovies,
  activeMovie: state.activeMovie,
});

export {MovieList};
export default connect(mapStateToProps, null)(MovieList);
