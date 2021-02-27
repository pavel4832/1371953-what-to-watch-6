import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list";

const MyListScreen = (props) => {
  const {onCardClick} = props;

  return (
    <div className="user-page">
      <Header
        headerTitle={`My list`}
        isReview={false}
        pageType={`user`}
      />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieList
          onCardClick={onCardClick}
          myList={true}
          isSame={false}
        />
      </section>

      <Footer />
    </div>
  );
};

MyListScreen.propTypes = {
  onCardClick: PropTypes.func.isRequired,
};

export default MyListScreen;
