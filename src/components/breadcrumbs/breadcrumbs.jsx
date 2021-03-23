import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute} from '../../const';

const Breadcrumbs = () => {
  const {activeMovie} = useSelector((state) => state.DATA);
  const {id, name} = activeMovie;

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`${AppRoute.FILMS}/${id}`} className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <span className="breadcrumbs__link">Add review</span>
        </li>
      </ul>
    </nav>
  );
};


export default Breadcrumbs;
