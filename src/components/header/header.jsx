import React from 'react';
import PropTypes from "prop-types";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import UserBlock from "../user-block/user-block";
import {Link} from 'react-router-dom';

const Header = (props) => {
  const {isLogin, headerTitle, isReview} = props;
  const headerClass = (isLogin) ? `movie-card__head` : ``;

  return (
    <header className={`page-header ${headerClass}`}>
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <Breadcrumbs isReview={isReview} />

      <h1 className="page-title user-page__title">{headerTitle}</h1>

      <UserBlock isLogin={isLogin} />
    </header>
  );
};

Header.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  headerTitle: PropTypes.string.isRequired,
  isReview: PropTypes.bool.isRequired,
};

export default Header;
