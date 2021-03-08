import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {moviesProp} from '../../utils/valid-props';
import {Link} from 'react-router-dom';
import {TIMEOUT_PREVIEW, AppRoute} from '/src/const';
import {changeGenre, getMovies, resetActiveMovie} from '../../store/action';

const MovieCard = (props) => {
  const [isPlay, setIsPlay] = useState(false);
  const {movie, renderPlayer, setFilter, getMoviesByFilter, resetMovie, onCardClick} = props;
  const {id, name, genre} = movie;

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
        onCardClick(`${AppRoute.FILMS}/${id}`);
        setFilter(genre);
        getMoviesByFilter(genre);
        resetMovie();
      }}>

      {renderPlayer(movie, isPlay)}

      <h3 className="small-movie-card__title">
        <Link to={`${AppRoute.FILMS}/${id}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: moviesProp,
  renderPlayer: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  getMoviesByFilter: PropTypes.func.isRequired,
  resetMovie: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setFilter(genre) {
    dispatch(changeGenre(genre));
  },
  getMoviesByFilter(genre) {
    dispatch(getMovies(genre));
  },
  resetMovie() {
    dispatch(resetActiveMovie());
  },
});

export {MovieCard};
export default connect(null, mapDispatchToProps)(MovieCard);
