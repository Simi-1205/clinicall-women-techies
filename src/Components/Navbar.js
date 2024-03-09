import React from 'react';
import './Navbar.css';
import logo from '../assets/images/CLINICALL_LOGO.png'

const Navbar = ({ onContactUsClick }) => {
  return (
    <div className="bg">
      <div className="navbar">
        <div className="left-section">
          <img src={logo} alt="Logo" className="logo" /> {/* Add logo here */}
          <a className="clinicALL" href="/">Clinic<span className="ALL">ALL</span></a>
        </div>
        <div className="right-section">
          <ul>
            
            <li><a href="/about">About</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><button type="button" onClick={onContactUsClick}>Login</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
