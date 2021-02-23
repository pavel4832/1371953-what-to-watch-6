import React from 'react';
import PropTypes from "prop-types";
import {ActionCreator} from '../../store/action';
import {moviesProp} from "../../utils/valid-props";
import {connect} from "react-redux";

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
};

const mapStateToProps = (state) => ({
  movies: state.filteredMovies,
  renderedMovieCount: state.renderedMovieCount,
  setNewStep: PropTypes.func.isRequired,
});

const mapDispatchToProps = (dispatch) => ({
  setNewStep() {
    dispatch(ActionCreator.incrementStep());
  },
});

export {LoadMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(LoadMoreButton);
