import React, { useEffect, useState } from 'react';
import API from '../axiosConfig';
import './pages.css';

const Dashboard = () => {
  const [habits, setHabits] = useState([]);
  const [score, setScore] = useState(0);
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await API.get('/user/me');
        const userHabits = userRes.data.user.habits || [];
        setHabits(userHabits);
        setScore(userRes.data.user.score || 0);

        const challengeRes = await API.get('/user/daily-challenges');
        setChallenges(challengeRes.data.challenges || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleChallengeToggle = async (challengeId, completed) => {
    if (completed) return;

    try {
      const res = await API.post('/user/complete-challenge', { challengeId });
      setScore(res.data.score);
      setChallenges((prev) =>
        prev.map((ch) =>
          ch.id === challengeId ? { ...ch, completed: true } : ch
        )
      );
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to complete challenge');
    }
  };

  return (
    <div className="dashboard">
      <h2 className="dashboard-heading">Welcome to Your Dashboard 🎯</h2>

      <h3 className="dashboard-section-title">Daily Habits:</h3>
      <ul className="habit-list">
        {habits.map((habit, index) => (
          <li key={index} className="habit-item">✅ {habit}</li>
        ))}
      </ul>

      <h3 className="dashboard-section-title">Daily Challenges:</h3>
      <div className="challenge-list">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className={`daily-challenge-item ${
              challenge.completed ? 'daily-challenge-completed' : ''
            }`}
            onClick={() =>
              !challenge.completed && handleChallengeToggle(challenge.id, challenge.completed)
            }
          >
            <input
              type="checkbox"
              checked={challenge.completed}
              readOnly
            />
            <label className="daily-challenge-label">
              {challenge.name} (+{challenge.points} pts)
            </label>
          </div>
        ))}
      </div>

      <h3 className="dashboard-section-title">Your Score:</h3>
      <p className="score-display">🏆 {score} Points</p>

      <h3 className="dashboard-section-title">Your Badges:</h3>
      <p className="badge-display">🥉 Personal Tracker Member</p>
    </div>
  );
};

export default Dashboard;
