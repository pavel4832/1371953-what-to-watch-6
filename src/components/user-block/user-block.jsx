import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import {logout} from '../../store/api-actions';

const UserBlock = (props) => {
  const {isSignInPage} = props;
  const {authorizationStatus} = useSelector((state) => state.USER);

  const dispatch = useDispatch();

  const onLogoutClickHandler = (evt) => {
    evt.preventDefault();
    dispatch(logout());
  };

  if (!isSignInPage) {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (
        <div className="user-block">
          <div className="user-block__avatar">
            <Link to="/mylist">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
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
  }

  return ``;
};

UserBlock.propTypes = {
  isSignInPage: PropTypes.bool.isRequired,
};

export default UserBlock;
