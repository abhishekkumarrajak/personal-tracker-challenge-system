🧠 Personal Tracker + Challenge System
A full-stack personal productivity tool that helps users build healthy habits and complete daily challenges to boost self-growth and discipline.

1) Features
User Authentication

Register and log in securely using JWT tokens.

Access protected routes like the Dashboard only after login.

Daily Habit Tracker

Users can add and view their daily habits.

Progress is visually shown with checkmarks and logs.

Daily Challenge System

Each day, users receive 2 new random challenges.

Challenges are designed to promote mindfulness, physical activity, and kindness.

Each challenge completed adds 10 points to the user’s score.

Score and Badge System

Points are earned by completing both daily habits and challenges.

Score is tracked and displayed on the dashboard.

Milestone badges (like “Member”) shown based on progress.

Interactive Dashboard

Displays:

Daily habits

Daily challenges with checkboxes

User score

Earned badges

Responsive UI

Clean, modern design.

Fully responsive across desktop and mobile.

MongoDB Integration

Stores all user data, habits, score, and completed challenges persistently.

2) Project Setup Instructions
1. Prerequisites
Node.js and npm installed

MongoDB connection string

Vite (for frontend, optional)

2. Backend Setup
Navigate to the backend folder

Create a .env file with:

PORT

MONGO_URI

JWT_SECRET

Run the backend server

3. Frontend Setup
Navigate to the frontend folder

Ensure the backend API URL is correctly set in axiosConfig.js

Start the frontend server

4. Using the App
Register a new user

Log in to access the dashboard

Add habits, view challenges, and earn points daily

3) Tech Stack
Frontend: React, Axios, Tailwind/CSS

Backend: Node.js, Express

Database: MongoDB (via Mongoose)

Authentication: JWT

Routing: React Router (frontend) + Express Router (backend)
