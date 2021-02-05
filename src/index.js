import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CARDS_COUNT: 20,
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  MOVIE_YEAR: `2014`,
  IS_LOGIN: false
};

ReactDOM.render(
    <App
      cardsCount={Setting.CARDS_COUNT}
      movieTitle={Setting.MOVIE_TITLE}
      movieGenre={Setting.MOVIE_GENRE}
      movieYear={Setting.MOVIE_YEAR}
      isLogin={Setting.IS_LOGIN}
    />,
    document.querySelector(`#root`)
);
