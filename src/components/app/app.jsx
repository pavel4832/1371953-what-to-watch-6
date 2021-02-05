import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SingInScreen from "../sign-in-screen/sign-in-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import MovieScreen from "../movie-screen/movie-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";
import ErrorScreen from "../error-screen/error-screen";

const CountCard = {
  MY_LIST: 4,
  SAME: 5
};

const App = (props) => {
  const {cardsCount, movieTitle, movieGenre, movieYear, isLogin} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            cardsCount={cardsCount}
            movieTitle={movieTitle}
            movieGenre={movieGenre}
            movieYear={movieYear}
            isLogin={isLogin}
          />
        </Route>
        <Route exact path="/login">
          <SingInScreen isLogin={isLogin} />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen
            isLogin={isLogin}
            cardsCount={CountCard.MY_LIST}
          />
        </Route>
        <Route exact path="/films/:id">
          <MovieScreen
            isLogin={isLogin}
            cardsCount={CountCard.SAME}
          />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewScreen isLogin={isLogin} />
        </Route>
        <Route exact path="/player/:id">
          <PlayerScreen />
        </Route>
        <Route>
          <ErrorScreen isLogin={isLogin} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.string.isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default App;
