import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import {Link} from 'react-router-dom';

const ErrorScreen = () => {

  return <React.Fragment>
    <h1 className="visually-hidden">WTW</h1>

    <Header
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

export default ErrorScreen;
