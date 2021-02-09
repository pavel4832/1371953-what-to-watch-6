import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mock/films';
import adaptToApp from './utils/adaptor';

const Setting = {
  IS_LOGIN: false
};

const MOVIES = films.map(adaptToApp);

ReactDOM.render(
    <App
      movies={MOVIES}
      isLogin={Setting.IS_LOGIN}
    />,
    document.querySelector(`#root`)
);
