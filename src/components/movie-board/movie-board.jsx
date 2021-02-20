import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import MovieList from '../movie-list/movie-list';
import Footer from '../footer/footer';
import {moviesProp} from '../../utils/valid-props';
import FilterList from '../filter-list/filter-list';
import {FILTER_TYPE} from '../../const';

const MovieBoard = (props) => {
  const {movies, moviesIndex, onFilterChoose} = props;

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilterList
          movies={movies}
          activeLink={FILTER_TYPE.ALL_GENRE}
          setFilter={onFilterChoose}
        />

        <MovieList
          movies={movies}
          moviesIndex={moviesIndex}
        />

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

MovieBoard.propTypes = {
  movies: PropTypes.arrayOf(moviesProp).isRequired,
  moviesIndex: PropTypes.number.isRequired,
  onFilterChoose: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChoose(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {MovieBoard};
export default connect(mapStateToProps, mapDispatchToProps)(MovieBoard);
