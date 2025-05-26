import React from 'react';
import Header from '../components/Header2';
import '../assets/css/apply/apply.css';

const Apply = () => {
  return (
    <div>
      <Header activePage="apply" />
      <main className="apply-container">
        <h1>Job Application Form</h1>
        <form className="application-form" encType="multipart/form-data" action="#" method="POST">
          {/* Job Title */}
          <div className="form-group">
            <label htmlFor="job-title">Job Title:</label>
            <select id="job-title" name="job-title" required>
              <option value="">-- Select Job --</option>
              <option value="trainee-network-engineer">Trainee Network Engineer</option>
              <option value="accountant">Accountant - Financial Accounting</option>
              <option value="engineer">Engineer</option>
              <option value="technician">Technician</option>
              <option value="web-dev-trainee">Web Development Trainee</option>
            </select>
          </div>

          {/* Name with Initials */}
          <div className="form-group">
            <label htmlFor="name">Name with Initials:</label>
            <input type="text" id="name" name="name" required />
          </div>

          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="full-name">Full Name:</label>
            <input type="text" id="full-name" name="full-name" required />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Gender:</label>
            <div className="radio-group">
              <input type="radio" id="male" name="gender" value="male" required />
              <label htmlFor="male">Male</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Female</label>
            </div>
          </div>

          {/* Date of Birth */}
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required />
          </div>

          {/* Contact Number */}
          <div className="form-group">
            <label htmlFor="contact">Contact Number:</label>
            <input type="tel" id="contact" name="contact" required />
          </div>

          {/* Field of Interest */}
          <div className="form-group">
            <label htmlFor="field">Field of Interest:</label>
            <input type="text" id="field" name="field" required />
          </div>

          {/* CV Upload */}
          <div className="form-group">
            <label htmlFor="cv">Upload Your CV (PDF only):</label>
            <div className="cv-upload-box" id="drop-area">
              <p>
                Drag & Drop your CV here
                <br />
                <span>or</span>
              </p>
              <label htmlFor="cv" className="upload-btn">Browse File</label>
              <input type="file" id="cv" name="cv" accept=".pdf" required />
              <p id="file-name" className="file-name"></p>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Apply;
