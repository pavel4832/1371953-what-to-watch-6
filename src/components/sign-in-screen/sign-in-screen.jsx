import React, {useRef, useState} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import SignInErrorMessage from '../sign-in-error-message/sign-in-error-message';
import {useDispatch} from 'react-redux';
import {login} from '../../store/api-actions';

const SingInScreen = () => {
  const loginRef = useRef();
  const passwordRef = useRef();
  const [isValidEmail, setValid] = useState(true);

  const dispatch = useDispatch();

  const handleButtonSubmitClick = (evt) => {
    let stopSubmit = false;

    if (loginRef.current.checkValidity() === false) {
      setValid(false);
      stopSubmit = true;
    } else {
      setValid(true);
    }

    if (stopSubmit) {
      evt.preventDefault();
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return (
    <div className="user-page">
      <Header
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
          <SignInErrorMessage isValidEmail={isValidEmail} />

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
              className="sign-in__btn"
              type="submit"
              onClick={handleButtonSubmitClick}
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

export default SingInScreen;
