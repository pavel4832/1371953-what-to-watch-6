import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getLoginErrorStatus} from '../../store/user/selectors';

const SignInErrorMessage = (props) => {
  const {isLoginError, isValidEmail} = props;

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
  isLoginError: PropTypes.bool.isRequired,
  isValidEmail: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoginError: getLoginErrorStatus(state),
});

export {SignInErrorMessage};
export default connect(mapStateToProps, null)(SignInErrorMessage);
