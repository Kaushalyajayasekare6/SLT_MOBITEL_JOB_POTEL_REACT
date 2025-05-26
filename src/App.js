import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Jobs from './pages/Jobs';
import Apply from './pages/Apply';
import Login from './pages/Login';
import Register from './pages/Register';
import Status from './pages/Status';
import JobCreation from './pages/JobCreation';
import JobModification from './pages/JobModification';
import ReceivedCVs from './pages/ReceivedCVs';
import AcceptedCVs from './pages/AcceptedCVs';

const router = createHashRouter([
  {
    path: '/',
    element: React.createElement(Home)
  },
  {
    path: '/home',
    element: React.createElement(Home)
  },
  {
    path: '/aboutus',
    element: React.createElement(AboutUs)
  },
  {
    path: '/jobs',
    element: React.createElement(Jobs)
  },
  {
    path: '/apply',
    element: React.createElement(Apply)
  },
  {
    path: '/login',
    element: React.createElement(Login)
  },
  {
    path: '/register',
    element: React.createElement(Register)
  },
  {
    path: '/status',
    element: React.createElement(Status)
  },
  {
    path: '/jobcreation',
    element: React.createElement(JobCreation)
  },
  {
    path: '/jobmodification',
    element: React.createElement(JobModification)
  },
  {
    path: '/recivedcv',
    element: React.createElement(ReceivedCVs)
  },
  {
    path: '/acceptcv',
    element: React.createElement(AcceptedCVs)
  }
]);

const App = () => {
  return React.createElement(React.StrictMode, null,
    React.createElement(RouterProvider, { router: router })
  );
};

export default App;