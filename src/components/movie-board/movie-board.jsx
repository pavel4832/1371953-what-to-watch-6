import React from 'react';
import MovieList from '../movie-list/movie-list';
import Footer from '../footer/footer';
import FilterList from '../filter-list/filter-list';
import LoadMoreButton from '../load-more-button/load-more-button';

const MovieBoard = () => {

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilterList />

        <MovieList
          isSame={false}
          myList={false}
        />

        <LoadMoreButton />
      </section>

      <Footer />
    </div>
  );
};

export default MovieBoard;
