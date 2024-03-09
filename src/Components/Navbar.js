import React from 'react';
import './Navbar.css';
import logo from '../assets/images/CLINICALL_LOGO.png'

const Navbar = () => {
  return (
    <div className="bg">
      <div className="navbar">
        <div className="left-section">
          <img src={logo} alt="Logo" className="logo" /> {/* Add logo here */}
          <a href="/">Clinic All</a>
        </div>
        <div className="right-section">
          <ul>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><button type="button" onClick={() => {window.location.href = '/contact'}}>Login</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
