import './App.css';
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Login from "./Components/Login";
import React, { useState } from "react";
import Footer from "./Components/Footer";
import handleLogout from "./handleLogout";

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleContactUsClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(true);
  };

  return (
    <>
      <Navbar onContactUsClick={handleContactUsClick} />
      {showLoginForm && <Login onClose={handleCloseLoginForm} />}
      <HeroSection onContactUsClick={handleContactUsClick} />
      <About />
      <Footer />
    </>
  );
}

export default App;
