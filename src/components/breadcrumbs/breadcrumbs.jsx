import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

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
            <Link to="/films/:id/review" className="breadcrumbs__link">Add review</Link>
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
