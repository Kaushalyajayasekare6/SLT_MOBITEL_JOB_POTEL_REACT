import React from 'react';
import styles from '../assets/css/login//login.module.css';
import loginImage from '../assets/images/login/1.png';
import googleIcon from '../assets/images/login/2.png';
import facebookIcon from '../assets/images/login/3.png';

const Login = () => {
  return React.createElement('div', { className: styles.loginPage },
    React.createElement('div', { className: styles.loginContainer },
      React.createElement('div', { className: styles.loginForm },
        React.createElement('h2', null, 'Login'),
        React.createElement('form', null,
          React.createElement('div', { className: styles.inputGroup },
            React.createElement('label', { htmlFor: 'username' }, 'Email address:'),
            React.createElement('input', { 
              type: 'text', 
              id: 'username', 
              name: 'username', 
              placeholder: 'Enter your email', 
              required: true 
            })
          ),
          React.createElement('div', { className: styles.inputGroup },
            React.createElement('label', { htmlFor: 'password' }, 'Password:'),
            React.createElement('input', { 
              type: 'password', 
              id: 'password', 
              name: 'password', 
              placeholder: 'Enter your password', 
              required: true 
            })
          ),
          React.createElement('a', { href: '#/jobs', className: styles.btn }, 'Sign In'),
          React.createElement('div', { className: styles.signup }, 
            'Don\'t have an account? ', 
            React.createElement('a', { href: '#/register' }, 'Sign Up')
          ),
          React.createElement('div', { className: styles.divider }, 'or'),
          React.createElement('div', { className: styles.socialLogin },
            React.createElement('div', { className: styles.socialIcon },
              React.createElement('img', { src: googleIcon, alt: 'Google' })
            ),
            React.createElement('div', { className: styles.socialIcon },
              React.createElement('img', { src: facebookIcon, alt: 'Facebook' })
            )
          )
        )
      ),
      React.createElement('div', { className: styles.loginImage },
        React.createElement('img', { src: loginImage, alt: 'SLTMobitel Job Portal' })
      )
    )
  );
};

export default Login;