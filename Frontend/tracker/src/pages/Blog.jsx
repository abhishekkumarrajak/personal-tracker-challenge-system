import React from 'react';
import './pages.css';

const dummyBlogs = [
  { name: "Abhishek", message: "This tracker really helps me stay on track every day!" },
  { name: "Priya", message: "I love the challenges feature, it's so motivating!" },
  { name: "Rahul", message: "Clean UI and very useful! Waiting for more features." },
    { name: "Neha", message: "Personalized goals make it easier to stay disciplined. Great tool!" },
  { name: "Aman", message: "Finally, a simple and efficient productivity tracker." },
  { name: "Sana", message: "I've been using it daily, and the streak system is addictive!" }
];

const Blog = () => {
  return (
    <div className="blog-page">
      <h2>User Blogs</h2>
      <div className="blog-container">
        {dummyBlogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <h3>{blog.name}</h3>
            <p>{blog.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

