// pages/HabitSelection.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../axiosConfig.jsx';
import './pages.css';

const habitOptions = [
  "Drink 3 litres of Water 💧",
  "15 min Walk Everyday 🚶",
  " Writing Journal Thoughts 📝",
  "No Sugar Day 🚫🍬",
  "Reading  10 Pages Everyday 📖"
];

const HabitSelection = () => {
  const [selectedHabits, setSelectedHabits] = useState([]);
  const navigate = useNavigate();

  const handleChange = (habit) => {
    setSelectedHabits((prev) =>
      prev.includes(habit) ? prev.filter(h => h !== habit) : [...prev, habit]
    );
  };

  const handleSubmit = async () => {
    try {
      await API.post('/user/set-habits', { habits: selectedHabits });
      localStorage.setItem("firstLogin", "false");
      navigate('/dashboard');
    } catch (error) {
      alert(error.response?.data?.message || "Failed to set habits.");
    }
  };

  return (
    <div className="habit-selection-page">
      <h2>Select Your Daily Habits</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        {habitOptions.map((habit, idx) => (
          <div key={idx} className="habit-option">
            <input
              type="checkbox"
              id={`habit-${idx}`} 
              checked={selectedHabits.includes(habit)}
              onChange={() => handleChange(habit)}
            />
            <label htmlFor={`habit-${idx}`}>{habit}</label>  
          </div>
        ))}
        <button type="submit">Save & Go to Dashboard</button>
      </form>
    </div>
  );
};

export default HabitSelection;
