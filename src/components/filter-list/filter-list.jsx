import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {moviesProp} from "../../utils/valid-props";
import {MAX_FILTERS} from "../../const";
import {changeGenre} from "../../store/action";
import {getMovies, getGenre} from '../../store/movies-data/selectors';

const FilterList = (props) => {
  const {movies, activeLink, setFilter, getMoviesByFilter} = props;
  const filtersName = Array.from(new Set(movies.map((movie) => movie.genre)));
  filtersName.sort();
  filtersName.unshift(`All genre`);

  const getActiveLink = (filter) => {
    return (filter === activeLink) ? `catalog__genres-item--active` : ``;
  };

  if (filtersName.length > MAX_FILTERS + 1) {
    filtersName.slice(0, MAX_FILTERS);
  }

  return (
    <ul className="catalog__genres-list">
      {filtersName.map((filter, index) => {
        return (
          <li
            key={`${index} - ${filter}`}
            className={`catalog__genres-item ${getActiveLink(filter)}`}>
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                setFilter(filter);
                getMoviesByFilter(filter);
              }}
            >
              {filter}
            </a>
          </li>);
      })}
    </ul>
  );
};

FilterList.propTypes = {
  movies: PropTypes.arrayOf(moviesProp).isRequired,
  activeLink: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  getMoviesByFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  activeLink: getGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  setFilter(genre) {
    dispatch(changeGenre(genre));
  },
  getMoviesByFilter() {
    dispatch(getMovies());
  },
});

export {FilterList};
export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
