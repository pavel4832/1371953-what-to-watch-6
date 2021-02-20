import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import films from './mock/films';
import comments from './mock/comment';
import {adaptMoviesToApp, adaptCommentToApp} from './utils/adaptor';
import {reducer} from './store/reducer';

const Setting = {
  IS_LOGIN: false
};

const MOVIES = films.map(adaptMoviesToApp);
const COMMENTS = comments.map(adaptCommentToApp);

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App
        movies={MOVIES}
        comments={COMMENTS}
        isLogin={Setting.IS_LOGIN}
      />
    </Provider>,
    document.querySelector(`#root`)
);
