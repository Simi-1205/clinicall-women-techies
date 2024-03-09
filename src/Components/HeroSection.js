import React from "react";
import ctimage from "../assets/images/clinical-trial-removebg-preview.png";
import "./HeroSection.css";

const HeroSection = ({ onContactUsClick }) => {
  return (
    <div className="hero-section">
      <div className="hero-section-text">
        <h1>
          Welcome to <br></br>Clinic<span>ALL</span>!
        </h1>
        <p>Empowering Patients. Advancing Medicine. Together.</p>
        <div className="contact-us-button">
        <button type="button" onClick={onContactUsClick}>Get Started</button>        </div>
      </div>
      <img src={ctimage} alt="" />
    </div>
  );
};

export default HeroSection;
