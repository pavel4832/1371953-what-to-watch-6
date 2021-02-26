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
import {fetchMovieList, fetchPromoMovie} from '../../store/api-actions';

const App = (props) => {
  const {isDataLoaded, onLoadMovies, onLoadPromoMovie} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadMovies();
      onLoadPromoMovie();
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
          path="/"
          render={({history}) => (
            <MainScreen
              onCardClick={(path) => history.push(path)}
            />
          )}
        />

        <Route
          exact
          path="/login"
          render={() => <SingInScreen />}
        />

        <PrivateRoute
          exact
          path="/mylist"
          render={({history}) => (
            <MyListScreen
              onCardClick={(path) => history.push(path)}
            />
          )}
        />

        <Route
          exact
          path="/films/:id"
          render={({match, history}) => (
            <MovieScreen
              id={Number(match.params.id)}
              onCardClick={(path) => history.push(path)}
            />
          )}/>

        <PrivateRoute exact
          path="/films/:id/review"
          render={() => <AddReviewScreen />}
        />

        <Route
          exact
          path="/player/:id"
          render={({match}) => (
            <PlayerScreen
              id={Number(match.params.id)}
            />
          )}/>

        <Route>
          <ErrorScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadMovies: PropTypes.func.isRequired,
  onLoadPromoMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadMovies() {
    dispatch(fetchMovieList());
  },
  onLoadPromoMovie() {
    dispatch(fetchPromoMovie());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
