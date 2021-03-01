import React, {useEffect} from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SingInScreen from '../sign-in-screen/sign-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import MovieScreen from '../movie-screen/movie-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import ErrorScreen from '../error-screen/error-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import LoadingScreen from '../loading-screen/loading-screen';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchData} from '../../store/api-actions';
import {APIRoute, AppRoute} from '../../const';

const App = (props) => {
  const {isDataLoaded, onLoadData} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          render={({history}) => (
            <MainScreen
              onCardClick={(path) => history.push(path)}
            />
          )}
        />

        <Route
          exact
          path={AppRoute.LOGIN}
          render={() => <SingInScreen />}
        />

        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={({history}) => (
            <MyListScreen
              onCardClick={(path) => history.push(path)}
            />
          )}
        />

        <Route
          exact
          path={AppRoute.FILMS}
          render={({match, history}) => (
            <MovieScreen
              id={Number(match.params.id)}
              onCardClick={(path) => history.push(path)}
            />
          )}/>

        <PrivateRoute exact
          path={AppRoute.REVIEW}
          render={() => <AddReviewScreen />}
        />

        <Route
          exact
          path={AppRoute.PLAYER}
          render={({match}) => (
            <PlayerScreen
              id={Number(match.params.id)}
            />
          )}/>

        <Route
          exact
          path={APIRoute.ERROR}
          render={() => <ErrorScreen />}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchData());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
