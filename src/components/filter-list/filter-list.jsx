import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {MAX_FILTERS} from '../../const';
import {changeGenre, getMovies, resetStepCount} from '../../store/action';


const FilterList = () => {
  const {movies, genre} = useSelector((state) => state.DATA);
  const filtersName = Array.from(new Set(movies.map((movie) => movie.genre)));
  filtersName.sort();
  filtersName.unshift(`All genre`);

  const dispatch = useDispatch();


  const getActiveLink = (filter) => {
    return (filter === genre) ? `catalog__genres-item--active` : ``;
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
                dispatch(changeGenre(filter));
                dispatch(getMovies());
                dispatch(resetStepCount());
              }}
            >
              {filter}
            </a>
          </li>);
      })}
    </ul>
  );
};

export default FilterList;
