import React, { useState } from 'react';
import Header3 from '../components/Headers/Header3';
import Sidebar from '../components/Sidebar';
import styles from '../assets/css/jobcreation/jobcreation.module.css';

const JobCreation = () => {
  const [formData, setFormData] = useState({
    jobId: '',
    jobPosition: '',
    contactNumber: '',
    jobField: '',
    salary: '',
    dueDate: '',
    background: '',
    companyEmail: '',
    companyLocation: '',
    workType: '',
    jobDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <>
      <Header3 />
      <div className={styles.container}>
        <Sidebar activePage="jobcreation" />
        <section className={styles.formSection}>
          <h2>Company Job Vacancy: Web Development Trainee</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div>
                <label>Job ID:</label>
                <input
                  type="text"
                  name="jobId"
                  value={formData.jobId}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Job Position:</label>
                <input
                  type="text"
                  name="jobPosition"
                  value={formData.jobPosition}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Contact Number:</label>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Job Field:</label>
                <input
                  type="text"
                  name="jobField"
                  value={formData.jobField}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Salary:</label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Due Date:</label>
                <input
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Background:</label>
                <input
                  type="text"
                  name="background"
                  value={formData.background}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Company Email:</label>
                <input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Company Location:</label>
                <input
                  type="text"
                  name="companyLocation"
                  value={formData.companyLocation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Work Type:</label>
                <input
                  type="text"
                  name="workType"
                  value={formData.workType}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.desc}>
                <label>Job Description:</label>
                <textarea
                  rows={4}
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.btnWrapper}>
              <button type="submit">Create</button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default JobCreation;
