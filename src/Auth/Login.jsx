import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../App/Navbar';

const Login = () => {
  const [token, setToken] = useState(null);
  const [loginErrors, setLoginErrors] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
   
  const onFormSubmit = (data) => {
    fetch('https://jobcompass.cyclic.app/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      const token = data.accessToken;

      console.log(token)

      localStorage.setItem('token', token);

      setToken(token);

    //   window.location.href = '/dashboard';

      setLoginErrors(data.message);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="login-container">
      <Navbar />
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form-group">
          <label>Email</label>
          <input {...register('email', { required: true })} />
          {errors.email && <span className="error-message">Email is required</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input {...register('password', { required: true })} />
          {errors.password && <span className="error-message">Password is required</span>}
        </div>
        {loginErrors && <span className="error-message">{loginErrors}</span>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
