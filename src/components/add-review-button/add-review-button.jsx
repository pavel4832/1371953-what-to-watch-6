import React from 'react';
import {AuthorizationStatus, AppRoute} from '../../const';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const AddReviewButton = () => {
  const {activeMovie} = useSelector((state) => state.DATA);
  const {authorizationStatus} = useSelector((state) => state.USER);
  const {id} = activeMovie;

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <Link to={`${AppRoute.FILMS}/${id}/review`} className="btn movie-card__button">Add review</Link>
    );
  } else {
    return (``);
  }
};

export default AddReviewButton;
