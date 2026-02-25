import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

const UserRegister = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <Link to="/" className="back-to-home">← Back to Home</Link>
        <div className="auth-logo">xoto</div>
        <h2 className="auth-title">Create an account</h2>
        <p className="auth-subtitle">Join us to discover the best food around you.</p>
        
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" required />
          </div>
          
          <button type="submit" className="auth-button">Create account</button>
        </form>
        
        <div className="auth-footer">
          Already have an account? <Link to="/user/login" className="auth-link">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;