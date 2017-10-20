import React from 'react';
import { Link } from 'react-router-dom';

const Main = ({ children }) => (
  <div className="Main-container">
    <div className="Main-top">
      <div className="Main-navbar">
        <div className="rainbow-wrapper">
          <Link to="/">
            <i className="fa fa-apple" aria-hidden="true" /> iFound
          </Link>
        </div>
      </div>
      <div className="Main-content">{children}</div>
    </div>
    <div className="Main-footer" />
  </div>
);

export default Main;
