import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-left">
          <h3>Connect Us</h3>
          <div className="footer-socials">
            <a href="#">Instagram</a>
            <a href="#">X</a>
            <a href='#'>FAQ</a>
          </div>
        </div>

        <div className="footer-right">
          <p className="subscribe-title">Get updates and challenges</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Your email here" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

   
      <div className="footer-bottom">
        © {new Date().getFullYear()} Personal Tracker· All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
