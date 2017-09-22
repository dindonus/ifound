import React from 'react';
import { Link } from 'react-router-dom';

const Main = ({ children }) => (
  <div>
    <div className="Main-header">
      <h1>
        <Link to="/">iFound</Link>
      </h1>
    </div>
    <div className="Main-content">
      { children }
    </div>
  </div>
)

export default Main;
