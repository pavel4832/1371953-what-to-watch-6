import React from 'react';
import MovieMain from '../movie-main/movie-main';
import MovieBoard from '../movie-board/movie-board';
import {redirectToRoute} from "../../store/action";
import {AppRoute} from "../../const";
import {useDispatch, useSelector} from "react-redux";

const MainScreen = () => {
  const {promoMovie} = useSelector((state) => state.DATA);
  const {id} = promoMovie;
  const dispatch = useDispatch();

  return <React.Fragment>
    <MovieMain
      onPlayButtonClick={() => {
        dispatch(redirectToRoute(`${AppRoute.PLAYER}/${id}`));
      }}
    />

    <MovieBoard />
  </React.Fragment>;
};

export default MainScreen;
