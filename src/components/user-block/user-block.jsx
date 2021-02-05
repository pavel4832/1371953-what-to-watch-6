import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const UserBlock = (props) => {
  const {isLogin, isSignInPage} = props;

  if (!isSignInPage) {
    if (isLogin) {
      return (
        <div className="user-block">
          <div className="user-block__avatar">
            <Link to="/mylist">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </Link>
          </div>
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
  isLogin: PropTypes.bool.isRequired,
  isSignInPage: PropTypes.bool.isRequired,
};

export default UserBlock;
