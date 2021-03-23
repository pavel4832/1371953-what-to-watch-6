import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../const';
import {logout} from '../../store/api-actions';

const UserBlock = () => {
  const {authorizationStatus, user} = useSelector((state) => state.USER);

  const dispatch = useDispatch();

  const onLogoutClickHandler = (evt) => {
    evt.preventDefault();
    dispatch(logout());
  };

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <div className="user-block">
        <div className="user-block__avatar">
          <Link to={AppRoute.MY_LIST}>
            <img src={user.avatarUrl} alt="User avatar" width="63" height="63"/>
          </Link>
        </div>

        <Link to="#" className="user-block__link" onClick={onLogoutClickHandler}>Log out</Link>
      </div>
    );
  }

  return (
    <div className="user-block">
      <Link to="/login" className="user-block__link">Sign in</Link>
    </div>
  );
};

export default UserBlock;
