import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list";
import {moviesProp} from "../../utils/valid-props";

const MyListScreen = (props) => {
  const {movies, isLogin, cardsCount} = props;
  const myListMovies = movies.slice(0, cardsCount);

  return (
    <div className="user-page">
      <Header
        isLogin={isLogin}
        headerTitle={`My list`}
        isReview={false}
        pageType={`user`}
      />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieList
          movies={myListMovies}
          moviesIndex={-1}
        />
      </section>

      <Footer />
    </div>
  );
};

MyListScreen.propTypes = {
  movies: PropTypes.arrayOf(moviesProp).isRequired,
  isLogin: PropTypes.bool.isRequired,
  cardsCount: PropTypes.number.isRequired,
};

export default MyListScreen;
