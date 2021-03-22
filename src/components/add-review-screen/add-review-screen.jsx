import React from 'react';
import Header from '../header/header';
import AddReviewForm from '../add-review-form/add-review-form';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const AddReviewScreen = (props) => {
  const {id} = props;
  const isReview = true;

  const {activeMovie} = useSelector((state) => state.DATA);
  const {name, backgroundImage, posterImage} = activeMovie;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          headerTitle={``}
          isReview={isReview}
          pageType={``}
        />

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={`${name}-poster`} width="132" height="198"/>
        </div>
      </div>

      <AddReviewForm id={id} />
    </section>
  );
};

AddReviewScreen.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AddReviewScreen;
