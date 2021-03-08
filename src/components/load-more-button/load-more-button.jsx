import React from 'react';
import PropTypes from "prop-types";
import {incrementStep} from '../../store/action';
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

const mapStateToProps = ({DATA}) => ({
  movies: DATA.filteredMovies,
  renderedMovieCount: DATA.renderedMovieCount,
  setNewStep: PropTypes.func.isRequired,
});

const mapDispatchToProps = (dispatch) => ({
  setNewStep() {
    dispatch(incrementStep());
  },
});

export {LoadMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(LoadMoreButton);
