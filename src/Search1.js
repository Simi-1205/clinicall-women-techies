import React from 'react'
import "./Search1.css";
import logo from "./assets/images/CLINICALL_LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Search1() {
  return (
  <>
    <div className="navbar2">
        <div className="left-section2">
          <img src={logo} alt="Logo2" className="logo2" /> {/* Add logo here */}
          <a className="clinicALL2" href="/">
            Clinic<span className="ALL2">ALL</span>
          </a>
        </div>
        <div className="right-section2">
          <div>
            <a1 className="about2" href="/about">
              Search Study
            </a1>
          </div>
          <div className="profile_button2">
            <FontAwesomeIcon icon={faUser} className="icon2" />
          </div>
        </div>
        </div>


        <div className="input-page">
      <h1>Input Page</h1>
      <div className="input-group">
        <label htmlFor="disease">Disease:</label>
        <input type="text" id="disease" name="disease" placeholder="Enter disease" />
      </div>

      <div className="input-group">
        <label htmlFor="disease">Age:</label>
        <input type="text" id="Age" name="Age" placeholder="Enter Age" />
      </div>


     < div className="input-group">
        <label htmlFor="Sex">Sex:</label>
        <select id="Sex" name="Sex">
          <option value="Sex">Select Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="P">Other</option>
          
        </select>
      </div>










      <div className="input-group">
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" placeholder="Enter location" />
      </div>
      <div className="input-group">
        <label htmlFor="study-phase">Study Phase:</label>
        <select id="study-phase" name="study-phase">
          <option value="">Select study phase</option>
          <option value="Phase 1">Phase 1</option>
          <option value="Phase 2">Phase 2</option>
          <option value="Phase 3">Phase 3</option>
          <option value="Phase 4">Phase 4</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="outcome-measure">Outcome Measure:</label>
        <select id="outcome-measure" name="outcome-measure">
          <option value="">Select outcome measure</option>
          <option value="Improved">Improved</option>
          <option value="Worsened">Worsened</option>
          <option value="Unchanged">Unchanged</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="outcome-measure">Success Rates:</label>
        <select id="Success Rates" name="Success Rates">
          <option value="Choose Success Rate">Choose Success Rate</option>
          <option value="Improved">20% or more</option>
          <option value="Improved">30% or more</option>
          <option value="Improved">40% or more</option>
          <option value="Improved">50% or more</option>
          <option value="Improved">60% or more</option>
          <option value="Improved">70% or more</option>
          <option value="Improved">80% or more</option>
          <option value="Improved">90% or more</option>
        </select>
      </div>
      
      






      <div className="input-group">
        <label htmlFor="symptoms">Symptoms after Study:</label>
        <input type="text" id="symptoms" name="symptoms" placeholder="Enter symptoms after study" />
      </div>
      <div className="input-group">
        <label htmlFor="enrollment-status">Enrollment Status:</label>
        <select id="enrollment-status" name="enrollment-status">
          <option value="">Select enrollment status</option>
          <option value="Enrolling">Enrolling</option>
          <option value="Not yet enrolling">Not yet enrolling</option>
          <option value="Enrollments closed">Enrollments closed</option>
        </select>
      </div>
      <button class="btn-96"><span>Button</span></button>

</div>



  </>
    
  )
}

export default Search1;
