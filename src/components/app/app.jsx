import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SingInScreen from '../sign-in-screen/sign-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import MovieScreen from '../movie-screen/movie-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import ErrorScreen from '../error-screen/error-screen';
import {MOVIES_PROP, COMMENTS_PROP} from '/src/utils/valid';
import {CONTENT_TYPE} from '/src/const';

const CountCard = {
  MY_LIST: 5,
  SAME: 4,
  ACTIVE: 0
};

const App = (props) => {
  const {movies, comments, isLogin} = props;
  const activeMovie = movies[CountCard.ACTIVE];

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            movies={movies}
            isLogin={isLogin}
          />
        </Route>
        <Route exact path="/login">
          <SingInScreen isLogin={isLogin} />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen
            movies={movies}
            isLogin={isLogin}
            cardsCount={CountCard.MY_LIST}
          />
        </Route>
        <Route exact path="/films/:id">
          <MovieScreen
            movies={movies}
            comments={comments}
            movieIndex={CountCard.ACTIVE}
            isLogin={isLogin}
            cardsCount={CountCard.SAME}
            contentType={CONTENT_TYPE.OVERVIEW}
          />
        </Route>
        <Route exact path="/films/:id/details">
          <MovieScreen
            movies={movies}
            comments={comments}
            movieIndex={CountCard.ACTIVE}
            isLogin={isLogin}
            cardsCount={CountCard.SAME}
            contentType={CONTENT_TYPE.DETAILS}
          />
        </Route>
        <Route exact path="/films/:id/reviews">
          <MovieScreen
            movies={movies}
            comments={comments}
            movieIndex={CountCard.ACTIVE}
            isLogin={isLogin}
            cardsCount={CountCard.SAME}
            contentType={CONTENT_TYPE.REVIEWS}
          />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewScreen
            isLogin={isLogin}
          />
        </Route>
        <Route exact path="/player/:id">
          <PlayerScreen movie={activeMovie} />
        </Route>
        <Route>
          <ErrorScreen isLogin={isLogin} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP)).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(COMMENTS_PROP)).isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default App;
