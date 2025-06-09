import React from 'react';
import './pages.css';



function Features() {
  return (
    <div className="features-container">
      <h1 className="features-heading">📌 Features of Personal Tracker + Challenge System</h1>

      <div className="feature-card">
        <h2>🧠 Habit Tracking</h2>
        <p>Track your daily habits and stay consistent with your goals. Visualize your streaks and progress over time.</p>
      </div>

      <div className="feature-card">
        <h2>⚔️ Personal Challenges</h2>
        <p>Join or create custom challenges — like "No Sugar for 7 Days" or "Early Wake-Up Challenge" — and test your limits.</p>
      </div>

      <div className="feature-card">
        <h2>🏆 Scoring & Badges</h2>
        <p>Earn points for consistency and unlock badges like "StreakMaster" and "Challenge Champ".</p>
      </div>

      <div className="feature-card">
        <h2>📈 Progress Dashboard</h2>
        <p>See your journey at a glance with interactive charts, scores, and performance graphs.</p>
      </div>

      <div className="feature-card">
        <h2>📅 Smart Reminders</h2>
        <p>Get friendly reminders to keep up with your habits and challenges, based on your activity and preferences.</p>
      </div>

      <div className="feature-card">
        <h2>👥 Community Features (Coming Soon)</h2>
        <p>Compete with friends, share progress, and support others in your circle. Social motivation made easy.</p>
      </div>
    </div>
  );
}

export default Features;

