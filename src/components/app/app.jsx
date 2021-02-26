import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SingInScreen from '../sign-in-screen/sign-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import MovieScreen from '../movie-screen/movie-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import ErrorScreen from '../error-screen/error-screen';
import PrivateRoute from '../private-route/private-route';

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
        <PrivateRoute exact
          path="/mylist"
          render={() => <MyListScreen />}
        >
        </PrivateRoute>
        <Route
          exact
          path="/films/:id"
          render={({match}) => (
            <MovieScreen
              id={Number(match.params.id)}
            />
          )}>
        </Route>
        <PrivateRoute exact
          path="/films/:id/review"
          render={() => <AddReviewScreen />}
        >
        </PrivateRoute>
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
