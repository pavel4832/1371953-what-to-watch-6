import {
  getTimeFromMins,
  getMovieById,
  getMoviesByGenre,
  formatTime
} from './utils';
import {FILTER_TYPE} from '../const';
import MOVIES from '../mock/movies';
import MOVIE from '../mock/movie';
import GENRE_MOVIES from '../mock/genre-movies';

describe(`Utils work correctly`, () => {
  it(`getTimeFromMins work correctly`, () => {
    const time = 128;
    const expectedResult = `2h 8m`;

    expect(getTimeFromMins(time)).toEqual(expectedResult);
  });

  it(`getMovieById work correctly`, () => {
    const id = 1;
    const expectedResult = MOVIE;

    expect(getMovieById(MOVIES, id)).toEqual(expectedResult);
  });

  it(`getMoviesByGenre work correctly`, () => {
    const genre = FILTER_TYPE.DRAMAS;
    const expectedResult = GENRE_MOVIES;

    expect(getMoviesByGenre(MOVIES, genre)).toEqual(expectedResult);
  });

  it(`formatTime work correctly`, () => {
    const timeHour = 7328;
    const timeNoHour = 128;
    const expectedResultHours = `02:02:08`;
    const expectedResultNoHours = `02:08`;

    expect(formatTime(timeHour, true)).toEqual(expectedResultHours);
    expect(formatTime(timeNoHour, false)).toEqual(expectedResultNoHours);
  });
});
