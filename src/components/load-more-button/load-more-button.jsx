import React from 'react';
import PropTypes from 'prop-types';
import {incrementStep} from '../../store/action';
import {moviesProp} from '../../utils/valid-props';
import {connect} from 'react-redux';
import {getFilteredMovies, getRenderedMovieCount} from '../../store/movies-data/selectors';

const LoadMoreButton = (props) => {
  const {movies, renderedMovieCount, setNewStep} = props;

  if (movies.length > renderedMovieCount) {
    return (
      <div className="catalog__more">
        <button
          className="catalog__button"
          type="button"
          onClick={(evt) => {
            evt.preventDefault();
            setNewStep();
          }}
        >
          Show more</button>
      </div>
    );
  } else {
    return ``;
  }
};

LoadMoreButton.propTypes = {
  movies: PropTypes.arrayOf(moviesProp).isRequired,
  renderedMovieCount: PropTypes.number.isRequired,
  setNewStep: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getFilteredMovies(state),
  renderedMovieCount: getRenderedMovieCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  setNewStep() {
    dispatch(incrementStep());
  },
});

export {LoadMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(LoadMoreButton);
