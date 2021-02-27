import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import UserBlock from "../user-block/user-block";
import {Link} from 'react-router-dom';
import {ActionCreator} from "../../store/action";
import {AuthorizationStatus} from "../../const";

const Header = (props) => {
  const {authorizationStatus, headerTitle, isReview, pageType, reset, updateMovies} = props;
  const loginClass = (authorizationStatus === AuthorizationStatus.AUTH) ? `movie-card__head` : ``;
  const titleClass = (headerTitle === ``) ? `none` : `block`;
  let headerClass = ``;
  let isSignInPage = false;

  switch (pageType) {
    case `login`:
      headerClass = `user-page__head`;
      isSignInPage = true;
      break;
    case `user` :
      headerClass = `user-page__head`;
      break;
  }

  return (
    <header className={`page-header ${loginClass} ${headerClass}`}>
      <div className="logo">
        <Link
          to="/"
          className="logo__link"
          onClick={() => {
            reset();
            updateMovies();
          }}
        >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <Breadcrumbs isReview={isReview} />

      <h1 className="page-title user-page__title" style={{display: `${titleClass}`}}>{headerTitle}</h1>

      <UserBlock isSignInPage={isSignInPage} />
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  headerTitle: PropTypes.string.isRequired,
  isReview: PropTypes.bool.isRequired,
  pageType: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
  updateMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  reset() {
    dispatch(ActionCreator.resetApp());
  },
  updateMovies() {
    dispatch(ActionCreator.getMovies());
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
