import React from 'react';
import PropTypes from "prop-types";

const Breadcrumbs = (props) => {
  const {isReview} = props;

  if (isReview) {
    return (
      <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link">Add review</a>
          </li>
        </ul>
      </nav>
    );
  }

  return ``;
};

Breadcrumbs.propTypes = {
  isReview: PropTypes.bool.isRequired,
};

export default Breadcrumbs;
