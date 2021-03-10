import {changeContent, changeGenre, getMovies, getMyMoviesList, incrementStep, loadMovies, loadPromoMovie, loadActiveMovie, loadComments, resetActiveMovie, resetApp, resetStepCount, setActive, setContentOverview, setContentReview, setData} from '../action';
import {adaptCommentToApp, adaptMoviesToApp} from '../../utils/adaptor';
import {CONTENT_TYPE, COUNT_CARD, FILTER_TYPE} from '../../const';
import {getMoviesByGenre, getMyMovies} from '../../utils/utils';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  filteredMovies: [],
  myMovieList: [],
  comments: [],
  activeMovie: {},
  promoMovie: {},
  genre: FILTER_TYPE.ALL_GENRE,
  contentType: CONTENT_TYPE.OVERVIEW,
  renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
  isDataLoaded: false,
  isActiveMovieLoaded: false,
};

const moviesData = createReducer(initialState, (builder) => {
  builder.addCase(changeContent, (state, action) => {
    return {
      ...state,
      contentType: action.payload,
    };
  });
  builder.addCase(changeGenre, (state, action) => {
    return {
      ...state,
      genre: action.payload,
    };
  });
  builder.addCase(getMovies, (state) => {
    return {
      ...state,
      filteredMovies: getMoviesByGenre(state.movies, state.genre),
    };
  });
  builder.addCase(getMyMoviesList, (state) => {
    return {
      ...state,
      myMovieList: getMyMovies(state.movies),
    };
  });
  builder.addCase(incrementStep, (state, action) => {
    return {
      ...state,
      renderedMovieCount: state.renderedMovieCount + action.payload,
    };
  });
  builder.addCase(loadMovies, (state, action) => {
    return {
      ...state,
      movies: action.payload.map(adaptMoviesToApp),
    };
  });
  builder.addCase(loadPromoMovie, (state, action) => {
    return {
      ...state,
      promoMovie: adaptMoviesToApp(action.payload),
      activeMovie: adaptMoviesToApp(action.payload),
    };
  });
  builder.addCase(loadActiveMovie, (state, action) => {
    return {
      ...state,
      activeMovie: adaptMoviesToApp(action.payload),
    };
  });
  builder.addCase(loadComments, (state, action) => {
    return {
      ...state,
      comments: action.payload.map(adaptCommentToApp),
    };
  });
  builder.addCase(resetActiveMovie, (state) => {
    return {
      ...state,
      isActiveMovieLoaded: false,
    };
  });
  builder.addCase(resetApp, (state) => {
    return {
      ...state,
      genre: FILTER_TYPE.ALL_GENRE,
      filteredMovies: [],
      comments: [],
      activeMovie: state.promoMovie,
      contentType: CONTENT_TYPE.OVERVIEW,
      renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
      isActiveMovieLoaded: false,
    };
  });
  builder.addCase(resetStepCount, (state) => {
    return {
      ...state,
      renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
    };
  });
  builder.addCase(setActive, (state) => {
    return {
      ...state,
      isActiveMovieLoaded: true,
    };
  });
  builder.addCase(setContentOverview, (state) => {
    return {
      ...state,
      contentType: CONTENT_TYPE.OVERVIEW,
    };
  });
  builder.addCase(setContentReview, (state) => {
    return {
      ...state,
      contentType: CONTENT_TYPE.REVIEWS,
    };
  });
  builder.addCase(setData, (state) => {
    return {
      ...state,
      isDataLoaded: true,
    };
  });
});

export {moviesData};
