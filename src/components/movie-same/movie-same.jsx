import React from 'react';
import MovieList from '../movie-list/movie-list';
import Footer from '../footer/footer';

const MovieSame = () => {

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <MovieList
          isSame={true}
          myList={false}
        />
      </section>

      <Footer />
    </div>
  );
};

export default MovieSame;
