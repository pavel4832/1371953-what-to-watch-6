import React from 'react';
import PropTypes from 'prop-types';
import {moviesProp} from "../../utils/valid-props";
import {MAX_FILTERS} from "../../const";

const FilterList = (props) => {
  const {movies, activeLink} = props;
  const filtersName = Array.from(new Set(movies.map((movie) => movie.genre)));
  filtersName.unshift(`All genre`);
  filtersName.sort();

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
              className="catalog__genres-link">
              {filter}
            </a>
          </li>);
      })};
    </ul>
  );
};

FilterList.propTypes = {
  movies: PropTypes.arrayOf(moviesProp).isRequired,
  activeLink: PropTypes.string.isRequired,
};

export default FilterList;
