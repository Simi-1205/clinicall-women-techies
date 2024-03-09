import React from 'react';
import './Search.css';
import logo from './assets/images/CLINICALL_LOGO.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt="ClinicAll Logo" className="navbar-logo" />
          <span className="navbar-company-name">ClinicAll</span>
        </div>
        <div className="navbar-right">
          <ul className="navbar-menu">
            <li><a href="/profile">Find</a></li>
            <li>
              <FontAwesomeIcon icon={faUser} className='icon'/>
            </li>
          </ul>
        </div>
      </div>
      <div className='parent'>
        <div className='left1'>
          <button className="btn">Profile Settings</button>
          <button className="btn">Documents</button>
          <button className="btn">Notifications</button>
          <button className="btn">Study Feedback</button>
        </div>
        <div className='right1'></div>
      </div>
    </div>
  );
};

export default Search;
