import {NameSpace} from '../root-reducer';

export const getActiveMovie = (state) => state[NameSpace.DATA].activeMovie;
export const getActiveMovieLoadStatus = (state) => state[NameSpace.DATA].isActiveMovieLoaded;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getContentType = (state) => state[NameSpace.DATA].contentType;
export const getFilteredMovies = (state) => state[NameSpace.DATA].filteredMovies;
export const getGenre = (state) => state[NameSpace.DATA].genre;
export const getLoadedDataStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getMovies = (state) => state[NameSpace.DATA].movies;
export const getMyMovieList = (state) => state[NameSpace.DATA].myMovieList;
export const getPromoMovie = (state) => state[NameSpace.DATA].promoMovie;
export const getRenderedMovieCount = (state) => state[NameSpace.DATA].renderedMovieCount;
