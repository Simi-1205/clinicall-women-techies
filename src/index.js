import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./Search";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import withTokenVerification from "./withTokenVerification";

const SearchWithVerification = withTokenVerification(Search);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/search" element={<SearchWithVerification />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
