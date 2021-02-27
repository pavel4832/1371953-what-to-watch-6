import React from 'react';
import Header from '../header/header';
import AddReviewForm from '../add-review-form/add-review-form';

const AddReviewScreen = () => {
  const isReview = true;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          headerTitle={``}
          isReview={isReview}
          pageType={``}
        />

        <div className="movie-card__poster movie-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
        </div>
      </div>

      <AddReviewForm
        onPost={() => {}}
      />
    </section>
  );
};

export default AddReviewScreen;
