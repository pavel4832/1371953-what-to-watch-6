import React from 'react';
import PropTypes from "prop-types";
import {AuthorizationStatus, AppRoute} from '../../const';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {moviesProp} from '../../utils/valid-props';

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
  movie: state.activeMovie,
  authorizationStatus: state.authorizationStatus,
});

export {AddReviewButton};
export default connect(mapStateToProps, null)(AddReviewButton);
