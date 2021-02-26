import React, {useRef} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {login} from '../../store/api-actions';

const SingInScreen = (props) => {
  const {isLogin, onSubmit, onLoginButtonClick, reset} = props;
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="user-page">
      <Header
        isLogin={isLogin}
        headerTitle={`Sign in`}
        isReview={false}
        pageType={`login`}
      />

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              onClick={() => {
                reset();
                onLoginButtonClick();
              }}
              className="sign-in__btn"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

SingInScreen.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  onLoginButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
  reset() {
    dispatch(ActionCreator.resetApp());
  },
});

export {SingInScreen};
export default connect(mapStateToProps, mapDispatchToProps)(SingInScreen);
