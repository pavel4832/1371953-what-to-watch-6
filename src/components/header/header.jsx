import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import UserBlock from '../user-block/user-block';
import {Link} from 'react-router-dom';
import {getMovies, resetApp} from '../../store/actions';
import {AuthorizationStatus, PAGE_TYPE} from '../../const';

const Header = (props) => {
  const {headerTitle, isReview, pageType} = props;
  const {authorizationStatus} = useSelector((state) => state.USER);

  const loginClass = (authorizationStatus === AuthorizationStatus.AUTH) ? `movie-card__head` : ``;
  const titleClass = (headerTitle === ``) ? `none` : `block`;

  const dispatch = useDispatch();

  let headerClass = ``;

  switch (pageType) {
    case PAGE_TYPE.LOGIN:
      headerClass = `user-page__head`;
      break;
    case PAGE_TYPE.USER:
      headerClass = `user-page__head`;
      break;
  }

  const BreadCrumbsElement = () => {
    if (isReview) {
      return (
        <Breadcrumbs />
      );
    } else {
      return ``;
    }
  };

  const UserBlockElement = () => {
    if (pageType === PAGE_TYPE.LOGIN) {
      return ``;
    }

    return (
      <UserBlock />
    );
  };

  return (
    <header className={`page-header ${loginClass} ${headerClass}`}>
      <div className="logo">
        <Link
          to="/"
          className="logo__link"
          onClick={() => {
            dispatch(resetApp());
            dispatch(getMovies());
          }}
        >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <BreadCrumbsElement />

      <h1 className="page-title user-page__title" style={{display: `${titleClass}`}}>{headerTitle}</h1>

      <UserBlockElement />
    </header>
  );
};

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  isReview: PropTypes.bool.isRequired,
  pageType: PropTypes.string.isRequired,
};

export default Header;
