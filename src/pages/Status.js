import React from 'react';
import Header from '../components/Headers/Header2';
import styles from '../assets/css/status/status.module.css';

const Status = () => {
  const [appliedJobs] = React.useState([
    {
      field: 'Software',
      position: 'QA Trainee',
      recommendation: 'Approved yesterday',
      status: 'approved',
    },
    {
      field: 'Telecommunication',
      position: 'Trainee',
      recommendation: 'Rejected yesterday',
      status: 'rejected',
    },
  ]);

  return (
    <div>
      <Header activePage="status" />
      <main className={styles.statusContainer}>
        <h1 className={styles.heading}>Applied Job Status</h1>
        <table className={styles.statusTable}>
          <thead>
            <tr>
              <th>Job Field</th>
              <th>Job Position</th>
              <th>Recommendation</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appliedJobs.map((job, index) => (
              <tr key={index}>
                <td>{job.field}</td>
                <td>{job.position}</td>
                <td>{job.recommendation}</td>
                <td className={styles[`status-${job.status}`]}>
                  {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Status;
