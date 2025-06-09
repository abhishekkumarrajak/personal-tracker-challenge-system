import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../axiosConfig.jsx';
import './pages.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/register', formData);
      console.log(res.data);
      setRegistered(true);
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-page">
      {!registered ? (
        <>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input name="name" onChange={handleChange} placeholder="Name" required />
            <input name="email" onChange={handleChange} placeholder="Email" required />
            <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
            <button type="submit">Register</button>
          </form>
        </>
      ) : (
        <>
          <h2>✅ Account created!</h2>
          <p>Back to Login</p>
          <button onClick={() => navigate('/login')}>Login</button>
        </>
      )}
    </div>
  );
};

export default RegisterPage;
