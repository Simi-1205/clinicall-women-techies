import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Login from "./Components/Login";
import React, { useState } from "react";

function App() {


  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleContactUsClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };


  return (
    <>
       <Navbar onContactUsClick={handleContactUsClick} />
      {showLoginForm && <Login onClose={handleCloseLoginForm} />}
      <HeroSection></HeroSection>
      <About />
     
    </>
  );
}

export default App;
