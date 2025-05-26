import React from 'react';
import Header from '../components/Header2';
import '../assets/css/status/status.css';

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
      <main className="status-container">
        <h1>Applied Job Status</h1>
        <table className="status-table">
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
                <td className={`status-${job.status}`}>
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
