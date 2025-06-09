import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import Featurelist from './components/Featurelist.jsx';
import AboutUs from './components/AboutUs.jsx';
import Footer from './components/Footer.jsx';
import LoginPage from './pages/Login.jsx';
import RegisterPage from './pages/Signin.jsx';
import Blog from './pages/Blog.jsx';
import Features from './pages/Features.jsx';
import Dashboard from './pages/Dashboard.jsx';         
import HabitSelection from './pages/HabitSelection.jsx'; 

import { AuthContext } from './context/AuthContext';    
import './app.css';

function App() {
  const { isLoggedIn } = useContext(AuthContext); 

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Featurelist />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/habits"
          element={isLoggedIn ? <HabitSelection /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
