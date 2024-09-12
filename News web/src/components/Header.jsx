import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">News Website</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/category/technology">Technology</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/sports">Sports</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/startups">Startup</Link>
          </li>
          {/* Add more categories */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
