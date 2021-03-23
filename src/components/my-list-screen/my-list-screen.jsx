import React, {useEffect} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import MovieList from '../movie-list/movie-list';
import {fetchMyMovieList} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import {useDispatch, useSelector} from 'react-redux';
import {PAGE_TYPE} from '../../const';

const MyListScreen = () => {
  const {isMyMoviesLoaded} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyMovieList());
  }, [isMyMoviesLoaded]);

  if (!isMyMoviesLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="user-page">
      <Header
        headerTitle={`My list`}
        isReview={false}
        pageType={PAGE_TYPE.USER}
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
