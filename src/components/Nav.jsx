import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul id="nav-menu" className={isMenuOpen ? 'active' : ''}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/how-to-play" onClick={closeMenu}>How To Play</Link></li>
        <li><Link to="/shop" onClick={closeMenu}>Shop</Link></li>
        <li><Link to="/near-you" onClick={closeMenu}>Near you</Link></li>
        <li><Link to="/about-us" onClick={closeMenu}>About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;

