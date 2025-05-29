import React, { useState } from 'react';
import Header3 from '../components/Headers/Header3';
import Sidebar from '../components/Sidebar';
import styles from '../assets/css/jobmodification/jobmodification.module.css';

const initialJobs = [
  { id: 'IT', field: 'QA Trainee', date: '2023/10/14', status: 'Rejected' },
  { id: 'HR', field: 'HR Trainee', date: '2023/09/11', status: 'Accepted' },
  { id: 'Finance', field: 'Accountant', date: '2023/08/16', status: 'Rejected' },
  { id: 'IT', field: 'Web Developer', date: '2023/08/02', status: 'Accepted' },
];

function JobModification() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = initialJobs.filter(
    job =>
      job.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.field.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.date.includes(searchTerm) ||
      job.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header3 />
      <div className={styles.mainLayout}>
        <Sidebar active="modification" />
        <main className={styles.main}>
          <section className={styles.content}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
              <button className={styles.searchButton} onClick={() => {}}>
                🔍
              </button>
            </div>

            <div className={styles.modificationTableWrapper}>
              <table className={styles.table}>
                <thead className={styles.thead}>
                  <tr>
                    <th className={`${styles.theadTh} ${styles.theadThFirstChild}`}>Job ID</th>
                    <th className={styles.theadTh}>Job Field</th>
                    <th className={styles.theadTh}>Created Date</th>
                    <th className={styles.theadTh}>Status</th>
                    <th className={`${styles.theadTh} ${styles.theadThLastChild}`}>Modification</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, idx) => (
                      <tr key={idx} className={styles.trHover}>
                        <td className={styles.tbodyTd}>{job.id}</td>
                        <td className={styles.tbodyTd}>{job.field}</td>
                        <td className={styles.tbodyTd}>{job.date}</td>
                        <td className={`${styles.tbodyTd} ${styles[`status-${job.status.toLowerCase()}`]}`}>
                          {job.status}
                        </td>
                        <td className={`${styles.tbodyTd} ${styles.modificationIcons}`}>
                          <a href="#edit" title="Edit">✏️</a>
                          <a href="#delete" title="Delete">🗑️</a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className={styles.tbodyTd}>No jobs found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default JobModification;
