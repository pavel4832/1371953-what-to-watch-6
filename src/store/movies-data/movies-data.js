import * as actions from '../actions';
import {adaptCommentToApp, adaptMoviesToApp} from '../../utils/adaptor';
import {CONTENT_TYPE, COUNT_CARD, FILTER_TYPE} from '../../const';
import {getMoviesByGenre} from '../../utils/utils';
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
  isMyMoviesLoaded: false,
};

const moviesData = createReducer(initialState, (builder) => {
  builder.addCase(actions.changeContent, (state, action) => {
    return {
      ...state,
      contentType: action.payload,
    };
  });
  builder.addCase(actions.changeGenre, (state, action) => {
    return {
      ...state,
      genre: action.payload,
    };
  });
  builder.addCase(actions.getMovies, (state) => {
    return {
      ...state,
      filteredMovies: getMoviesByGenre(state.movies, state.genre),
    };
  });
  builder.addCase(actions.incrementStep, (state, action) => {
    return {
      ...state,
      renderedMovieCount: state.renderedMovieCount + action.payload,
    };
  });
  builder.addCase(actions.loadMovies, (state, action) => {
    return {
      ...state,
      movies: action.payload.map(adaptMoviesToApp),
    };
  });
  builder.addCase(actions.loadPromoMovie, (state, action) => {
    return {
      ...state,
      promoMovie: adaptMoviesToApp(action.payload),
      activeMovie: adaptMoviesToApp(action.payload),
    };
  });
  builder.addCase(actions.loadActiveMovie, (state, action) => {
    return {
      ...state,
      activeMovie: adaptMoviesToApp(action.payload),
    };
  });
  builder.addCase(actions.loadComments, (state, action) => {
    return {
      ...state,
      comments: action.payload.map(adaptCommentToApp),
    };
  });
  builder.addCase(actions.loadMyMovieList, (state, action) => {
    return {
      ...state,
      myMovieList: action.payload.map(adaptMoviesToApp),
    };
  });
  builder.addCase(actions.resetActiveMovie, (state) => {
    return {
      ...state,
      isActiveMovieLoaded: false,
    };
  });
  builder.addCase(actions.resetApp, (state) => {
    return {
      ...state,
      genre: FILTER_TYPE.ALL_GENRE,
      activeMovie: state.promoMovie,
      contentType: CONTENT_TYPE.OVERVIEW,
      renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
      isDataLoaded: false,
      isActiveMovieLoaded: false,
      isMyMoviesLoaded: false,
    };
  });
  builder.addCase(actions.resetStepCount, (state) => {
    return {
      ...state,
      renderedMovieCount: COUNT_CARD.MAIN_PER_STEP,
    };
  });
  builder.addCase(actions.setActive, (state) => {
    return {
      ...state,
      isActiveMovieLoaded: true,
    };
  });
  builder.addCase(actions.setContentOverview, (state) => {
    return {
      ...state,
      contentType: CONTENT_TYPE.OVERVIEW,
    };
  });
  builder.addCase(actions.setContentReview, (state) => {
    return {
      ...state,
      contentType: CONTENT_TYPE.REVIEWS,
    };
  });
  builder.addCase(actions.setData, (state) => {
    return {
      ...state,
      isDataLoaded: true,
    };
  });
  builder.addCase(actions.setMyMoviesLoaded, (state) => {
    return {
      ...state,
      isMyMoviesLoaded: true,
    };
  });
});

export {moviesData};
