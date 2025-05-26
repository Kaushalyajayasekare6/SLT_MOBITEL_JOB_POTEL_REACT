import React from 'react';

const JobCard = ({ job }) => {
  return React.createElement('div', { className: 'job-card' },
    React.createElement('h3', null, job.title),
    React.createElement('p', null, job.description),
    React.createElement('ul', null,
      job.requirements.map((requirement, index) => 
        React.createElement('li', { key: index }, requirement)
      )
    ),
    React.createElement('a', { 
      href: `#/apply?job=${job.id}`, 
      className: 'apply-btn' 
    }, 'Apply Now')
  );
};

export default JobCard;