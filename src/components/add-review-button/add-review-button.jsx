import React from 'react';
import PropTypes from "prop-types";
import {moviesProp} from '../../utils/valid-props';
import {AuthorizationStatus, AppRoute} from '../../const';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getActiveMovie} from '../../store/movies-data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

const AddReviewButton = (props) => {
  const {movie, authorizationStatus} = props;
  const {id} = movie;

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <Link to={`${AppRoute.FILMS}/${id}/review`} className="btn movie-card__button">Add review</Link>
    );
  } else {
    return (``);
  }
};

AddReviewButton.propTypes = {
  movie: moviesProp,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  movie: getActiveMovie(state),
  authorizationStatus: getAuthorizationStatus(state),
});

export {AddReviewButton};
export default connect(mapStateToProps, null)(AddReviewButton);
