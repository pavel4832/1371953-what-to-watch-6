import React from 'react';
import PropTypes from "prop-types";
import {AppRoute, AuthorizationStatus} from "../../const";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const AddReviewButton = (props) => {
  const {authorizationStatus} = props;

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <Link to={AppRoute.REVIEW} className="btn movie-card__button">Add review</Link>
    );
  } else {
    return (``);
  }
};

AddReviewButton.propTypes = {
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {AddReviewButton};
export default connect(mapStateToProps, null)(AddReviewButton);
