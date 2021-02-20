import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";

const ErrorScreen = (props) => {
  const {isLogin} = props;

  return <React.Fragment>
    <h1 className="visually-hidden">WTW</h1>

    <Header
      isLogin={isLogin}
      headerTitle={``}
      isReview={false}
      pageType={``}
    />

    <section className="page-header" style={{flexDirection: `column`}}>
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>

    <Footer />
  </React.Fragment>;
};

ErrorScreen.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
});

export {ErrorScreen};
export default connect(mapStateToProps, null)(ErrorScreen);
