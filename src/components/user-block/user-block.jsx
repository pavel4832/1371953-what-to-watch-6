import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const";

const UserBlock = (props) => {
  const {authorizationStatus, isSignInPage} = props;

  if (!isSignInPage) {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
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
  authorizationStatus: PropTypes.string.isRequired,
  isSignInPage: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {UserBlock};
export default connect(mapStateToProps, null)(UserBlock);
