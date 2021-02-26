import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import MovieList from '../movie-list/movie-list';
import Footer from '../footer/footer';
import FilterList from '../filter-list/filter-list';
import LoadMoreButton from '../load-more-button/load-more-button';

const MovieBoard = (props) => {
  const {onFilterChoose, onCardClick} = props;

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilterList setFilter={onFilterChoose} />

        <MovieList
          isSame={false}
          onCardClick={onCardClick}
        />

        <LoadMoreButton />
      </section>

      <Footer />
    </div>
  );
};

MovieBoard.propTypes = {
  onFilterChoose: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFilterChoose(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {MovieBoard};
export default connect(null, mapDispatchToProps)(MovieBoard);
