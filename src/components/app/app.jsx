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
import {moviesProp, commentsProp} from '/src/utils/valid-props';
import {CONTENT_TYPE, COUNT_CARD} from '/src/const';

const App = (props) => {
  const {movies, comments, isLogin} = props;
  const activeMovie = movies[COUNT_CARD.ACTIVE];

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
            cardsCount={COUNT_CARD.MY_LIST}
          />
        </Route>
        <Route
          exact
          path="/films/:id"
          render={({match}) => (
            <MovieScreen
              movies={movies}
              comments={comments}
              isLogin={isLogin}
              cardsCount={COUNT_CARD.SAME}
              contentType={CONTENT_TYPE.OVERVIEW}
              id={Number(match.params.id)}
            />
          )}>
        </Route>
        <Route
          exact
          path="/films/:id/details"
          render={({match}) => (
            <MovieScreen
              movies={movies}
              comments={comments}
              isLogin={isLogin}
              cardsCount={COUNT_CARD.SAME}
              contentType={CONTENT_TYPE.DETAILS}
              id={Number(match.params.id)}
            />
          )}>
        </Route>
        <Route
          exact
          path="/films/:id/reviews"
          render={({match}) => (
            <MovieScreen
              movies={movies}
              comments={comments}
              isLogin={isLogin}
              cardsCount={COUNT_CARD.SAME}
              contentType={CONTENT_TYPE.REVIEWS}
              id={Number(match.params.id)}
            />
          )}>
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
  movies: PropTypes.arrayOf(moviesProp).isRequired,
  comments: PropTypes.arrayOf(commentsProp).isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default App;
