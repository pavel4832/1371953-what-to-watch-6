import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import MovieList from "../movie-list/movie-list";

const MyListScreen = () => {

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
          myList={true}
          isSame={false}
        />
      </section>

      <Footer />
    </div>
  );
};

export default MyListScreen;
