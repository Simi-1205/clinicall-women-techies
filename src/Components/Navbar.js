import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/images/CLINICALL_LOGO.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ onContactUsClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg">
      <div className="navbar">
        <div className="left-section">
          <img src={logo} alt="Logo" className="logo" />
          <a className="clinicALL" href="/">
            Clinic<span className="ALL">ALL</span>
          </a>
        </div>
        <div className="right-section">
          <div className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="/about">About</a></li>
            <li><button className="Login_Button" type="button" onClick={onContactUsClick}>Login</button></li> 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
