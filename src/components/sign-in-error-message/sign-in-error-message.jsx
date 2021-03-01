import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const SignInErrorMessage = (props) => {
  const {isLoginError} = props;

  const messageText = `We can’t recognize this email\n and password combination. Please try again.`;

  if (isLoginError) {
    return (
      <div className="sign-in__message">
        <p style={{whiteSpace: `pre-line`}}>
          {messageText}
        </p>
      </div>
    );
  } else {
    return ``;
  }
};

SignInErrorMessage.propTypes = {
  isLoginError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoginError: state.isLoginError,
});

export {SignInErrorMessage};
export default connect(mapStateToProps, null)(SignInErrorMessage);
