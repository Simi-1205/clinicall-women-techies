import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import withTokenVerification from "./withTokenVerification";
import Search1 from "./Search1";

const ProfileWithVerification = withTokenVerification(Profile);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        {/* <Route path="/profile" element={<ProfileWithVerification />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search1 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
