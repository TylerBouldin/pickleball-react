import React from 'react';
import '../css/Header.css';

function Header() {
  return (
    <header>
      <div className="header-content">
        <h1>The Pickleball Guys</h1>
        <div className="email">
          <span className="envelope">✉</span>
          thepickleguys@gmail.com
        </div>
      </div>
    </header>
  );
}

export default Header;

