import React from 'react';
import {Link} from 'react-router-dom';
import {getMovies, resetApp} from '../../store/actions';
import {useDispatch} from 'react-redux';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <footer className="page-footer">
      <div className="logo">
        <Link
          to="/"
          className="logo__link logo__link--light"
          onClick={() => {
            dispatch(resetApp());
            dispatch(getMovies());
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

export default Footer;
