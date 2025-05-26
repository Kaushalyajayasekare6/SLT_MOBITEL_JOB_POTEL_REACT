import React from 'react';
import styles from '../assets/css/register/register.module.css';
import registerImage from '../assets/images/register/1.png';

const Register = () => {
  const [formData, setFormData] = React.useState({
    userid: '',
    name: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Proceed with registration
  };

  return React.createElement('div', { className: styles.registerPage },
    React.createElement('div', { className: styles.registerContainer },
      React.createElement('div', { className: styles.registerImage },
        React.createElement('img', { 
          src: registerImage, 
          alt: 'Registration Illustration',
          className: styles.registerImg 
        })
      ),
      React.createElement('div', { className: styles.registerForm },
        React.createElement('h2', null, 'Register'),
        React.createElement('form', { onSubmit: handleSubmit },
          // User ID Field
          React.createElement('div', { className: styles.inputGroup },
            React.createElement('label', { htmlFor: 'userid' }, 'User ID'),
            React.createElement('span', { className: styles.divider }),
            React.createElement('input', { 
              type: 'text', 
              id: 'userid', 
              name: 'userid', 
              placeholder: 'Enter your user ID', 
              value: formData.userid,
              onChange: handleChange,
              required: true 
            })
          ),
          // Name Field
          React.createElement('div', { className: styles.inputGroup },
            React.createElement('label', { htmlFor: 'name' }, 'Name'),
            React.createElement('span', { className: styles.divider }),
            React.createElement('input', { 
              type: 'text', 
              id: 'name', 
              name: 'name', 
              placeholder: 'Enter your full name', 
              value: formData.name,
              onChange: handleChange,
              required: true 
            })
          ),
          // Password Field
          React.createElement('div', { className: styles.inputGroup },
            React.createElement('label', { htmlFor: 'password' }, 'Password'),
            React.createElement('span', { className: styles.divider }),
            React.createElement('input', { 
              type: 'password', 
              id: 'password', 
              name: 'password', 
              placeholder: 'Create your password', 
              value: formData.password,
              onChange: handleChange,
              required: true 
            })
          ),
          // Confirm Password Field
          React.createElement('div', { className: styles.inputGroup },
            React.createElement('label', { htmlFor: 'confirmPassword' }, 'Confirm Password'),
            React.createElement('span', { className: styles.divider }),
            React.createElement('input', { 
              type: 'password', 
              id: 'confirmPassword', 
              name: 'confirmPassword', 
              placeholder: 'Re-enter your password', 
              value: formData.confirmPassword,
              onChange: handleChange,
              required: true 
            })
          ),
          // Submit Button
          React.createElement('button', { type: 'submit', className: styles.btn }, 'Submit'),
          // Login Redirect
          React.createElement('div', { className: styles.loginRedirect },
            'Already have an account? ',
            React.createElement('a', { href: '#/login', className: styles.loginLink }, 'Login here')
          )
        )
      )
    )
  );
};

export default Register;