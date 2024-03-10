import React from "react";
import "./Profile.css";
import logo from "./assets/images/CLINICALL_LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div className="bg1">
      <div className="navbar1">
        <div className="left-section1">
          <img src={logo} alt="Logo1" className="logo1" /> {/* Add logo here */}
          <a className="clinicALL1" >
            Clinic<span className="ALL1">ALL</span>
          </a>
        </div>
        <div className="right-section1">
          <div>
            <a1 className="about1" href="/about">
              Search Study
            </a1>
          </div>
          <div className="profile_button">
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
        </div>
      </div>
      <div className="Hero">
        <div className="Vertical_nav">
          <div className="NAV_BTN1">PROFILE SETTINGS</div>
          <div className="NAV_BTN2">DOCUMENTS</div>
          <div className="NAV_BTN3">FEEDBACK</div>
          <div className="EMPTY_BOX"></div>
          <div className="LOGOUT">LOGOUT</div>
        </div>

        <div className="Details">
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
