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
      {/* <img src={ctimage} alt="" /> */}
      <dotlottie-player src="https://lottie.host/9edcbf90-653f-4dcc-9fee-dd2ec0b1a801/pOoC8kU3C4.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
    
    </div>
  );
};

export default HeroSection;
