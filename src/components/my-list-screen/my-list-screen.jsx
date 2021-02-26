import React from 'react';
import {connect} from 'react-redux';
import Header from "../header/header";
import Footer from "../footer/footer";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list";
import {moviesProp} from "../../utils/valid-props";

const MyListScreen = (props) => {
  const {movies, cardsCount, onCardClick} = props;
  const myListMovies = movies.slice(0, cardsCount);

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
          movies={myListMovies}
          moviesIndex={-1}
          onCardClick={onCardClick}
        />
      </section>

      <Footer />
    </div>
  );
};

MyListScreen.propTypes = {
  movies: PropTypes.arrayOf(moviesProp).isRequired,
  cardsCount: PropTypes.number.isRequired,
  onCardClick: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  cardsCount: state.myCard,
});

export {MyListScreen};
export default connect(mapStateToProps, null)(MyListScreen);
