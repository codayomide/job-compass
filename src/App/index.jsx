import { Route, Routes } from 'react-router-dom';
import Dash from './Dash';
import Navin from './Navin';
import Dashboard from '../Dashboard';
import CreateJobs from '../Listings/CreateJobs';
import JobsContainer from '../Listings/JobsContainer';
import JobApplyPage from '../Listings/JobApplyPage';
import AuthLoading from '../Auth/AuthLoading';

import React, { useEffect, useState } from 'react';

const DashboardRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        window.location.href = '/login';
        return;
      }

      try {
        const response = await fetch('https://drab-tan-chimpanzee-hose.cyclic.app/api/protected', {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          }
        });

        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(!!data.data);
          localStorage.setItem('user', JSON.stringify(data.data))
        } else {
          throw new Error('Error fetching user authentication');
        }
      } catch (error) {
        console.error(error);
        window.location.href = '/login';
      } finally {
        setIsLoading(false);
      }
    };

    checkUserAuthentication();
  }, []);

  if (isLoading) {
    return <div>
      <AuthLoading />
    </div>;
  }

  if (!isAuthenticated) {
    return <div>Unauthorized</div>;
  }

  return (
    <div id="app">
      <div id="nav">
        <Navin />
      </div>
      <div id="body">
        <div id="side">
          <Dash />
        </div>
        <div id="main">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/listings' element={<JobsContainer />} />
            <Route path='/listings/create' element={<CreateJobs />} />
            <Route path='/listings/apply' element={<JobApplyPage />} />
          </Routes>
        </div>
      </div>
      <div id="footer">
        {/* Add your footer component or content here */}
      </div>
    </div>
  );
};

export default DashboardRoutes;
