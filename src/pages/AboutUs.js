import React from 'react';
import Header from '../components/Header';
import styles from '../assets/css/aboutus/aboutus.module.css';
import teamImage from '../assets/images/aboutus/2.png';

const AboutUs = () => {
  return React.createElement('div', null,
    React.createElement(Header, { activePage: 'aboutus' }),
    
    React.createElement('main', { className: styles.aboutContainer },
      React.createElement('section', { className: styles.aboutHero },
        React.createElement('h1', null, 'About Us')
      ),
      
      React.createElement('section', { className: styles.aboutContent },
        React.createElement('div', { className: styles.aboutText },
          React.createElement('p', null,
            "Welcome to SLTMobitel, where innovation meets passion. " +
            "Established with a commitment to advancing Sri Lanka's telecommunications infrastructure, " +
            "we strive to deliver cutting-edge ICT solutions. Our dedicated team of professionals is " +
            "driven by a shared vision: to connect people and businesses through reliable, high-speed networks. " +
            "At SLTMobitel, we believe in empowering communities through technology. Join us on this exciting " +
            "journey as we pioneer the future of digital connectivity in Sri Lanka."
          )
        ),
        
        React.createElement('div', { className: styles.aboutImage },
          React.createElement('img', { 
            src: teamImage, 
            alt: 'SLTMobitel Team',
            className: styles.aboutImg 
          })
        )
      ),
      
      React.createElement('div', { className: styles.learnMoreBtn },
        React.createElement('a', { href: '#/status' }, 'Learn more')
      )
    )
  );
};

export default AboutUs;