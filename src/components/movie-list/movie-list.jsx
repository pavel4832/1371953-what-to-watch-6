import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';
import {moviesProp} from "../../utils/valid-props";
import {COUNT_CARD} from "../../const";

const MovieCardWrapped = withVideoPlayer(MovieCard);

const MovieList = (props) => {
  const {movies, myMovies, isSame, myList, activeMovie, promoMovie, renderedMovieCount, onCardClick} = props;

  let moviesInList;

  if (isSame) {
    moviesInList = movies.slice(0, renderedMovieCount + 1).filter((movie) => movie.id !== activeMovie.id);
    moviesInList = moviesInList.slice(0, COUNT_CARD.SAME);
  } else {
    if (!myList) {
      moviesInList = movies.slice(0, renderedMovieCount + 1).filter((movie) => movie.id !== promoMovie.id);
    } else {
      moviesInList = myMovies.slice();
    }
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
  myMovies: PropTypes.arrayOf(moviesProp).isRequired,
  activeMovie: moviesProp,
  promoMovie: moviesProp,
  isSame: PropTypes.bool.isRequired,
  myList: PropTypes.bool.isRequired,
  renderedMovieCount: PropTypes.number.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  movies: DATA.filteredMovies,
  myMovies: DATA.myMovieList,
  activeMovie: DATA.activeMovie,
  promoMovie: DATA.promoMovie,
  renderedMovieCount: DATA.renderedMovieCount,
});

export {MovieList};
export default connect(mapStateToProps, null)(MovieList);
