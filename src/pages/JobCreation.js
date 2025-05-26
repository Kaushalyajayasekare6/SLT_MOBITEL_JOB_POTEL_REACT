import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const JobCreation = () => {
  return React.createElement('div', { className: 'wrapper' },
    React.createElement(Header, { activePage: 'jobcreation' }),
    React.createElement(Sidebar, { activePage: 'jobcreation' }),
    React.createElement('main', null,
      React.createElement('section', { className: 'content' },
        React.createElement('section', { className: 'form-container' },
          React.createElement('h2', null, 'Company Job Vacancy : Web Development Trainee'),
          React.createElement('form', null,
            React.createElement('div', { className: 'form-grid' },
              // Form fields would go here following the same pattern
              React.createElement('div', null,
                React.createElement('label', null, 'Job ID :'),
                React.createElement('input', { type: 'text' })
              ),
              // Other form fields...
              React.createElement('div', { className: 'desc' },
                React.createElement('label', null, 'Job Description :'),
                React.createElement('textarea', { rows: '4' })
              )
            ),
            React.createElement('div', { className: 'btn-wrapper' },
              React.createElement('button', { type: 'submit' }, 'Create')
            )
          )
        )
      )
    )
  );
};

export default JobCreation;