import React, { useState } from "react";
import "./Login.css";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Login = ({ onClose: handleCloseLoginForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogInSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5002/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if response is successful
      if (!response.ok) {
        throw new Error("Failed to log in");
      }

      // Parse JSON response
      const data = await response.json();
      console.log("Login successful");
      // console.log(data);

      // Store token in localStorage
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Error sending login data:", error);
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5002/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Sign up data sent successfully");
      } else {
        console.error(
          "Sending sign up data unsuccessful:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error sending sign up data:", error);
    }
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <button className="close-btn" onClick={handleCloseLoginForm}>
            ×
          </button>
          <div className="wrapper">
            <div className="card-switch">
              <label className="switch">
                <input type="checkbox" className="toggle" />
                <span className="slider"></span>
                <span className="card-side"></span>
                <div className="flip-card__inner">
                  <div className="flip-card__front">
                    <div className="title">Log in</div>
                    <LoginForm
                      handleLogInSubmit={handleLogInSubmit}
                      handleChange={handleChange}
                      formData={formData}
                    />
                  </div>

                  <div className="flip-card__back">
                    <div className="title">Sign up</div>
                    <SignupForm
                      handleSignUpSubmit={handleSignUpSubmit}
                      handleChange={handleChange}
                      formData={formData}
                    />
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
