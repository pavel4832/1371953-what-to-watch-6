import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {moviesProp} from "../../utils/valid-props";
import {Link} from 'react-router-dom';
import {TIMEOUT_PREVIEW} from '/src/const';
import {ActionCreator} from "../../store/action";

const MovieCard = (props) => {
  const [isPlay, setIsPlay] = useState(false);
  const {movie, renderPlayer, setFilter, getMoviesByFilter, resetActiveMovie, onCardClick} = props;
  const {name} = movie;

  let timer;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        clearTimeout(timer);
        timer = setTimeout(() => setIsPlay(true), TIMEOUT_PREVIEW);
      }}
      onMouseLeave={() => {
        clearTimeout(timer);
        setIsPlay(false);
      }}
      onClick={() => {
        onCardClick(`/films/${movie.id}`);
        setFilter(movie.genre);
        getMoviesByFilter(movie.genre);
        resetActiveMovie();
      }}>

      {renderPlayer(movie, isPlay)}

      <h3 className="small-movie-card__title">
        <Link to={`/films/${movie.id}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: moviesProp,
  renderPlayer: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  getMoviesByFilter: PropTypes.func.isRequired,
  resetActiveMovie: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setFilter(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  getMoviesByFilter(genre) {
    dispatch(ActionCreator.getMovies(genre));
  },
  resetActiveMovie() {
    dispatch(ActionCreator.resetActiveMovie());
  },
});

export {MovieCard};
export default connect(null, mapDispatchToProps)(MovieCard);
