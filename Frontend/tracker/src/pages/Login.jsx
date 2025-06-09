import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import API from '../axiosConfig.jsx';
import './pages.css'; 

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
 
  try {
     const { email, password } = formData; 
    const res = await API.post('/auth/login', { email, password });
    login(res.data.token); 
    const userRes = await API.get('/user/me');
    const hasHabits = userRes.data.user.hasSelectedHabits;

    
    if (hasHabits) {
      navigate('/dashboard');
    } else {
      navigate('/habits');
    }

  } catch (err) {
    console.log(err)
    alert(err.response?.data?.message || 'Login failed');
  }
};

  return (
    <div className="auth-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;