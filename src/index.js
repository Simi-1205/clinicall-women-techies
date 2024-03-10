// index.js
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import withTokenVerification from "./withTokenVerification";
import handleLogout from "./handleLogout";
import Search1 from "./Search1";

const ProfileWithVerification = withTokenVerification(Profile);
const SearchWithVerification = withTokenVerification(Search1);

const RootComponent = () => {
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     handleLogout();
  //   }
  // });

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          {/* <Route path="/profile" element={<ProfileWithVerification />} /> */}
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/search" element={<SearchWithVerification />} /> */}
          <Route path="/search" element={<Search1 />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootComponent />);

reportWebVitals();
