import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SingInScreen from '../sign-in-screen/sign-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import MovieScreen from '../movie-screen/movie-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import ErrorScreen from '../error-screen/error-screen';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import {useSelector, useDispatch} from 'react-redux';
import {fetchData} from '../../store/api-actions';
import {AppRoute} from '../../const';

const App = () => {
  const {isDataLoaded} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchData());
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Switch>
      <Route
        exact
        path={AppRoute.ROOT}
        render={() => <MainScreen />}
      />
      <Route
        exact
        path={AppRoute.LOGIN}
        render={() => <SingInScreen />}
      />
      <PrivateRoute
        exact
        path={AppRoute.MY_LIST}
        render={() => <MyListScreen />}
      />
      <Route
        exact
        path={`${AppRoute.FILMS}/:id`}
        render={({match}) => (
          <MovieScreen
            id={Number(match.params.id)}
          />
        )}/>
      <PrivateRoute exact
        path={`${AppRoute.FILMS}/:id/review`}
        render={({match}) => (
          <AddReviewScreen
            id={Number(match.params.id)}
          />
        )}/>
      <Route
        exact
        path={`${AppRoute.PLAYER}/:id`}
        render={({match}) => (
          <PlayerScreen
            id={Number(match.params.id)}
          />
        )}/>
      <Route>
        <ErrorScreen />
      </Route>
    </Switch>
  );
};

export default App;
