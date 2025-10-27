import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

function Nav() {
  return (
    <nav>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul id="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/how-to-play">How To Play</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/near-you">Near you</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;

