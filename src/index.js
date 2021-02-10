import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mock/films';
import comments from './mock/comment';
import {adaptMoviesToApp, adaptCommentToApp} from './utils/adaptor';

const Setting = {
  IS_LOGIN: false
};

const MOVIES = films.map(adaptMoviesToApp);
const COMMENTS = comments.map(adaptCommentToApp);

ReactDOM.render(
    <App
      movies={MOVIES}
      comments={COMMENTS}
      isLogin={Setting.IS_LOGIN}
    />,
    document.querySelector(`#root`)
);
