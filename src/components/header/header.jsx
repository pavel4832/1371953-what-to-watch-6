import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import UserBlock from "../user-block/user-block";
import {Link} from 'react-router-dom';
import {getMovies, resetApp} from "../../store/action";
import {AuthorizationStatus} from "../../const";
import {getAuthorizationStatus} from '../../store/user/selectors';

const Header = (props) => {
  const {authorizationStatus, headerTitle, isReview, pageType, onResetApp, updateMovies} = props;
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
            onResetApp();
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
  onResetApp: PropTypes.func.isRequired,
  updateMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onResetApp() {
    dispatch(resetApp());
  },
  updateMovies() {
    dispatch(getMovies());
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
