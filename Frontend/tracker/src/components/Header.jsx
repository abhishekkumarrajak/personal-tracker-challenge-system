import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import './All.css';

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav className="navbar-modern">
      <div className="logo">Personal Tracker</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        {isLoggedIn && <li><Link to="/dashboard">Dashboard</Link></li>}
        {!isLoggedIn ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Sign up</Link></li>
          </>
        ) : (
          <li><button onClick={logout}>Logout</button></li>
        )}
      </ul>
    </nav>
  );
}

export default Header;
