import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return React.createElement('footer', { className: styles.footer },
    React.createElement('div', { className: styles.footerContent },
      React.createElement('div', { className: styles.footerSection },
        React.createElement('h4', null, 'Contact Us'),
        React.createElement('p', null,
          'Sri Lanka Telecom PLC', React.createElement('br'),
          'Lotus Road, P.O.Box 503,', React.createElement('br'),
          'Colombo 01, Sri Lanka.', React.createElement('br'),
          'Telephone: +94 11 2 321 321'
        )
      ),
      React.createElement('div', { className: styles.footerSection },
        React.createElement('h4', null, 'Quick Links'),
        React.createElement('ul', null,
          React.createElement('li', null, 
            React.createElement('a', { href: '#/about' }, 'About Us')
          ),
          React.createElement('li', null, 
            React.createElement('a', { href: '#/jobs' }, 'Careers')
          ),
          React.createElement('li', null, 
            React.createElement('a', { href: '#/login' }, 'Login')
          ),
          React.createElement('li', null, 
            React.createElement('a', { href: '#/apply' }, 'Apply')
          )
        )
      ),
      React.createElement('div', { className: styles.footerSection },
        React.createElement('h4', null, 'Follow Us'),
        React.createElement('div', null,
          React.createElement('a', { href: '#', className: styles.socialLink }, 
            React.createElement('i', { className: 'fab fa-facebook' })
          ),
          React.createElement('a', { href: '#', className: styles.socialLink }, 
            React.createElement('i', { className: 'fab fa-twitter' })
          ),
          React.createElement('a', { href: '#', className: styles.socialLink }, 
            React.createElement('i', { className: 'fab fa-linkedin' })
          )
        )
      )
    ),
    React.createElement('div', { className: styles.footerBottom },
      '© 2025 SLTMobitel Training Program. All rights reserved.'
    )
  );
};

export default Footer;