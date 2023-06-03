import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const AuthLoading = () => {
  return (
    <div className="auth-loading">
      <FaSpinner className="spinner" />
      <p className="text">Checking authentication...</p>
    </div>
  );
};

export default AuthLoading;
