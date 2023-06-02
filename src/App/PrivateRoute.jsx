import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token');
  return (
    <Routes>
      <Route {...rest} render={props => (
      isAuthenticated
        ? <Component {...props} />
        // : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        : <Navigate to="/login" replace={true} />
      )} />
    </Routes>
  );
};

export default PrivateRoute;