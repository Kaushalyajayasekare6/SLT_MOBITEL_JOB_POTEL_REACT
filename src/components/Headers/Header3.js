import React from 'react';
import styles from './Header.module.css';
import logoImage from '../../assets/images/home/1.png'; 

const Header3 = () => {
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
            href: '#/home',
            className: styles.link 
          }, 'Home')
        ),
        React.createElement('li', null,
          React.createElement('a', { 
            href: '#/login',
            className: styles.link 
          }, 'Logout')
        )
      )
    )
  );
};

export default Header3;
