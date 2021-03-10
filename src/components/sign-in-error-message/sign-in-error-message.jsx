import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

const SignInErrorMessage = (props) => {
  const {isValidEmail} = props;
  const {isLoginError} = useSelector((state) => state.USER);

  const messageText = (!isValidEmail) ? `Please enter a valid email address` : `We can’t recognize this email\n and password combination. Please try again.`;

  if (isLoginError || !isValidEmail) {
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
  isValidEmail: PropTypes.bool.isRequired,
};

export default SignInErrorMessage;
