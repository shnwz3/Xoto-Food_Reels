import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

const UserLogin = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <Link to="/" className="back-to-home">← Back to Home</Link>
        <div className="auth-logo">xoto</div>
        <h2 className="auth-title">Login</h2>
        <p className="auth-subtitle">Welcome back! Please enter your details.</p>
        
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          
          <button type="submit" className="auth-button">Login</button>
        </form>
        
        <div className="auth-footer">
          New to xoto? <Link to="/user/register" className="auth-link">Create account</Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;