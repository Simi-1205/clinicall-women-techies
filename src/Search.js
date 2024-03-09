import React from 'react';
import './Search.css';
import logo from './assets/images/CLINICALL_LOGO.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div className="bg1">
      <div className="navbar1">
        <div className="left-section1">
          <img src={logo} alt="Logo1" className="logo1" /> {/* Add logo here */}
          <a className="clinicALL1" href="/">Clinic<span className="ALL1">ALL</span></a>
        </div>
        <div className="right-section1">
          <div>
            <a1 className="about1" href="/about">Search Study</a1>
          </div>
          <div className="profile_button">
            <FontAwesomeIcon icon={faUser} className='icon'/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Search;
