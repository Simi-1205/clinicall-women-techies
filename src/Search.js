import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "./Search.css";
import logo from './assets/images/CLINICALL_LOGO.png';

const Search = () => {
  return (
    <>
      <div className="bg">
        <div className="navbar">
          <div className="left-section">
            <img src={logo} alt="Logo" className="logo" />
            <a className="clinicALL" href="/">Clinic<span className="ALL">ALL</span></a>
          </div>
          <div className="right-section">
            <ul>
              <li><a href="/about">Find</a></li>
              <li><a href="/faq">View</a></li>
              <li>
                <FontAwesomeIcon icon={faUser} className="icon" />
              </li>
            </ul>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Search;
