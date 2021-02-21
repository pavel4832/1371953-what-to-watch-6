import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SingInScreen from '../sign-in-screen/sign-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import MovieScreen from '../movie-screen/movie-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import ErrorScreen from '../error-screen/error-screen';
import {CONTENT_TYPE, COUNT_CARD} from '/src/const';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route exact path="/login">
          <SingInScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen
            cardsCount={COUNT_CARD.MY_LIST}
          />
        </Route>
        <Route
          exact
          path="/films/:id"
          render={({match}) => (
            <MovieScreen
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
              contentType={CONTENT_TYPE.REVIEWS}
              id={Number(match.params.id)}
            />
          )}>
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewScreen />
        </Route>
        <Route
          exact
          path="/player/:id"
          render={({match}) => (
            <PlayerScreen
              id={Number(match.params.id)}
            />
          )}>
        </Route>
        <Route>
          <ErrorScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
