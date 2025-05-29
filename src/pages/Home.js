import React from 'react';
import Header from '../components/Headers/Header';
import Footer from '../components/Footer/Footer';
import styles from '../assets/css/home/home.module.css'; 
import bannerImage from '../assets/images/home/3.png';



const Home = () => {
  return React.createElement('div', { className: styles.homePage },
    React.createElement(Header, { activePage: 'home' }),
    
   React.createElement('section', { className: styles.heroBanner },
  React.createElement('img', { 
    src: bannerImage, 
    alt: 'SLTMobitel Training Program',
    className: styles.bannerImage
  })
),
    
    React.createElement('section', { className: styles.jobCategories },
      React.createElement('div', { className: styles.jobCard },
        React.createElement('h3', { className: styles.jobTitle }, 'Trainee Network Engineers'),
        React.createElement('p', { className: styles.jobDescription }, 'We are hiring new trainee network engineers for SLTMobitel. Only an associate degree, a bachelor\'s degree in computer science, information technology, computer engineering, or a related field undergraduates (3rd year, 4th year), and fresh graduates are preferred.'),
        React.createElement('ul', { className: styles.jobRequirements },
          React.createElement('li', null, 'No job experiences are needed.'),
          React.createElement('li', null, 'Networking knowledge'),
          React.createElement('li', null, 'Operating systems knowledge'),
          React.createElement('li', null, 'Network devices and security knowledge'),
          React.createElement('li', null, 'Networking device configuration knowledge')
        ),
        React.createElement('a', { href: '#/apply', className: styles.applyBtn }, 'Apply Now')
      ),
      
      React.createElement('div', { className: styles.jobCard },
        React.createElement('h3', { className: styles.jobTitle }, 'Accountant – Financial Accounting'),
        React.createElement('p', { className: styles.jobDescription }, 'Sri Lanka Telecom is in search of high caliber, result oriented and qualified individuals capable of playing a key role in the finance team. You will be engaged in a range of tasks in financial accounting in a highly IT-backed work environment and expected to collaborate with subsidiary companies and cross-functional departments to implement key business drivers and operational controls.'),
        React.createElement('ul', { className: styles.jobRequirements },
          React.createElement('li', null, 'Associate Membership of ICA/CIMA/ACCA'),
          React.createElement('li', null, 'Preference will be given to the candidates who are prize winners.'),
          React.createElement('li', null, 'Be a resilient leader with excellent interpersonal and communication skills.')
        ),
        React.createElement('a', { href: '#/apply', className: styles.applyBtn }, 'Apply Now')
      ),
      
      React.createElement('div', { className: styles.jobCard },
        React.createElement('h3', { className: styles.jobTitle }, 'Engineers'),
        React.createElement('p', { className: styles.jobDescription }, 'As an Engineer of the pioneering ICT solutions provider, you will be a distinguished member of our team, which is mainly responsible for planning, designing, operating and maintaining our state-of-the-art ICT infrastructure.'),
        React.createElement('ul', { className: styles.jobRequirements },
          React.createElement('li', null, 
            'Four-year Degree in BSc Engineering/Bachelor of Technology from a University/Institute recognized by UGC - Sri Lanka and Institute of Engineers -Sri Lanka, equivalent to SLQF 6. ',
            React.createElement('b', null, 'OR')
          ),
          React.createElement('li', null, 
            'Associate Member of the Institute of Engineers, Sri Lanka. ',
            React.createElement('b', null, 'AND')
          ),
          React.createElement('li', null, 'Thorough knowledge and experience in the field of Data Centre Network Security/IDC Storage Systems/Hybrid Cloud Deployment & Management and the area of IT & Digital Platforms would be a definite advantage.')
        ),
        React.createElement('a', { href: '#/apply', className: styles.applyBtn }, 'Apply Now')
      ),
      
      React.createElement('div', { className: styles.jobCard },
        React.createElement('h3', { className: styles.jobTitle }, 'Technicians'),
        React.createElement('p', { className: styles.jobDescription }, 'Technicians are mainly responsible to install, maintain and repair electronic communications equipment in telecommunication networks and internet supply systems. Examine telecommunications equipment and systems to find and repair faults.'),
        React.createElement('ul', { className: styles.jobRequirements },
          React.createElement('li', null, '06 passes at the G.C.E. (O/L) exam including Sinhala/Tamil and English Language and Mathematics and 03 credit passes in one sitting AND'),
          React.createElement('li', null, 'Should have obtained Skilled Competence Certificate - NAITA in the relevant field equivalent to NVQ Level 4 (Telecommunication / Electrical / Electronic / ICT / Power / Air Conditioning etc).')
        ),
        React.createElement('a', { href: '#/apply', className: styles.applyBtn }, 'Apply Now')
      )
    ),
    
    React.createElement(Footer, null)
  );
};

export default Home;