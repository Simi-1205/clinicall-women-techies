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
        <div className='left'>
          <button className="btn">Profile Settings</button>
          <button className="btn">Documents</button>
          <button className="btn">Notifications</button>
          <button className="btn">Study Feedback</button>
        </div>
        <div className='right'>
        <div className='container'>
        <div className="form-control">
  <input type="text" required />
  <label>
    <span style={{ transitionDelay: '0ms' }}>U</span>
    <span style={{ transitionDelay: '50ms' }}>s</span>
    <span style={{ transitionDelay: '100ms' }}>e</span>
    <span style={{ transitionDelay: '150ms' }}>r</span>
    <span style={{ transitionDelay: '200ms' }}>n</span>
    <span style={{ transitionDelay: '250ms' }}>a</span>
    <span style={{ transitionDelay: '300ms' }}>m</span>
    <span style={{ transitionDelay: '350ms' }}>e</span>
  </label>
</div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Search;
