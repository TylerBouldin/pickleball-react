import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: thepickleguys@gmail.com</p>
          <p>Phone: (555) 123-PICKLE</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/how-to-play">How to Play</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/near-you">Courts Near You</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Stay connected for tips, updates, and community events!</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

