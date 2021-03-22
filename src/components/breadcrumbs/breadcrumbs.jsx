import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute} from '../../const';

const Breadcrumbs = (props) => {
  const {isReview} = props;
  const {activeMovie} = useSelector((state) => state.DATA);
  const {id, name} = activeMovie;

  if (isReview) {
    return (
      <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link to={`${AppRoute.FILMS}/${id}`} className="breadcrumbs__link">{name}</Link>
          </li>
          <li className="breadcrumbs__item">
            <a
              href="#"
              className="breadcrumbs__link"
              onClick={(evt) => {
                evt.preventDefault();
              }}
            >
              Add review
            </a>
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
