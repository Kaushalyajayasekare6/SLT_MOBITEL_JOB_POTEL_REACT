import React from 'react';
import Header3 from '../components/Headers/Header3';
import Sidebar from '../components/Sidebar';
import styles from '../assets/css/AcceptedCVs/AcceptedCVs.module.css';

function AcceptedCVs() {
  const acceptedCVsData = [
    {
      jobTitle: "Software Engineer",
      name: "Kaushalya Jayasekara",
      gender: "Female",
      field: "IT",
      contact: "00000000",
      cvLink: "#"
    },
    {
      jobTitle: "Network Technician",
      name: "Nimal Perera",
      gender: "Male",
      field: "Networking",
      contact: "0712345678",
      cvLink: "#"
    }
  ];

  return (
    <div className={styles.acceptedcvWrapper}>
      <Header3 />
      <div className={styles.acceptedcvContainer}>
        <Sidebar />
        <main className={styles.acceptedcvMain}>
          <section className={styles.acceptedcvContent}>
            <div className={styles.acceptedcvCard}>
              <h2>Accepted CVs</h2>
              <div className={styles.acceptedcvTableContainer}>
                <table className={styles.table}>
                  <thead className={styles.tableHead}>
                    <tr>
                      <th>Job Title</th>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Field</th>
                      <th>Contact Number</th>
                      <th>CV</th>
                    </tr>
                  </thead>
                  <tbody>
                    {acceptedCVsData.map((cv, index) => (
                      <tr key={index}>
                        <td>{cv.jobTitle}</td>
                        <td>{cv.name}</td>
                        <td>{cv.gender}</td>
                        <td>{cv.field}</td>
                        <td>{cv.contact}</td>
                        <td>
                          <a 
                            href={cv.cvLink} 
                            className={styles.viewBtn}
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    ))}
                    {acceptedCVsData.length === 0 && (
                      <tr>
                        <td colSpan="6">No accepted CVs available.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default AcceptedCVs;
