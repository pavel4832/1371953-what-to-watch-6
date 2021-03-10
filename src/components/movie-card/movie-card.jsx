import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {moviesProp} from '../../utils/valid-props';
import {Link} from 'react-router-dom';
import {TIMEOUT_PREVIEW, AppRoute} from '/src/const';
import {changeGenre, getMovies, redirectToRoute, resetActiveMovie, setContentOverview} from '../../store/action';

const MovieCard = (props) => {
  const [isPlay, setIsPlay] = useState(false);
  const {movie, renderPlayer} = props;
  const {id, name, genre} = movie;

  const dispatch = useDispatch();

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
        dispatch(redirectToRoute(`${AppRoute.FILMS}/${id}`));
        dispatch(changeGenre(genre));
        dispatch(getMovies());
        dispatch(resetActiveMovie());
        dispatch(setContentOverview());
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
};

export default MovieCard;
