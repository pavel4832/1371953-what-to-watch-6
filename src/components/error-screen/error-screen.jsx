import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const ErrorScreen = (props) => {
  const {isLogin} = props;

  return <React.Fragment>
    <h1 className="visually-hidden">WTW</h1>

    <Header
      isLogin={isLogin}
      headerTitle={`Error`}
      isReview={false}
    />

    <section className="user-page__head">
      <h1 className="user-page__title">404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>

    <Footer />
  </React.Fragment>;
};

ErrorScreen.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

export default ErrorScreen;
