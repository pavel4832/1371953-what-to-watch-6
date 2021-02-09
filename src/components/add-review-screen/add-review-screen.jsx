import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import AddReviewForm from '../add-review-form/add-review-form'
import {COMMENTS_PROP} from "../../utils/valid";

const AddReviewScreen = (props) => {
  const {comment, isLogin} = props;
  const isReview = true;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          isLogin={isLogin}
          headerTitle={``}
          isReview={isReview}
          pageType={``}
        />

        <div className="movie-card__poster movie-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
        </div>
      </div>

      <AddReviewForm comment={comment}/>
    </section>
  );
};

AddReviewScreen.propTypes = {
  comment: PropTypes.shape(COMMENTS_PROP).isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default AddReviewScreen;
