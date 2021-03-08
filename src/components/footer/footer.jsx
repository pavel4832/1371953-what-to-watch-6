import React from 'react';
import {Link} from 'react-router-dom';
import {getMovies, resetApp} from "../../store/action";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const Footer = (props) => {
  const {onResetApp, updateMovies} = props;

  return (
    <footer className="page-footer">
      <div className="logo">
        <Link
          to="/"
          className="logo__link logo__link--light"
          onClick={() => {
            onResetApp();
            updateMovies();
          }}
        >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  onResetApp: PropTypes.func.isRequired,
  updateMovies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onResetApp() {
    dispatch(resetApp());
  },
  updateMovies() {
    dispatch(getMovies());
  },
});

export {Footer};
export default connect(null, mapDispatchToProps)(Footer);
