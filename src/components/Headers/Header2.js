import React from 'react';
import styles from './Header.module.css';
import logoImage from '../../assets/images/home/1.png'; // Import the logo image

const Header = ({ activePage }) => {
  return React.createElement('header', { className: styles.header },
    React.createElement('div', { className: styles.logoContainer },
      React.createElement('img', {
        src: logoImage,
        alt: 'SLTMobitel Logo',
        className: styles.logo
      }),
      React.createElement('h2', null, 'Training Program')
    ),
    React.createElement('nav', { className: styles.nav },
      React.createElement('ul', null,
        React.createElement('li', null,
          React.createElement('a', {
            href: '#/status',
            className: activePage === 'status' ? styles.active : ''
          }, 'Job Status')
        ),
        React.createElement('li', null,
          React.createElement('a', {
            href: '#/apply',
            className: activePage === 'apply' ? styles.active : ''
          }, 'Apply for Job')
        ),
        React.createElement('li', null,
          React.createElement('a', {
            href: '#/jobs',
            className: activePage === 'jobs' ? styles.active : ''
          }, 'Jobs for You')
        ),
        React.createElement('li', null,
          React.createElement('a', {
            href: '#/home',
            className: activePage === 'home' ? styles.active : ''
          }, 'Home')
        ),
        React.createElement('li', null,
          React.createElement('a', {
            href: '#/login',
            className: activePage === 'login' ? styles.active : ''
          }, 'Login')
        )
      )
    )
  );
};

export default Header;
