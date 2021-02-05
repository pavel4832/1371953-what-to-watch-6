import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const UserBlock = (props) => {
  const {isLogin} = props;

  if (isLogin) {
    return (
      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>
      </div>
    );
  }

  return (
    <div className="user-block">
      <Link to="/login" className="user-block__link">Sign in</Link>
    </div>
  );
};

UserBlock.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

export default UserBlock;
