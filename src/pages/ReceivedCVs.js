import React from 'react';
import Header3 from '../components/Headers/Header3';
import Sidebar from '../components/Sidebar';
import styles from '../assets/css/recevedcvs/recevedcvs.module.css';

const ReceivedCVs = () => {
  return (
    <div className={styles.receivedcvWrapper}>
      <Header3 />
      <div className={styles.receivedcvContainer}>
        <Sidebar />
        <main className={styles.receivedcvMain}>
          <section className={styles.receivedcvContent}>
            <div className={styles.receivedcvCard}>
              <h2>Received CVs</h2>
              <div className={styles.receivedcvTableContainer}>
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
                    <tr>
                      <td>Software</td>
                      <td>Dinith</td>
                      <td>Male</td>
                      <td>IT</td>
                      <td>074 3231211</td>
                      <td>dinith.pdf</td>
                    </tr>
                    <tr>
                      <td>Telecom</td>
                      <td>Dilshara</td>
                      <td>Male</td>
                      <td>IT</td>
                      <td>074 3231211</td>
                      <td>dilshara.pdf</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ReceivedCVs;
